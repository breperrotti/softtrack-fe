import { cn } from '@/lib/utils'
import { Marquee } from '../ui/marquee'

const reviews = [
  {
     name: 'Rafaela',
     username: '@rafaela_souza',
     body: 'Nunca vi uma dashboard como essa. É simplesmente fantástica! Recomendo a todos.',
     img: 'https://github.com/Rafaela.png',
  },
  {
     name: 'Ana',
     username: '@ana_paula',
     body: 'Essa dashboard mudou a forma como acompanho meus dados. É intuitiva e muito eficaz.',
     img: 'https://github.com/Ana.png',
  },
  {
     name: 'João',
     username: '@joao_silva',
     body: 'Impressionante o nível de detalhamento. Me ajudou a tomar decisões com muito mais confiança.',
     img: 'https://github.com/Joao.png',
  },
  {
     name: 'Maria',
     username: '@maria_oliveira',
     body: 'A interface é tão amigável que até quem não entende de tecnologia consegue usar facilmente.',
     img: 'https://github.com/Maria.png',
  },
  {
     name: 'Juliana',
     username: '@juliana_santos',
     body: 'Essa dashboard realmente superou minhas expectativas. Funcional e muito bem desenhada.',
     img: 'https://github.com/Juliana.png',
  },
  {
     name: 'Ricardo',
     username: '@ricardo_martins',
     body: 'O design é impecável e os recursos são exatamente o que eu precisava. Perfeita!',
     img: 'https://github.com/Ricardo.png',
  },
  {
     name: 'Carolina',
     username: '@carolina_ferreira',
     body: 'Nunca foi tão fácil acompanhar o desempenho da minha equipe. Essa dashboard é indispensável.',
     img: 'https://github.com/Carolina.png',
  },
  {
     name: 'Pedro',
     username: '@pedro_almeida',
     body: 'A clareza das informações apresentadas faz toda a diferença no meu trabalho. Excelente ferramenta!',
     img: 'https://github.com/Pedro.png',
  },
  {
     name: 'Fernanda',
     username: '@fernanda_lima',
     body: 'A praticidade dessa dashboard me economiza horas de trabalho. Incrível!',
     img: 'https://github.com/Fernanda.png',
  },
  {
     name: 'Luiz',
     username: '@luiz_costa',
     body: 'Finalmente uma dashboard que atende todas as minhas necessidades. Estou muito satisfeito.',
     img: 'https://github.com/Luiz.png',
  },
  {
     name: 'Mariana',
     username: '@mariana_ribeiro',
     body: 'A integração com outras ferramentas é o que mais me impressionou. Muito bem pensada.',
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
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
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

