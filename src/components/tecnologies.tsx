import React, { useEffect, useRef, useState } from 'react';

export default function Tecnologies() {
  const tecnologias = ['React', 'NextJS', 'TailwindCSS', 'Framer Motion'];
  const [items, setItems] = useState([...tecnologias, ...tecnologias]); // Duplica inicialmente los elementos
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        const isAtEnd = scrollWidth - clientWidth - scrollLeft <= 0;
        if (isAtEnd) {
          // Reinicia el desplazamiento y duplica los elementos para el efecto infinito
          scrollRef.current.scroll({ left: 0, behavior: 'smooth' });
          setItems([...items, ...tecnologias]);
        } else {
          // Desplaza suavemente
          scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }
    }, 20); // Ajusta este valor para controlar la velocidad del desplazamiento

    return () => clearInterval(interval);
  }, [items]);

  return (
    <section className="flex flex-col space-y-5 py-10 container">
      <p className='text-center text-muted-foreground'>Tecnologías empleadas</p>
      <div className="overflow-x-hidden relative" ref={scrollRef}>
      <div className=' absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-black to-transparent'></div>
        <ul className='flex space-x-10 animate-scroll'>
          {items.map((item, index) => (
            <li key={index} className='text-center'>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}