"use client"

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"

const stiffness = 400
const damping = 30
const MIN_WIDTH = 691
const MAX_HEIGHT_MOBILE_ULTRA = 400
const MAX_HEIGHT_MOBILE_MASSIVE = 700

const min = (a: number, b: number) => (a < b ? a : b)

export type SizePresets =
  | "reset"
  | "empty"
  | "default"
  | "compact"
  | "compactLong"
  | "large"
  | "long"
  | "minimalLeading"
  | "minimalTrailing"
  | "compactMedium"
  | "medium"
  | "tall"
  | "ultra"
  | "massive"

const SIZE_PRESETS = {
  RESET: "reset",
  EMPTY: "empty",
  DEFAULT: "default",
  COMPACT: "compact",
  COMPACT_LONG: "compactLong",
  LARGE: "large",
  LONG: "long",
  MINIMAL_LEADING: "minimalLeading",
  MINIMAL_TRAILING: "minimalTrailing",
  COMPACT_MEDIUM: "compactMedium",
  MEDIUM: "medium",
  TALL: "tall",
  ULTRA: "ultra",
  MASSIVE: "massive",
} as const

type Preset = {
  width: number
  height?: number
  aspectRatio: number
  borderRadius: number
}

const DynamicIslandSizePresets: Record<SizePresets, Preset> = {
  [SIZE_PRESETS.RESET]: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 20,
  },
  [SIZE_PRESETS.EMPTY]: {
    width: 0,
    aspectRatio: 0,
    borderRadius: 0,
  },
  [SIZE_PRESETS.DEFAULT]: {
    width: 150,
    aspectRatio: 44 / 150,
    borderRadius: 46,
  },
  [SIZE_PRESETS.MINIMAL_LEADING]: {
    width: 52.33,
    aspectRatio: 44 / 52.33,
    borderRadius: 22,
  },
  [SIZE_PRESETS.MINIMAL_TRAILING]: {
    width: 52.33,
    aspectRatio: 44 / 52.33,
    borderRadius: 22,
  },
  [SIZE_PRESETS.COMPACT]: {
    width: 235,
    aspectRatio: 44 / 235,
    borderRadius: 46,
  },
  [SIZE_PRESETS.COMPACT_LONG]: {
    width: 300,
    aspectRatio: 44 / 235,
    borderRadius: 46,
  },
  [SIZE_PRESETS.COMPACT_MEDIUM]: {
    width: 351,
    aspectRatio: 64 / 371,
    borderRadius: 44,
  },
  [SIZE_PRESETS.LONG]: {
    width: 371,
    aspectRatio: 84 / 371,
    borderRadius: 42,
  },
  [SIZE_PRESETS.MEDIUM]: {
    width: 371,
    aspectRatio: 210 / 371,
    borderRadius: 22,
  },
  [SIZE_PRESETS.LARGE]: {
    width: 371,
    aspectRatio: 84 / 371,
    borderRadius: 42,
  },
  [SIZE_PRESETS.TALL]: {
    width: 371,
    aspectRatio: 210 / 371,
    borderRadius: 42,
  },
  [SIZE_PRESETS.ULTRA]: {
    width: 630,
    aspectRatio: 630 / 800,
    borderRadius: 42,
  },
  [SIZE_PRESETS.MASSIVE]: {
    width: 891,
    height: 1900,
    aspectRatio: 891 / 891,
    borderRadius: 42,
  },
}

type BlobStateType = {
  size: SizePresets
  previousSize: SizePresets | undefined
  animationQueue: Array<{ size: SizePresets; delay: number }>
  isAnimating: boolean
}

type BlobAction =
  | { type: "SET_SIZE"; newSize: SizePresets }
  | { type: "INITIALIZE"; firstState: SizePresets }
  | {
      type: "SCHEDULE_ANIMATION"
      animationSteps: Array<{ size: SizePresets; delay: number }>
    }
  | { type: "ANIMATION_END" }

type BlobContextType = {
  state: BlobStateType
  dispatch: React.Dispatch<BlobAction>
  setSize: (size: SizePresets) => void
  scheduleAnimation: (
    animationSteps: Array<{ size: SizePresets; delay: number }>
  ) => void
  presets: Record<SizePresets, Preset>
}

const BlobContext = createContext<BlobContextType | undefined>(undefined)

const blobReducer = (
  state: BlobStateType,
  action: BlobAction
): BlobStateType => {
  switch (action.type) {
    case "SET_SIZE":
      return {
        ...state,
        size: action.newSize,
        previousSize: state.size,
        isAnimating: false, // Only set isAnimating to true if there are more steps
      }
    case "SCHEDULE_ANIMATION":
      return {
        ...state,
        animationQueue: action.animationSteps,
        isAnimating: action.animationSteps.length > 0,
      }
    case "INITIALIZE":
      return {
        ...state,
        size: action.firstState,
        previousSize: SIZE_PRESETS.EMPTY,
        isAnimating: false,
      }
    case "ANIMATION_END":
      return {
        ...state,
        isAnimating: false,
      }
    default:
      return state
  }
}

interface DynamicIslandProviderProps {
  children: React.ReactNode
  initialSize?: SizePresets
  initialAnimation?: Array<{ size: SizePresets; delay: number }>
}

const DynamicIslandProvider: React.FC<DynamicIslandProviderProps> = ({
  children,
  initialSize = SIZE_PRESETS.DEFAULT,
  initialAnimation = [],
}) => {
  const initialState: BlobStateType = {
    size: initialSize,
    previousSize: SIZE_PRESETS.EMPTY,
    animationQueue: initialAnimation,
    isAnimating: initialAnimation.length > 0,
  }

  const [state, dispatch] = useReducer(blobReducer, initialState)

  useEffect(() => {
    const processQueue = async () => {
      for (const step of state.animationQueue) {
        await new Promise((resolve) => setTimeout(resolve, step.delay))
        dispatch({ type: "SET_SIZE", newSize: step.size })
      }
      dispatch({ type: "ANIMATION_END" })
    }

    if (state.animationQueue.length > 0) {
      processQueue()
    }
  }, [state.animationQueue])

  const setSize = useCallback(
    (newSize: SizePresets) => {
      if (state.previousSize !== newSize && newSize !== state.size) {
        dispatch({ type: "SET_SIZE", newSize })
      }
    },
    [state.previousSize, state.size, dispatch]
  )

  const scheduleAnimation = useCallback(
    (animationSteps: Array<{ size: SizePresets; delay: number }>) => {
      dispatch({ type: "SCHEDULE_ANIMATION", animationSteps })
    },
    [dispatch]
  )

  const contextValue = {
    state,
    dispatch,
    setSize,
    scheduleAnimation,
    presets: DynamicIslandSizePresets,
  }

  return (
    <BlobContext.Provider value={contextValue}>{children}</BlobContext.Provider>
  )
}

const useDynamicIslandSize = () => {
  const context = useContext(BlobContext)
  if (!context) {
    throw new Error(
      "useDynamicIslandSize must be used within a DynamicIslandProvider"
    )
  }
  return context
}

const useScheduledAnimations = (
  animations: Array<{ size: SizePresets; delay: number }>
) => {
  const { scheduleAnimation } = useDynamicIslandSize()
  const animationsRef = useRef(animations)

  useEffect(() => {
    scheduleAnimation(animationsRef.current)
  }, [scheduleAnimation])
}

const DynamicIslandContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-10 flex h-full w-full items-end justify-center bg-transparent">
      {children}
    </div>
  )
}

const DynamicIsland = ({
  children,
  id,
  ...props
}: {
  children: ReactNode
  id: string
}) => {
  const [screenSize, setScreenSize] = useState("desktop")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize("mobile")
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet")
      } else {
        setScreenSize("desktop")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <DynamicIslandContainer>
      <DynamicIslandContent
        id={id}
        screenSize={screenSize}
        {...props}
      >
        {children}
      </DynamicIslandContent>
    </DynamicIslandContainer>
  )
}

const calculateDimensions = (
  size: SizePresets,
  screenSize: string,
  currentSize: Preset
) => {
  if (screenSize === "mobile") {
    const isUltra = size === SIZE_PRESETS.ULTRA
    const isMassive = size === SIZE_PRESETS.MASSIVE

    const scaleFactorUltra = min(1, MAX_HEIGHT_MOBILE_ULTRA / currentSize.width)
    const scaleFactorMassive = min(
      1,
      MAX_HEIGHT_MOBILE_MASSIVE / currentSize.width
    )

    const scaleFactor =
      isUltra || isMassive ? scaleFactorMassive : scaleFactorUltra

    return {
      width: currentSize.width * scaleFactor,
      height: currentSize.height
        ? currentSize.height * scaleFactor
        : currentSize.width * scaleFactor * currentSize.aspectRatio,
    }
  }

  return {
    width: currentSize.width,
    height: currentSize.height
      ? currentSize.height
      : currentSize.width * currentSize.aspectRatio,
  }
}

const DynamicIslandContent = ({
  children,
  id,
  screenSize,
  ...props
}: {
  children: React.ReactNode
  id: string
  screenSize: string
  [key: string]: any
}) => {
  const { state, presets } = useDynamicIslandSize()
  const currentSize = presets[state.size]
  const dimensions = calculateDimensions(state.size, screenSize, currentSize)

  return (
    <div
      id={id}
      className="mx-auto border border-black/10 bg-black text-black transition-all duration-300 ease-in-out dark:border-white/5 dark:bg-black"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        borderRadius: currentSize.borderRadius,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

const DynamicContainer = ({ className, children }: DynamicContainerProps) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  )
}

const DynamicDiv = ({ className, children }: DynamicChildrenProps) => {
  const { state } = useDynamicIslandSize()
  const { size, previousSize } = state
  const transitionClasses = size !== previousSize
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-90'

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${transitionClasses} ${className}`}
    >
      {children}
    </div>
  )
}

const DynamicTitle = ({ className, children }: MotionProps) => {
  const { state } = useDynamicIslandSize()
  const { size, previousSize } = state
  const transitionClasses = size !== previousSize
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-90'

  return (
    <h3
      className={`transition-all duration-300 ease-in-out ${transitionClasses} ${className}`}
    >
      {children}
    </h3>
  )
}

const DynamicDescription = ({ className, children }: MotionProps) => {
  const { state } = useDynamicIslandSize()
  const { size, previousSize } = state
  const transitionClasses = size !== previousSize
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-90'

  return (
    <p
      className={`transition-all duration-300 ease-in-out ${transitionClasses} ${className}`}
    >
      {children}
    </p>
  )
}

export {
  DynamicContainer,
  DynamicDescription,
  DynamicDiv,
  DynamicIsland,
  DynamicIslandProvider,
  DynamicTitle,
  useDynamicIslandSize,
  useScheduledAnimations,
}
