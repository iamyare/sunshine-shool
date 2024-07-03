import './App.css'
import MainVisual from './components/main-visual'
import Navigation from './components/navigation/navigation'
import SectionColums from './components/section-colums'
import SectionImage from './components/section-image'
import Tag from './components/tag'
import Tecnologies from './components/tecnologies'
import { Button } from './components/ui/button'

function App() {
  return (
    <main className=' w-screen '>
      <Navigation />
      <section className=' relative overflow-hidden'>
        <aside className='flex flex-col items-center pt-32 space-y-10 px-4 w-full md:px-0  md:max-w-2xl  mx-auto'>
          <Tag tag='New' content='Educación Innovadora' className='' />

          <div className='flex flex-col space-y-5  items-center'>
            <h1 className=' flex flex-col text-center'>
              <span className='text-4xl font-bold text-primary'>
                Welcome to
              </span>
              <span className='text-6xl font-bold text-secondary'>
                Sunshine School
              </span>
            </h1>
            <p className=' text-muted-foreground text-lg text-center'>
            Descubre una educación de alta calidad que combina estándares académicos rigurosos con métodos innovadores para desarrollar la creatividad y el pensamiento crítico.
            </p>
          </div>

          <div className='flex space-x-4'>
            <Button variant={'outline'}>Conoce Más</Button>

            <Button>Inscríbete Ahora</Button>
          </div>

          <MainVisual />
        </aside>

        <div className='absolute -top-0 -translate-y-1/2 -left-0 -translate-x-1/2 lg:w-[40vw] md:w-[500px] w-[600px] blur-[200px]  aspect-video bg-secondary -z-10'></div>
        <div className='absolute -top-0 -translate-y-1/2 left-20 -translate-x-1/2 lg:w-[60vw] md:w-[500px] hidden md:block blur-[200px]  aspect-video bg-secondary/50 -z-10'></div>

        <div className='absolute -top-0 -translate-y-1/2 right-0 translate-x-1/2 lg:w-[40vw] md:w-[500px] w-[600px] blur-[200px]  aspect-video bg-primary/90 -z-10'></div>
        <div className='absolute -top-0 -translate-y-1/2 right-20 translate-x-1/2 lg:w-[60vw] md:w-[500px] w-[600px] hidden md:block blur-[200px]  aspect-video bg-primary/50 -z-10'></div>

        <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2  ml-[10%] blur-[200px]  lg:w-[30vw] md:w-[500px] hidden md:block w-[600px]  aspect-video bg-primary/50 -z-10'></div>
        <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 -ml-[10%] blur-[200px]  lg:w-[30vw] md:w-[500px] hidden md:block w-[600px]  aspect-video bg-secondary/50 -z-10'></div>
      </section>

      <Tecnologies />

      <section className=' py-10 flex flex-col space-y-5 items-center '>
        <aside className=' flex flex-col space-y-5 items-center px-4 w-full md:px-0  md:max-w-3xl mx-auto'>
          <Tag content='Create teams in Organisation' className=' bg-muted' />
          <div className='flex flex-col items-center space-y-2 '>
            <h2 className=' text-4xl font-medium'>Sobre Nosotros</h2>
            <p className='text-center text-muted-foreground text-pretty'>
            En Sunshine School, nos enfocamos en brindar experiencias educativas enriquecedoras que permiten a nuestros estudiantes alcanzar su máximo potencial. Fomentamos un ambiente de aprendizaje estimulante y acogedor, donde la innovación y la creatividad son fundamentales.
            </p>
          </div>
        </aside>
      </section>

      <SectionColums
        img='https://th.bing.com/th/id/R.9c0d292730c1b6b14bf0d2c8fe720eb6?rik=cPJPFxRAZUOCeA&pid=ImgRaw&r=0'
        title='Nuestra Misión'
        content='Nuestra misión es proporcionar una educación integral que desarrolle las habilidades académicas y creativas de nuestros estudiantes, preparándolos para ser individuos curiosos, comprometidos y con una mentalidad abierta hacia el aprendizaje continuo.'
      />

      <SectionColums
        img='https://th.bing.com/th/id/R.9c0d292730c1b6b14bf0d2c8fe720eb6?rik=cPJPFxRAZUOCeA&pid=ImgRaw&r=0'
        title='Nuestra Visión'
        content='Vislumbramos ser una institución líder en educación innovadora, reconocida por nuestro compromiso con la excelencia académica y el desarrollo personal de cada estudiante. Queremos ser un lugar donde se cultiven la creatividad, la pasión y el amor por el aprendizaje.'
        direction='right'
      />

      <SectionImage className='' />

      <section className=' h-screen w-screen'></section>
    </main>
  )
}

export default App
