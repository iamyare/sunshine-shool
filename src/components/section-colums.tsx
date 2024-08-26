import { cn } from '../lib/utils'
import Title from './ui/titles'
import SectionAnimation from './section-animation'

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
    <SectionAnimation
      id='missionAndVision'
      className={cn(
        'flex container py-10 gap-4',
        direction === 'left'
          ? 'flex-col md:flex-row-reverse'
          : 'flex-col md:flex-row'
      )}
    >
      <aside className='w-full md:w-2/3 flex flex-col gap-4 '>
        <Title
          title={title}
          description={content}
          tagContent={tag}
          ClassNameProps={{
            classNameTag: 'bg-muted',
            classNameTitle: 'text-4xl',
            classNameContainer: ' items-start',
            classNameContainerText: 'items-start',
            classNameDescription: ' text-start'
          }}
        />
      </aside>
      <aside className='w-full'>
        <img
          src={img}
          alt={title}
          className='rounded-2xl object-cover w-full max-h-[300px]'
        />
      </aside>
    </SectionAnimation>
  )
}
