import { cn } from '../lib/utils'
import Tag from './tag'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function SectionColums({
  img,
  title,
  content,
  direction = 'left',
}: {
  img: string
  title: string
  content: string
  direction?: 'left' | 'right'
}) {
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 })
        }
      },
      {
        threshold: 0.1,
      }
    )

    const element = document.querySelector('#sectionColums')

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [controls])

  return (
    <motion.section
      id="sectionColums"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={cn(
        'flex container py-10 gap-4',
        direction === 'left' ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      )}
    >
      <aside className='w-full md:w-2/3 flex flex-col gap-4'>
        <Tag content='Hola' className='bg-muted py-0.5' />
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
  )
}