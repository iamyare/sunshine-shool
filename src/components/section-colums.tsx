import { cn } from '../lib/utils'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer' // Importa InView
import Title from './ui/titles'

export default function SectionColums({
  img,
  title,
  content,
  direction = 'left',
  tag
}: {
  img: string
  title: string
  content: string
  direction?: 'left' | 'right'
  tag?: string
}) {
  return (
    <InView as="div" triggerOnce={true} threshold={0.5}>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={cn(
            'flex container py-10 gap-4',
            direction === 'left' ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
          )}
        >
          <aside className='w-full md:w-2/3 flex flex-col gap-4 '>
          <Title title={title} description={content} tagContent={tag} ClassNameProps={{classNameTag:'bg-muted', classNameTitle:'text-4xl', classNameContainer:' items-start', classNameContainerText:'items-start'}} />
          </aside>
          <aside className='w-full'>
            <img
              src={img}
              alt={title}
              className='rounded-2xl object-cover w-full max-h-[300px]'
            />
          </aside>
        </motion.section>
      )}
    </InView>
  )
}