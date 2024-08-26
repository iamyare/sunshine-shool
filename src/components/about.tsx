import Tag from './tag'
import SectionAnimation from './section-animation'

export default function About() {
  return (
    <SectionAnimation id='about'>
      <aside className=' flex flex-col space-y-5 items-center px-4 w-full md:px-0  md:max-w-3xl mx-auto'>
        <Tag content='Create teams in Organisation' className=' bg-muted' />
        <div className='flex flex-col items-center space-y-2 '>
          <h2 className=' text-4xl font-medium'>Sobre Nosotros</h2>
          <p className='text-center text-muted-foreground text-pretty'>
            En Sunshine School, nos enfocamos en brindar experiencias educativas
            enriquecedoras que permiten a nuestros estudiantes alcanzar su
            máximo potencial. Fomentamos un ambiente de aprendizaje estimulante
            y acogedor, donde la innovación y la creatividad son fundamentales.
          </p>
        </div>
      </aside>
    </SectionAnimation>
  )
}
