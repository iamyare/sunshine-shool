import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionAnimation from './section-animation'
import Tag from './tag'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/lib/use-media-query'

const MAGAZINES = [
  {
    title: 'Revista 1',
    description:
      'En nuestra revista podrás encontrar artículos interesantes sobre educación, innovación y mucho más. ¡No te la pierdas!',
    image:
      'https://th.bing.com/th/id/OLC.PF2jVEnBEUYiLA480x360?&rs=1&pid=ImgDetMain'
  },
  {
    title: 'Revista 2',
    description:
      'En nuestra revista podrás encontrar artículos interesantes sobre educación, innovación y mucho más. ¡No te la pierdas!',
    image:
      'https://th.bing.com/th/id/OLC.PF2jVEnBEUYiLA480x360?&rs=1&pid=ImgDetMain'
  },
  {
    title: 'Revista 3',
    description:
      'En nuestra revista podrás encontrar artículos interesantes sobre educación, innovación y mucho más. ¡No te la pierdas!',
    image:
      'https://th.bing.com/th/id/OLC.PF2jVEnBEUYiLA480x360?&rs=1&pid=ImgDetMain'
  }
]

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
}

function MagazineItem({
  title,
  description,
  image,
  isActive,
  onHover,
  isDesktop
}: {
  title: string
  description: string
  image: string
  isActive: boolean
  onHover: () => void
  isDesktop: boolean
}) {
  const itemVariants = {
    hidden: { width: isDesktop ? '150px' : '50px' },
    visible: {
      width: isDesktop ? '500px' : '100%',
      transition: { duration: 0.7 }
    }
  }
  return (
    <motion.div
      className={
        'relative h-[300px] rounded-xl overflow-hidden group cursor-pointer'
      }
      initial='hidden'
      animate={isActive ? 'visible' : 'hidden'}
      variants={itemVariants}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <motion.img
        src={image}
        alt={title}
        animate={{ scale: isActive ? 1.3 : 1 }}
        transition={{ duration: isActive ? 5 : 0, ease: 'easeInOut' }}
        className='-z-10 absolute w-full h-full object-cover'
      />
      <div
        className={cn(
          'transition-all duration-700 absolute w-full h-full -z-10',
          isActive
            ? 'bg-gradient-to-b from-primary/30 to-primary opacity-100'
            : 'bg-gradient-to-b from-primary/30 to-transparent opacity-0'
        )}
      ></div>
      <div className='flex flex-col h-full justify-end relative p-4'>
        {isActive && (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={textVariants}
          >
            <h2 className='text-4xl font-medium text-secondary'>{title}</h2>
            <p className=' text-muted'>{description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Magazine() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % MAGAZINES.length)
    }, 5000) // Cambia el índice cada 5 segundos
    return () => clearInterval(interval)
  }, [])

  return (
    <SectionAnimation>
      <aside className='flex flex-col space-y-5 items-center px-4 w-full md:px-0 md:max-w-3xl mx-auto'>
        <Tag content='Revistas' className='bg-muted' />
        <div className='flex items-center space-x-2'>
          {MAGAZINES.map((magazine, index) => (
            <MagazineItem
              key={index}
              title={magazine.title}
              description={magazine.description}
              image={magazine.image}
              isActive={
                index === (hoverIndex !== null ? hoverIndex : activeIndex)
              }
              onHover={() => setHoverIndex(hoverIndex === index ? null : index)}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </aside>
    </SectionAnimation>
  )
}
