import { cn } from "../lib/utils";

export default function SectionImage({className, title, description}: {className?: string, title: string, description: string}) {
  return (
    <section className={cn('h-[80vh] w-screen relative flex justify-center items-center',className)}>
        <img src="https://th.bing.com/th/id/R.9c0d292730c1b6b14bf0d2c8fe720eb6?rik=cPJPFxRAZUOCeA&pid=ImgRaw&r=0" alt="" className="h-full w-screen absolute top-0 left-0 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

        <div className="relative w-full md:px-0  md:max-w-3xl">
            <div className="container flex flex-col space-y-4 items-center justify-center h-full">
                <h2 className=" text-white text-5xl font-bold">{title}</h2>
                <p className="text-white/80 text-center text-2xl">{description}</p>
                <div className="flex space-x-4">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg">Conoce Más</button>
                    <button className="bg-secondary text-white px-4 py-2 rounded-lg">Inscríbete Ahora</button>
                </div>
            </div>
        </div>
    </section>
  )
}
