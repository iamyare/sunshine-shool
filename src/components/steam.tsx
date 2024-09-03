import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionAnimation from './section-animation'
import Tag from './tag'
import { Button } from './ui/button'
import imgHola from '../assets/hola.png'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEAM_DATA = [
  {
    title: 'Programa',
    span: 'STEAM',
    content:
      'En Sunshine School, nuestro programa STEAM (Ciencia, Tecnología, Ingeniería, Arte y Matemáticas) está diseñado para preparar a nuestros estudiantes para enfrentar los desafíos del siglo XXI. A través de este enfoque innovador, promovemos el desarrollo de habilidades críticas como el pensamiento analítico, la creatividad, la comunicación efectiva y la colaboración, capacitando a nuestros alumnos para sobresalir en una sociedad globalizada.'
  },
  {
    title: 'Trabajo Educativo Social',
    span: 'TES',
    content:
      'Nuestros estudiantes de último año se convierten en líderes educativos al impartir talleres de STEAM a niños en riesgo social. Esta iniciativa no solo refuerza su conocimiento, sino que también les permite contribuir activamente al bienestar de su comunidad, promoviendo la igualdad y la inclusión a través de la educación.'
  }
]

export default function STEAM() {
  const [active, setActive] = useState(STEAM_DATA[0])
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = () => {
    const index = STEAM_DATA.indexOf(active)
    setActive(STEAM_DATA[index + 1] || STEAM_DATA[0])
  }

  const handlePrev = () => {
    const index = STEAM_DATA.indexOf(active)
    setActive(STEAM_DATA[index - 1] || STEAM_DATA[STEAM_DATA.length - 1])
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [active, isPaused])

  return (
    <SectionAnimation
      id='enrollments'
      className=' px-20 lg:px-4 lg:max-w-6xl mx-auto'
    >
      <Tag content='STEAM' className='bg-muted' />

      <div className=' relative'>
        <aside
          className='flex w-full min-h-[60vh] rounded-[70px] bg-zinc-800 relative overflow-hidden '
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className='w-[30%]' />
          <div className=' flex flex-col w-full gap-2 p-10 md:p-20 lg:px-36 z-10 '>
            <h2 className=' text-muted-foreground text-xl font-medium'>
              STEAM
            </h2>
            <AnimatePresence mode='wait'>
              <motion.div
                key={active.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h3 className=' text-5xl font-semibold text-zinc-100'>
                  {active.title}{' '}
                  <span className=' underline decoration-wavy decoration-secondary'>
                    {active.span}
                  </span>
                </h3>
                <p className=' text-muted-foreground mt-2'>{active.content}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <svg
            fill='none'
            className=' stroke-zinc-900/30 absolute bottom-0 right-0 overflow-visible -rotate-12 '
          >
            <path
              d='M7.98242 91.2477C7.98242 91.2477 36.9551 47.1122 85.3277 38.8276C134.495 30.407 203.074 57.7429 197.538 107.227C194.56 133.846 180.291 151.754 153.456 151.626C126.711 151.498 109.472 133.39 104.163 107.227C92.7959 51.2116 164.724 8.13376 221.984 8.02809C279.36 7.92221 352.963 51.1325 341.409 107.227C336.004 133.462 319.341 152.406 292.517 151.626C266.224 150.86 248.025 133.04 243.224 107.227C232.982 52.1533 301.161 2.81477 357.038 8.02809C393.522 11.4321 418.197 28.6208 433.982 61.6273'
              stroke-width='25'
              stroke-linecap='round'
            />
          </svg>
        </aside>

        <img src={imgHola} alt='' className=' absolute top-0 -left-10 max-w-[30%] md:max-w-[40%] lg:max-w-full' />

        <Button
          size={'icon'}
          onClick={handlePrev}
          className=' bg-zinc-200 hover:bg-zinc-400 absolute bottom-10 left-0 rounded-3xl p-6 size-fit -translate-x-1/2 shadow-xl'
        >
          <ChevronLeft className='size-6 text-zinc-800' />
        </Button>
        <Button
          size={'icon'}
          onClick={handleNext}
          className=' bg-zinc-200 hover:bg-zinc-400 absolute bottom-10 right-0 rounded-3xl p-6 size-fit translate-x-1/2 shadow-xl'
        >
          <ChevronRight className='size-6 text-zinc-800' />
        </Button>
      </div>
    </SectionAnimation>
  )
}
