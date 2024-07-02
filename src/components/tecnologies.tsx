export default function Tecnologies() {
  return (
    <section className="flex flex-col space-y-5 -mt-20 py-10 bg-red-500/50 container">
      <p className='text-center text-muted-foreground'>Tecnologias empleadas</p>
      <div className="overflow-x-hidden">
        <ul className='flex space-x-10 animate-scroll'>
          <li className='text-center'>
            <p>React</p>
          </li>
          <li className='text-center'>
            <p>NextJS</p>
          </li>
          <li className='text-center'>
            <p>TailwindCSS</p>
          </li>
          <li className='text-center'>
            <p>Framer Motion</p>
          </li>
          {/* Duplicar los elementos para simular un scroll infinito */}
          <li className='text-center'>
            <p>React</p>
          </li>
          <li className='text-center'>
            <p>NextJS</p>
          </li>
          <li className='text-center'>
            <p>TailwindCSS</p>
          </li>
          <li className='text-center'>
            <p>Framer Motion</p>
          </li>
        </ul>
      </div>
    </section>
  )
}