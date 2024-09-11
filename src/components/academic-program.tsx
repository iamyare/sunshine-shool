import SectionAnimation from './section-animation'
import ninos from '../assets/ejemplo_ninos.webp'
import hola from '../assets/hola.png'
import Title from './ui/titles'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const DATA_ACADEMIC_PROGRAM = [
    {
      title: 'Preescolar',
      description:
        'Nuestro programa de preescolar está diseñado para fomentar el aprendizaje holístico a través de la investigación y la exploración. En Sunshine School, los niños son nuestra prioridad, y cada situación es una oportunidad para aprender. Los educadores se esfuerzan por establecer relaciones cercanas con los alumnos para facilitar el aprendizaje, y colaboran estrechamente con los padres de familia para asegurar el desarrollo integral de cada niño.',
      img: ninos,
      bg: 'bg-yellow-100',
      fill: 'fill-yellow-500',
      path: 'M0 370L14.5 375C29 380 58 390 87.2 377.5C116.3 365 145.7 330 174.8 315.8C204 301.7 233 308.3 262 318.8C291 329.3 320 343.7 349 347.2C378 350.7 407 343.3 436.2 333.2C465.3 323 494.7 310 523.8 309.3C553 308.7 582 320.3 611 334.8C640 349.3 669 366.7 698 360.7C727 354.7 756 325.3 785.2 313.3C814.3 301.3 843.7 306.7 872.8 327.8C902 349 931 386 945.5 404.5L960 423L960 541L945.5 541C931 541 902 541 872.8 541C843.7 541 814.3 541 785.2 541C756 541 727 541 698 541C669 541 640 541 611 541C582 541 553 541 523.8 541C494.7 541 465.3 541 436.2 541C407 541 378 541 349 541C320 541 291 541 262 541C233 541 204 541 174.8 541C145.7 541 116.3 541 87.2 541C58 541 29 541 14.5 541L0 541Z'
    },
    {
      title: 'Educación Básica',
      description:
        'En la educación primaria, Sunshine School ofrece altos estándares educativos en un entorno que fomenta la creatividad y el pensamiento crítico. Los grupos pequeños permiten una atención e instrucción individualizada, creando un entorno de aprendizaje que promueve la participación activa y la colaboración entre los estudiantes. La comunidad de padres comprometidos juega un papel crucial en la educación de los alumnos, con múltiples oportunidades para involucrarse en el proceso educativo. Nuestro objetivo es cultivar en los estudiantes un amor por el aprendizaje y un sentido de responsabilidad hacia su comunidad y el mundo.',
      img: hola,
      bg: 'bg-blue-100',
      fill: 'fill-blue-500',
      path: 'M0 293L14.5 298.8C29 304.7 58 316.3 87.2 322.5C116.3 328.7 145.7 329.3 174.8 323.5C204 317.7 233 305.3 262 296.7C291 288 320 283 349 299.7C378 316.3 407 354.7 436.2 372.3C465.3 390 494.7 387 523.8 382.7C553 378.3 582 372.7 611 379C640 385.3 669 403.7 698 409.8C727 416 756 410 785.2 405.3C814.3 400.7 843.7 397.3 872.8 389.2C902 381 931 368 945.5 361.5L960 355L960 541L945.5 541C931 541 902 541 872.8 541C843.7 541 814.3 541 785.2 541C756 541 727 541 698 541C669 541 640 541 611 541C582 541 553 541 523.8 541C494.7 541 465.3 541 436.2 541C407 541 378 541 349 541C320 541 291 541 262 541C233 541 204 541 174.8 541C145.7 541 116.3 541 87.2 541C58 541 29 541 14.5 541L0 541Z'
    },
    {
      title: 'Secundaria',
      description:
        'La educación secundaria en Sunshine School abarca los años de 5to a 8vo grado, una etapa crucial de cambios físicos, intelectuales y emocionales. Reconociendo la energía y el entusiasmo de los preadolescentes, Sunshine School ofrece un programa que los reta y empodera, preparándolos para la vida en la secundaria y más allá. Nuestros alumnos de secundaria adquieren habilidades invaluables a través de experiencias prácticas y colaborativas, que les preparan para enfrentar los desafíos académicos y profesionales del futuro. En esta etapa, también se refuerza la preparación para la vida universitaria y el mundo laboral, con un enfoque en el desarrollo de destrezas esenciales como la toma de decisiones, el liderazgo y la resiliencia.',
      img: ninos,
      bg: 'bg-green-100',
      fill: 'fill-green-500',
      path: 'M0 287L14.5 293.3C29 299.7 58 312.3 87.2 312.3C116.3 312.3 145.7 299.7 174.8 315C204 330.3 233 373.7 262 382C291 390.3 320 363.7 349 362.5C378 361.3 407 385.7 436.2 394.5C465.3 403.3 494.7 396.7 523.8 391C553 385.3 582 380.7 611 362.7C640 344.7 669 313.3 698 308.5C727 303.7 756 325.3 785.2 336.2C814.3 347 843.7 347 872.8 337.2C902 327.3 931 307.7 945.5 297.8L960 288L960 541L945.5 541C931 541 902 541 872.8 541C843.7 541 814.3 541 785.2 541C756 541 727 541 698 541C669 541 640 541 611 541C582 541 553 541 523.8 541C494.7 541 465.3 541 436.2 541C407 541 378 541 349 541C320 541 291 541 262 541C233 541 204 541 174.8 541C145.7 541 116.3 541 87.2 541C58 541 29 541 14.5 541L0 541Z'
    }
  ]

export default function AcademicProgram() {
  const [active, setActive] = useState(DATA_ACADEMIC_PROGRAM[0])

  const handleNext = () => {
    const index = DATA_ACADEMIC_PROGRAM.indexOf(active)
    setActive(DATA_ACADEMIC_PROGRAM[index + 1] || DATA_ACADEMIC_PROGRAM[0])
  }

  const handlePrev = () => {
    const index = DATA_ACADEMIC_PROGRAM.indexOf(active)
    setActive(
      DATA_ACADEMIC_PROGRAM[index - 1] ||
        DATA_ACADEMIC_PROGRAM[DATA_ACADEMIC_PROGRAM.length - 1]
    )
  }

  return (
    <SectionAnimation
      id='it-is-a-hawk-things'
      className={cn('h-screen relative overflow-hidden', active.bg)}
    >
      <motion.div
        key={active.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Title
          title={active.title}
          description={active.description}
          tagContent={'Programa Académico'}
          ClassNameProps={{
            classNameContainerText: 'max-w-4xl container',
            classNameTitle: 'text-4xl'
          }}
        />
      </motion.div>

      <Button
        size={'icon'}
        onClick={handlePrev}
        className='bg-muted/80 group absolute bottom-0 md:top-1/2 -translate-y-1/2 left-0 translate-x-1/2 rounded-3xl p-4 md:p-6 size-fit shadow-xl z-10 active:scale-95'
      >
        <ChevronLeft className='md:size-6 size-4 text-primary group-hover:text-secondary' />
      </Button>

      <Button
        size={'icon'}
        onClick={handleNext}
        className='bg-muted/80 group absolute bottom-0 md:top-1/2 -translate-y-1/2 right-0 -translate-x-1/2 rounded-3xl p-4 md:p-6 size-fit shadow-xl z-10 active:scale-95'
      >
        <ChevronRight className='md:size-6 size-4 text-primary group-hover:text-secondary' />
      </Button>

      <svg

        viewBox="0 0 960 541"
        className={cn('absolute bottom-0 left-0', active.fill)}
        preserveAspectRatio="none"
      >
        <motion.path
          d={active.path}
          fill={active.fill}
          initial={false}
          animate={{ d: active.path }}
                    stroke-linecap='round'
          stroke-linejoin='miter'
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
      </svg>

      <AnimatePresence mode="wait">
        <motion.img
          key={active.img}
          src={active.img}
          alt={`Fotografía de ${active.title}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='absolute h-[70%] object-bottom object-contain bottom-0 '
        />
      </AnimatePresence>
    </SectionAnimation>
  )
}