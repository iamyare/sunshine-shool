import { cn } from "../lib/utils";


export default function Tag({tag, content, className}:{tag?:string, content:string, className?:string}) {
  return (
    <div className={cn('flex items-center  px-2 py-2 w-fit space-x-2 rounded-full bg-background/60 backdrop-blur-sm text-secondary',className,
    tag ? 'pr-3' : ''
    )}>
        {
            tag && <span className="px-3 py-1 bg-background rounded-full font-medium">{tag}</span>
        }
        <p>{content}</p>
    </div>
  )
}
