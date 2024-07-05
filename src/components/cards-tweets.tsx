

export default function CardsTweets({ name, content}: { name: string, content: string}) {
  return (
    <div className="flex flex-col justify-between h-[450px] aspect-[6/4] rounded-2xl bg-violet-300 p-10">
        <p className=" text-3xl tracking-[-1] text-primary">“{content}”</p>

        <div className="flex items-center">
            <img src="" alt="" />
            <p>{name}</p>
        </div>

    </div>
  )
}
