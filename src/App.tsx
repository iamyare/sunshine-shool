import './App.css'
import MainVisual from './components/main-visual'
import Navigation from './components/navigation/navigation'
import SectionColums from './components/section-colums'
import Tag from './components/tag'
import Tecnologies from './components/tecnologies'
import { Button } from './components/ui/button'

function App() {
  return (
    <main className=' w-screen '>
      <Navigation />
      <section className=' relative overflow-hidden'>
        <aside className='flex flex-col items-center pt-44 space-y-10 px-4 w-full md:px-0  md:max-w-2xl  mx-auto'>
          <Tag tag='New' content='Create teams in Organisation' className='' />

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              repudiandae libero, dolorem, quis harum voluptatibus beatae
              consequatur minima neque non quam rem voluptatum? Distinctio,
              magni? Sapiente nihil voluptas quod repudiandae?
            </p>
          </div>

          <div className='flex space-x-4'>
            <Button variant={'outline'}>Inscribete</Button>

            <Button>Conocenos</Button>
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
        <aside className=' flex flex-col space-y-5 items-center px-4 w-full md:px-0  md:max-w-2xl mx-auto'>
          <Tag content='Create teams in Organisation' className=' bg-muted' />
          <div className='flex flex-col items-center space-y-2 '>
            <h2 className=' text-4xl font-medium'>Sobre Nosotros</h2>
            <p className='text-center text-muted-foreground'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              alias rerum exercitationem? Quidem, optio alias quas eveniet sunt
              dicta fugit placeat impedit molestiae enim minus quibusdam et
              cupiditate odit magnam.
            </p>
          </div>
        </aside>
      </section>

      <SectionColums
        img='https://th.bing.com/th/id/R.9c0d292730c1b6b14bf0d2c8fe720eb6?rik=cPJPFxRAZUOCeA&pid=ImgRaw&r=0'
        title='Nuestra Historia'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
      />

      <SectionColums
        img='https://th.bing.com/th/id/R.9c0d292730c1b6b14bf0d2c8fe720eb6?rik=cPJPFxRAZUOCeA&pid=ImgRaw&r=0'
        title='Nuestra Historia'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        direction='right'
      />
    </main>
  )
}

export default App
