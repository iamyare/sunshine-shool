export default function DivProfile({name, position, img}:{name:string, position: string, img:string}) {
  return (
    <div className='flex flex-col justify-end aspect-square rounded-lg shadow-xl shadow-black/5 h-[150px] p-2 text-primary relative'>
        <img src={img} alt={`Fotografía de ${name}`} className="absolute top-0 left-0 rounded-lg w-full h-full object-cover" />
        <div className="relative flex flex-col -space-y-1 px-2 py-1 bg-background rounded-xl">
        <p className=" text-primary">{name}</p>
        <span className="text-xs text-muted-foreground">{position}</span>
        </div>
    </div>
  )
}
