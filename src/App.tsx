import './App.css'
import MainHero from './components/main-hero'
import Navigation from './components/navigation/navigation'
import SectionColums from './components/section-colums'
import SectionImage from './components/section-image'
import Tag from './components/tag'
import Tecnologies from './components/tecnologies'

function App() {
  return (
    <main className=' w-screen '>
      <Navigation />

      <MainHero />

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

      <SectionImage title='Cultura' description='aqui la descri' className='' />

    </main>
  )
}

export default App
