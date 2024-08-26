import SectionAnimation from './section-animation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { useState } from 'react'
import { CoolMode } from './ui/cool-mode'

const ENROLLMENT_ITEMS = [
  {
    title: 'Requisitos para primer ingreso',
    description: '',
    image: 'https://th.bing.com/th/id/OLC.14xckbqMhO1R0A480x360?&rs=1&pid=ImgDetMain',
    prerequisites: [
      'Copia y original del carnet de vacunas.',
      'Partida de nacimiento original.'
    ]
  },
  {
    title: 'Requisitos para traslado o ingreso (aplica para alumnos de Prek en adelante)',
    description: '',
    image: 'https://th.bing.com/th/id/OLC.14xckbqMhO1R0A480x360?&rs=1&pid=ImgDetMain',
    prerequisites: [
      'Traer Certificación de Estudios de la escuela anterior.',
      'Traer Certificación de Conducta de la escuela anterior.',
      'Traer Constancia de Solvencia de la escuela anterior.',
      'Hacer prueba diagnóstico en la escuela.'
    ]
  }
]

function getParticleOption(title: string): string | undefined {
  switch (title) {
    case 'Requisitos para traslado o ingreso (aplica para alumnos de Prek en adelante)':
      return 'https://th.bing.com/th/id/OIP.FNx8zNSGAWV306j1BsocDAHaHk?rs=1&pid=ImgDetMain'
    default:
      return undefined
  }
}

export default function Enrollments() {
  const [enrollmentSelected, setEnrollmentSelected] = useState(
    ENROLLMENT_ITEMS[0]
  )

  return (
    <SectionAnimation>
      <aside className='flex container flex-col space-y-5 items-center w-full'>
        <h2 className='text-4xl font-medium text-secondary'>Requerimientos de Admisión</h2>
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
                  alt={enrollmentSelected.title}
                  className='absolute object-cover w-full h-full'
                />
                <div className='absolute bg-gradient-to-b from-primary/20 to-primary/70 inset-0'></div>
                <div className='flex flex-col z-10 px-8 p-4 overflow-y-auto'>
                  <h3 className='text-2xl font-medium text-secondary'>
                    {enrollmentSelected.title}
                  </h3>
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
                    {enrollment.title}
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