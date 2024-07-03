import { cn } from "../lib/utils";


export default function DivNumbers({title, content, className}:{title:string, content:string, className?:string}) {
  return (
    <div className={cn('flex flex-col justify-between aspect-[4/5] rounded-lg h-[150px] p-4 text-primary', className)}>
        <h3 className="">{title}</h3>
        <p className=" text-3xl font-bold">{content}</p>
    </div>
  )
}
