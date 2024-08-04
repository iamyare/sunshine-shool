import { cn } from '../lib/utils'
import SectionAnimation from './section-animation'

export default function SectionImage({
  className,
  title,
  description
}: {
  className?: string
  title: string
  description: string
}) {
  return (
    <SectionAnimation
      className={cn(
        'h-[80vh] w-screen relative flex justify-center items-center p-0 group',
        className
      )}
      motions={{
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1 }
      }}
    >
      <img
        src='https://fuxlxocsolxkylxphywx.supabase.co/storage/v1/object/public/temp/sunshine/Sunshine_School_Seniors_452.webp'
        alt=''
        className='h-full w-screen absolute top-0 left-0 object-cover'
      />
      <div className='absolute inset-0 duration-500 ease-out transition-colors bg-primary/30 group-hover:bg-primary/50'></div>

      <div className='relative w-full md:px-0  md:max-w-3xl'>
        <div className='container flex flex-col space-y-4 pt-32 items-center justify-center h-full'>
          <h2 className=' text-white text-5xl font-semibold text-center'>{title}</h2>
          <p className='text-white/80 text-center text-2xl'>{description}</p>
          <div className='flex space-x-4'>
            <button className='bg-primary text-white px-4 py-2 rounded-lg'>
              Conoce Más
            </button>
            <button className='bg-secondary text-white px-4 py-2 rounded-lg'>
              Inscríbete Ahora
            </button>
          </div>
        </div>
      </div>
    </SectionAnimation>
  )
}
