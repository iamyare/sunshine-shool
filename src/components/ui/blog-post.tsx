import Tag from '@/components/tag'

export default function BlogPost({
  title,
  date,
  tag,
  description
}: {
  title: string
  date: string
  tag: string
  description: string
}) {
  return (
    <a
      href='#'
      className='flex flex-col space-y-4 hover:scale-105 hover:bg-secondary/10 rounded-lg pb-4   overflow-hidden transition-[transform, colors] duration-300 ease-in-out shadow-2xl max-h-[500px] shadow-black/10'
    >
      <img
        src='https://www.lavanguardia.com/andro4all/hero/2023/11/mano-robotica-en-un-laboratorio.png?width=768&aspect_ratio=16:9&format=nowebp'
        alt=''
        className=' object-cover h-[270px] w-full'
      />
      <div className='flex flex-col space-y-2 px-4 '>
        <Tag
          content={tag}
          className=' bg-transparent p-0 text-secondary text-sm '
        />
        <h6 className=' text-lg font-medium'>{title}</h6>
        <p className='text-muted-foreground max-h-[100px] overflow-hidden'>
          {description}
        </p>
        <span className=' text-muted-foreground font-medium'>
          {new Date(date).toLocaleDateString('us-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </a>
  )
}
