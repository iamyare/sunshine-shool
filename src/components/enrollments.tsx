import SectionAnimation from './section-animation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { useState } from 'react'

const ENROLLMENT_ITEMS = [
  {
    title: 'Course 1',
    description: 'Course 1 description',
    image:
      'https://th.bing.com/th/id/OLC.14xckbqMhO1R0A480x360?&rs=1&pid=ImgDetMain',
    prerequisites: ['prerequisite 1', 'prerequisite 2', 'prerequisite 3']
  },
  {
    title: 'Course 2',
    description: 'Course 2 description',
    image:
      'https://th.bing.com/th/id/OLC.14xckbqMhO1R0A480x360?&rs=1&pid=ImgDetMain',
    prerequisites: ['prerequisite 1', 'prerequisite 2', 'prerequisite 3', 'prerequisite 1', 'prerequisite 2', 'prerequisite 3', 'prerequisite 1', 'prerequisite 2', 'prerequisite 3', 'prerequisite 1', 'prerequisite 2', 'prerequisite 3', 'prerequisite 1', 'prerequisite 2', 'prerequisite 3']
  }
]

export default function Enrollments() {
  const [enrollmentSelected, setEnrollmentSelected] = useState(
    ENROLLMENT_ITEMS[0]
  )

  return (
    <SectionAnimation>
      <aside className=' flex flex-col space-y-5 items-center px-4 w-full md:px-0  md:max-w-3xl mx-auto'>
        <h2 className='text-4xl font-medium text-secondary'>Enrollments</h2>
        <p className='text-muted'>Enrollments description</p>
        <div className='flex h-full  w-full gap-2 items-center'>
          <div className='h-full w-full relative rounded-2xl overflow-hidden  '>
            <AnimatePresence mode='wait'>
              <motion.div
                key={enrollmentSelected.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='flex flex-col justify-end gap-2 h-[300px]  '
              >
                <img
                  src={enrollmentSelected.image}
                  alt={enrollmentSelected.title}
                  className=' absolute object-cover w-full h-full'
                />
                <div className=' absolute bg-gradient-to-b from-primary/20 to-primary/70 inset-0'></div>
                <div className='flex flex-col z-10 px-8 p-4 overflow-y-auto '>
                <h3 className='text-2xl font-medium text-secondary'>
                  {enrollmentSelected.title}
                </h3>
                <p className='text-muted'>{enrollmentSelected.description}</p>
                <ul className='list-disc text-muted'>
                  {enrollmentSelected.prerequisites.map(
                    (prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
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
                <Button
                  variant={
                    enrollmentSelected.title === enrollment.title
                      ? 'default'
                      : 'outline'
                  }
                  onClick={() => setEnrollmentSelected(enrollment)}
                >
                  {enrollment.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </SectionAnimation>
  )
}
