import Tag from './tag'
import SectionAnimation from './section-animation'
import { useLanguageContext } from './translation/languageContext'

export default function About() {
  const { t } = useLanguageContext()

  return (
    <SectionAnimation id='about'>
      <aside className=' flex flex-col space-y-5 items-center px-4 w-full md:px-0  md:max-w-3xl mx-auto'>
        <Tag content='Create teams in Organisation' className=' bg-muted' />
        <div className='flex flex-col items-center space-y-2 '>
          <h2 className=' text-4xl font-medium'>
            {t('home.about.title')}
          </h2>
          <p className='text-center text-muted-foreground text-pretty'>
            {t('home.about.description')}
          </p>
        </div>
      </aside>
    </SectionAnimation>
  )
}
