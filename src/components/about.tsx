import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Tag from './tag'

export default function About() {
  return (
    <InView as='div' triggerOnce={true} threshold={0.5}>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=' py-10 flex flex-col space-y-5 items-center '
        >
          <aside className=' flex flex-col space-y-5 items-center px-4 w-full md:px-0  md:max-w-3xl mx-auto'>
            <Tag content='Create teams in Organisation' className=' bg-muted' />
            <div className='flex flex-col items-center space-y-2 '>
              <h2 className=' text-4xl font-medium'>Sobre Nosotros</h2>
              <p className='text-center text-muted-foreground text-pretty'>
                En Sunshine School, nos enfocamos en brindar experiencias
                educativas enriquecedoras que permiten a nuestros estudiantes
                alcanzar su máximo potencial. Fomentamos un ambiente de
                aprendizaje estimulante y acogedor, donde la innovación y la
                creatividad son fundamentales.
              </p>
            </div>
          </aside>
        </motion.section>
      )}
    </InView>
  )
}
