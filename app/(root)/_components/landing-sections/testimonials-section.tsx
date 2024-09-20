import { cn } from '@/lib/utils'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'

const reviews = [
   {
      name: 'Rafaela (Gerente de Projetos)',
      username: '@rafaela_souza',
      body: 'A dashboard me ajuda a antecipar demandas e ajustar os recursos com precisão. Fundamental para evitar gargalos.',
      img: 'https://github.com/Rafaela.png',
   },
   {
      name: 'Ana (Gerente de Dados)',
      username: '@ana_paula',
      body: 'Com as previsões claras e precisas, posso tomar decisões mais rápidas e garantir a eficiência da equipe.',
      img: 'https://github.com/Ana.png',
   },
   {
      name: 'João (Diretor de Operações)',
      username: '@joao_silva',
      body: 'A previsão de demandas me permite alocar minha equipe estrategicamente. Decisões muito mais confiantes.',
      img: 'https://github.com/Joao.png',
   },
   {
      name: 'Maria (Gerente de RH)',
      username: '@maria_oliveira',
      body: 'A interface fácil de usar e as previsões de equipe me ajudam a otimizar a alocação de pessoal com agilidade.',
      img: 'https://github.com/Maria.png',
   },
   {
      name: 'Juliana (Gerente de TI)',
      username: '@juliana_santos',
      body: 'As análises preditivas são essenciais para ajustar rapidamente os recursos e evitar sobrecarga.',
      img: 'https://github.com/Juliana.png',
   },
   {
      name: 'Ricardo (Diretor Financeiro)',
      username: '@ricardo_martins',
      body: 'A previsão de demandas facilita o planejamento financeiro e garante que os recursos estejam bem alocados.',
      img: 'https://github.com/Ricardo.png',
   },
   {
      name: 'Carolina (Gerente de Operações)',
      username: '@carolina_ferreira',
      body: 'Essa dashboard facilita a alocação e monitoramento da equipe. As decisões são mais rápidas e assertivas.',
      img: 'https://github.com/Carolina.png',
   },
   {
      name: 'Pedro (Gerente de Produção)',
      username: '@pedro_almeida',
      body: 'A clareza nas previsões permite otimizar a produção e antecipar demandas. Ferramenta essencial.',
      img: 'https://github.com/Pedro.png',
   },
   {
      name: 'Fernanda (Gerente de Planejamento)',
      username: '@fernanda_lima',
      body: 'As previsões precisas me ajudam a planejar melhor os recursos e minimizar problemas futuros.',
      img: 'https://github.com/Fernanda.png',
   },
   {
      name: 'Luiz (Diretor de Operações)',
      username: '@luiz_costa',
      body: 'A dashboard é essencial para ajustar a equipe em tempo real com base nas previsões e nos insights.',
      img: 'https://github.com/Luiz.png',
   },
   {
      name: 'Mariana (Head de Estratégia)',
      username: '@mariana_ribeiro',
      body: 'As previsões de demanda são fundamentais para decisões estratégicas rápidas e precisas.',
      img: 'https://github.com/Mariana.png',
   },
 ]
 
 

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
   img,
   name,
   username,
   body,
}: {
   img: string
   name: string
   username: string
   body: string
}) {
   return (
      <figure
         className={cn(
            'relative w-64 cursor-pointer overflow-hidden p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none',
         )}
      >
         <div className="flex flex-row items-center gap-2">
            <Image className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
               <figcaption className="text-sm font-medium dark:text-white">
                  {name}
               </figcaption>
               <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
         </div>
         <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
   )
}

export function Testimonials() {
   return (
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden py-20 ">
         <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
   )
}

