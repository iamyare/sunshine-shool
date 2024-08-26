import './App.css'
import About from '@/components/about'

import FAQ from '@/components/faq'

import MainHero from '@/components/main-hero'
import Metrics from '@/components/metrics'
import Navigation from '@/components/navigation/navigation'
import SectionColums from '@/components/section-colums'
import SectionImage from '@/components/section-image'
import Testimonials from '@/components/testimonials'
import Footer from './components/footer'
import { Reviews } from './components/reviews'
import Magazine from './components/magazine'
import Enrollments from './components/enrollments'

function App() {
  return (
    <main className=' w-screen overflow-hidden '>
      <Navigation />

      <MainHero />

      {/* <Tecnologies /> */}
      <Reviews/>

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

      <SectionImage 
        title='Es Cosa de Halcones' 
        description='La cultura Sunshine fomenta un ambiente colaborativo y familiar, promoviendo altos valores éticos y un aprendizaje significativo.' 
        className='' 
      />

      <Metrics/>

      <Testimonials />

      <Magazine />

      <FAQ />

      <Enrollments />

      {/* <Blog /> */}

      <Footer />



    </main>
  )
}

export default App
