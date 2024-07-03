import { cn } from "../lib/utils"

export default function DivCard({content, name, role, className}:{content:string, name:string, role:string, className?:string}) {
  return (
    <div className={cn('bg-background rounded-lg shadow-xl shadow-black/5  flex flex-col justify-between aspect-square  h-[220px] p-4 text-primary', className)}>
        <p className="text-base font-medium max-h-[120px] overflow-hidden max-w-full">{content}</p>
        <div className=" flex flex-col -space-y-1 text-muted-foreground">
                <p className=" text-sm font-medium">{name}</p>
                <span className=" text-xs">{role}</span>
            </div>
    </div>
  )
}