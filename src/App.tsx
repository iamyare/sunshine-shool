import './App.css'

import FAQ from '@/components/faq'

import MainHero from '@/components/main-hero'
import SectionColums from '@/components/section-colums'
import SectionImage from '@/components/section-image'

import { useLanguageContext } from './components/translation/languageContext'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer'
import Magazine from './components/magazine'
import Enrollments from './components/enrollments'
import Testimonials from './components/testimonials'
import Metrics from './components/metrics'
import { Reviews } from './components/reviews'
import About from './components/about'
import STEAM from './components/steam'
import AcademicProgram from './components/academic-program'

function Home() {
  const { t } = useLanguageContext()

  return (
    <main className=' w-screen overflow-hidden'>
      <Navigation />
      <MainHero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        description={t('home.hero.description')}
      />
      <Reviews />
      <About />
      <SectionColums
        img='https://fuxlxocsolxkylxphywx.supabase.co/storage/v1/object/public/temp/sunshine/unas.jpeg'
        title={t('home.mission.title')}
        content={t('home.mission.content')}
        direction='left'
        tag={t('home.mission.tag')}
      />
      <SectionColums
        img='https://fuxlxocsolxkylxphywx.supabase.co/storage/v1/object/public/temp/sunshine/dos.jpeg'
        title={t('home.vision.title')}
        content={t('home.vision.content')}
        direction='right'
        tag={t('home.vision.tag')}
      />

<AcademicProgram />

      <STEAM />

    

      <SectionImage
        title={t('home.about.title')}
        description={t('home.about.description')}
        className=''
      />
      <Metrics
        title={t('home.metrics.title')}
        description={t('home.metrics.description')}
        tagContent={t('home.metrics.tag')}
      />
      <Testimonials
        title={t('home.testimonials.title')}
        description={t('home.testimonials.description')}
        tagContent={t('home.testimonials.tag')}
      />


      <Magazine />


      <FAQ />

      <Enrollments />

      {/* <Blog /> */}

      <Footer />
    </main>
  )
}

export default Home
