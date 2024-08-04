
import MainHero from '@/components/main-hero'
import SectionColums from '@/components/section-colums'
import SectionImage from '@/components/section-image'
import Metrics from '@/components/metrics'
import Testimonials from '@/components/testimonials'
import { Reviews } from '@/components/reviews'
import { useLanguageContext } from './components/translation/languageContext'
import Navigation from './components/navigation/navigation'
import Footer from './components/footer'

function Home() {
  const { t } = useLanguageContext();

  return (
    <main className=' w-screen overflow-hidden'>
      <Navigation />
      <MainHero 
        title={t('home.hero.title')} 
        subtitle={t('home.hero.subtitle')} 
        description={t('home.hero.description')}
      />
      <Reviews />
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
      <Testimonials title={t('home.testimonials.title')}
      description={t('home.testimonials.description')}
      tagContent={t('home.testimonials.tag')}
      />

      <Footer />
    </main>
  )
}

export default Home