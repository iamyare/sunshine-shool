import DoodlesMain from './doodles-main'
import MainVisual from './main-visual'
import Tag from './tag'
import { Button } from './ui/button'

import { motion } from 'framer-motion'

export default function MainHero() {
  return (
    <section className=' relative overflow-hidden'>
      <div className='absolute -z-[1] radial-mask-invert'>
        <DoodlesMain className='relative opacity-10 ' />
      </div>

      <aside className='flex flex-col items-center pt-32 space-y-10 px-4 w-full md:px-0  md:max-w-2xl  mx-auto'>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Tag tag='New' content='Educación Innovadora' className='' />
        </motion.div>

        <div className='flex flex-col space-y-5  items-center  '>
          <div className='hover:scale-110 transition-transform duration-1000 ease-in-out '>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=' flex flex-col text-center'
            >
              <span className='text-4xl font-bold text-primary'>
                Welcome to
              </span>
              <span className='text-6xl font-bold text-secondary relative'>
                Sunshine School
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=' text-muted-foreground text-lg text-center'
          >
            Descubre una educación de alta calidad que combina estándares
            académicos rigurosos con métodos innovadores para desarrollar la
            creatividad y el pensamiento crítico.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='flex space-x-4'
        >
          <Button variant={'outline'}>Conoce Más</Button>

          <Button>Blog</Button>
        </motion.div>

        <MainVisual />
      </aside>

      <div className='absolute -top-0 -translate-y-1/2 -left-0 -translate-x-1/2 lg:w-[20vw] md:w-[500px] w-[300px] blur-[100px] md:blur-[200px]  aspect-video bg-secondary -z-10'></div>
      <div className='absolute -top-0 -translate-y-1/2 left-20 -translate-x-1/2 lg:w-[60vw] md:w-[500px] hidden md:block blur-[100px] md:blur-[200px]  aspect-video bg-secondary/50 -z-10'></div>

      <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2  ml-[10%] blur-[100px] md:blur-[200px]  lg:w-[30vw] md:w-[200px] hidden sm:block w-[600px] opacity-50 md:opacity-100  aspect-video bg-primary/50 -z-10'></div>
      <div className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 -ml-[10%] blur-[100px] md:blur-[200px]  lg:w-[30vw] md:w-[200px] hidden sm:block w-[600px] opacity-50 md:opacity-100  aspect-video bg-secondary/50 -z-10'></div>
    
      <div className='absolute -top-0 -translate-y-1/2 right-0 translate-x-1/2 lg:w-[20vw] md:w-[500px] w-[300px] blur-[100px] md:blur-[200px]  aspect-video bg-primary -z-10'></div>
      <div className='absolute -top-0 -translate-y-1/2 right-20 translate-x-1/2 lg:w-[60vw] md:w-[500px] w-[600px] hidden md:block blur-[100px] md:blur-[200px]  aspect-video bg-primary/50 -z-10'></div>

    </section>
  )
}
