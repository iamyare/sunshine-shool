import { cn } from "../lib/utils";


export default function CardsTweets({ name, content, className}: { name: string, content: string, className?: string}) {
  return (
    <div className={cn("flex flex-col justify-between h-[450px] aspect-[6/4] rounded-2xl bg-violet-300 p-10", className)}>
        <p className=" text-3xl tracking-[-1] text-primary">“{content}”</p>

        <div className="flex items-center">
            <img src="" alt="" />
            <p>{name}</p>
        </div>

    </div>
  )
}
