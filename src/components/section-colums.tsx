import { cn } from '../lib/utils'
import Tag from './tag'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer' // Importa InView

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
          <aside className='w-full md:w-2/3 flex flex-col gap-4'>
            {tag && <Tag content={tag} className='bg-muted py-0.5' />}
            <div className='flex flex-col gap-2'>
              <h2 className='text-4xl font-medium'>{title}</h2>
              <p className='text-muted-foreground'>{content}</p>
            </div>
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