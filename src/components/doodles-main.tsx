import { cn } from "../lib/utils";

export default function DoodlesMain({className}:{className?:string}) {
  return (
    <div className={cn("w-screen h-screen bg-repeat bg-[length:400px_400px] bg-[url('assets/Doodles.svg')] ", className)} >
    </div>
  )
}
