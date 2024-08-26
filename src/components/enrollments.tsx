import SectionAnimation from './section-animation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { useState } from 'react'
import { CoolMode } from './ui/cool-mode'
import Tag from './tag'
import { useLanguageContext } from './translation/languageContext'

const ENROLLMENT_ITEMS = [
  {
    title: 'enrollments.requirements.firstEntry',
    description: '',
    image: 'https://th.bing.com/th/id/OLC.14xckbqMhO1R0A480x360?&rs=1&pid=ImgDetMain',
    prerequisites: [
      'enrollments.prerequisites.vaccineCard',
      'enrollments.prerequisites.birthCertificate'
    ]
  },
  {
    title: 'enrollments.requirements.transferOrEntry',
    description: '',
    image: 'https://th.bing.com/th/id/OLC.14xckbqMhO1R0A480x360?&rs=1&pid=ImgDetMain',
    prerequisites: [
      'enrollments.prerequisites.previousSchoolCertification',
      'enrollments.prerequisites.previousSchoolConduct',
      'enrollments.prerequisites.previousSchoolSolvency',
      'enrollments.prerequisites.diagnosticTest'
    ]
  }
]

function getParticleOption(title: string): string | undefined {
  switch (title) {
    case 'enrollments.requirements.transferOrEntry':
      return 'https://clipground.com/images/apple-emoji-png-6.png'
    default:
      return undefined
  }
}

export default function Enrollments() {
  const [enrollmentSelected, setEnrollmentSelected] = useState(
    ENROLLMENT_ITEMS[0]
  )
  const { t } = useLanguageContext()

  return (
    <SectionAnimation id='enrollments'>
      <aside className='flex flex-col space-y-5 items-center w-full container'>
        <Tag content={t('enrollments.requirementsTag')} className='bg-muted' />
        <div className='flex flex-col-reverse md:flex-row h-full w-full gap-2 items-center'>
          <div className='h-full w-full relative rounded-2xl overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={enrollmentSelected.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='flex flex-col justify-end gap-2 h-[400px]'
              >
                <img
                  src={enrollmentSelected.image}
                  alt={t(enrollmentSelected.title)}
                  className='absolute object-cover w-full h-full'
                />
                <div className='absolute bg-gradient-to-b from-primary/20 to-primary/70 inset-0'></div>
                <div className='flex flex-col z-10 px-8 p-4 overflow-y-auto'>
                  <h3 className='text-2xl font-medium text-secondary'>
                    {t(enrollmentSelected.title)}
                  </h3>
                  <ul className='list-disc text-muted'>
                    {enrollmentSelected.prerequisites.map(
                      (prerequisite, index) => (
                        <li key={index}>{t(prerequisite)}</li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <ul className='flex flex-col gap-2'>
            {ENROLLMENT_ITEMS.map((enrollment, index) => (
              <li key={index}>
                <CoolMode options={{ particle: getParticleOption(enrollment.title) }}>
                  <Button
                    variant={
                      enrollmentSelected.title === enrollment.title
                        ? 'default'
                        : 'outline'
                    }
                    className='max-w-64 whitespace-normal h-fit'
                    onClick={() => setEnrollmentSelected(enrollment)}
                  >
                    {t(enrollment.title)}
                  </Button>
                </CoolMode>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </SectionAnimation>
  )
}