'use client'

import { Angry, Check, Frown, Laugh, Loader2, Smile } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { useSubmitFeedback } from '@/hooks/use-feedback'

const feedback = [
  { happiness: 4, emoji: <Laugh size={16} className="stroke-inherit" /> },
  { happiness: 3, emoji: <Smile size={16} className="stroke-inherit" /> },
  { happiness: 2, emoji: <Frown size={16} className="stroke-inherit" /> },
  { happiness: 1, emoji: <Angry size={16} className="stroke-inherit" /> }
]

export const Feedback = () => {
  const textRef = useRef<HTMLTextAreaElement>(null)
  const [happiness, setHappiness] = useState<null | number>(null)
  const [isSubmitted, setSubmissionState] = useState(false)
  const { submitFeedback, isLoading, isSent } = useSubmitFeedback()

  useEffect(() => {
    if (!happiness) {
      // Limpar textarea
      if (textRef.current) textRef.current!.value = ''
    }
  }, [happiness])

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null
    let submissionStateTimeout: NodeJS.Timeout | null = null

    if (isSent) {
      setSubmissionState(true)

      // Limpar textarea e estado de felicidade do cliente
      timeout = setTimeout(() => {
        setHappiness(null)
        if (textRef.current) textRef.current!.value = ''
      }, 2000)

      // Limpar texto de envio bem-sucedido 100ms depois
      submissionStateTimeout = setTimeout(() => {
        setSubmissionState(false)
      }, 2200)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
      if (submissionStateTimeout) clearTimeout(submissionStateTimeout)
    }
  }, [isSent])

  return (
    <div
      className={twMerge(
        'w-fit overflow-hidden border py-2 shadow-sm transition-all duration-300',
        happiness ? 'rounded-lg' : 'rounded-2xl',
        'dark:border-neutral-800 dark:bg-neutral-950'
      )}>
      <span className="flex items-center justify-center gap-3 pl-4 pr-2">
        <div className="text-sm text-black dark:text-neutral-400">Gosta do nosso serviço?</div>
        <div className="flex items-center text-neutral-400">
          {feedback.map((e) => (
            <button
              onClick={() => setHappiness((prev) => (e.happiness === prev ? null : e.happiness))}
              className={twMerge(
                happiness === e.happiness
                  ? 'bg-blue-100 stroke-blue-500 dark:bg-sky-900 dark:stroke-sky-500'
                  : 'stroke-neutral-500 dark:stroke-neutral-400',
                'flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-blue-100 hover:stroke-blue-500 hover:dark:bg-sky-900 hover:dark:stroke-sky-500'
              )}
              key={e.happiness}>
              {e.emoji}
            </button>
          ))}
        </div>
      </span>
      <div
        aria-hidden={!happiness}
        className={twMerge(
          'overflow-hidden px-2 transition-[height,width] duration-300',
          happiness ? 'h-[195px] w-[330px]' : 'h-0'
        )}>
        {!isSubmitted ? (
          <span className="opacity-100 transition-opacity duration-200">
            <textarea
              ref={textRef}
              placeholder="Sua dashboard é maneeeeira"
              className="min-h-32 w-full resize-none rounded-md border bg-transparent p-2 text-sm placeholder-neutral-400 focus:border-neutral-400 focus:outline-0 dark:border-neutral-800 focus:dark:border-white"
            />
            <div className="flex h-fit w-full justify-end">
              <button
                onClick={() => submitFeedback(happiness!, textRef.current!.value || '')}
                className={cn(
                  'mt-1 flex h-9 items-center justify-center rounded-md border bg-neutral-950 px-2 text-sm text-white dark:bg-white dark:text-neutral-950',
                  {
                    'bg-neutral-500 dark:bg-white dark:text-neutral-500': isLoading
                  }
                )}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </span>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-start gap-2 pt-9 text-sm font-normal transition-all duration-200">
            <div className="flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full bg-blue-500 dark:bg-sky-500">
              <Check strokeWidth={2.5} size={16} className="stroke-white" />
            </div>
            <div>Recebemos o seu Feedback!</div>
            <div>Obrigado pelo apoio.</div>
          </div>
        )}
      </div>
    </div>
  )
}