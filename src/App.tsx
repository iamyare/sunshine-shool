import './App.css'
import About from '@/components/about'
import Blog from '@/components/blog'
import FAQ from '@/components/faq'

import MainHero from '@/components/main-hero'
import Metrics from '@/components/metrics'
import Navigation from '@/components/navigation/navigation'
import SectionColums from '@/components/section-colums'
import SectionImage from '@/components/section-image'
import Tecnologies from '@/components/tecnologies'
import Testimonials from '@/components/testimonials'

function App() {
  return (
    <main className=' w-screen '>
      <Navigation />

      <MainHero />

      <Tecnologies />

      <About />

      <SectionColums
        img='https://fuxlxocsolxkylxphywx.supabase.co/storage/v1/object/public/temp/sunshine/unas.jpeg'
        title='Nuestra Misión'
        content='Nuestra misión es proporcionar una educación integral que desarrolle las habilidades académicas y creativas de nuestros estudiantes, preparándolos para ser individuos curiosos, comprometidos y con una mentalidad abierta hacia el aprendizaje continuo.'
        direction='left'
        tag='Misión'
      />

      <SectionColums
        img='https://fuxlxocsolxkylxphywx.supabase.co/storage/v1/object/public/temp/sunshine/dos.jpeg'
        title='Nuestra Visión'
        content='Vislumbramos ser una institución líder en educación innovadora, reconocida por nuestro compromiso con la excelencia académica y el desarrollo personal de cada estudiante. Queremos ser un lugar donde se cultiven la creatividad, la pasión y el amor por el aprendizaje.'
        direction='right'
        tag='Visión'
      />

      <SectionImage title='Cultura' description='aqui la descri' className='' />

      <Metrics/>

      <Testimonials />

      <FAQ />

      <Blog />

    </main>
  )
}

export default App
