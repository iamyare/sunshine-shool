import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import DivNumbers from './div-numbers';
import DivProfile from './div-profile';
import DivCard from './div-card';

const ELEMENTS = [
  DivNumbers({ title: 'Estudiantes', content: '820+', className: 'bg-[#D8FFD8]' }),
  DivCard({ content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.', name: 'Meylin Sarahi', role: 'Teacher' }),
  DivProfile({ name:'Meylin Sarahi', position:'Teacher', img:'https://media.istockphoto.com/id/682897825/es/foto/confident-businesswoman-over-gray-background.jpg?s=612x612&w=0&k=20&c=WSlpnPQfEqYL77qKRBZ49wbUd4Ey6rd1RB1HCNKOusQ='}),
  
  DivNumbers({ title: 'Docentes', content: '40+', className: 'bg-[#FFD8D8]' }),
  DivCard({ content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.', name: 'Yamir Rodas', role: 'Teacher' }),
  DivProfile({ name:'Yamir Rodas', position:'Teacher', img:'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720396800&semt=sph'}),

  DivNumbers({ title: 'Clases', content: '20+', className: 'bg-[#D8D8FF]' }),
  DivCard({ content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.', name: 'Yamir Rodas', role: 'Teacher' }),
  DivProfile({ name:'Yamir Rodas', position:'Teacher', img:'https://martinalba.com/wp-content/uploads/2022/05/fotografia-profesional-1.jpg'}),
]

export default function MainVisual() {
  const { scrollYProgress } = useScroll();
  const [yPositions, setYPositions] = useState(Array(ELEMENTS.length).fill(0)); // Inicializa un estado para las posiciones Y de cada elemento con la longitud dinámica
  const [xPositions, setXPositions] = useState(0); // Inicializa un estado para las posiciones X de cada elemento

  useEffect(() => {
    // Función para actualizar las posiciones basadas en el progreso del scroll
    const updatePositions = () => {
      const latest = scrollYProgress.get(); // Obtiene el valor actual del progreso del scroll
      const newPositionsY = yPositions.map((_, index) => index % 2 === 0 ? latest * 100 : latest * -100);
      const newPositionsX = latest * -200;
      setYPositions(newPositionsY);
      setXPositions(newPositionsX);
    };

    updatePositions(); // Llama a la función inicialmente para establecer las posiciones
    const unsubscribe = scrollYProgress.onChange(updatePositions); // Se suscribe a los cambios en el progreso del scroll

    return () => unsubscribe(); // Asegura la cancelación de la suscripción al desmontar
  }, [scrollYProgress]); // Dependencias del efecto

  return (
    <aside className="w-screen ">
      <motion.div className='flex items-center justify-center ' style={{ translateX: xPositions }}>
        <ul className='flex space-x-2 items-center pt-10 pb-20'>
          {ELEMENTS.map((element, index) => (
            <motion.li
              key={index}
              className=' '
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: index * 0.1 } }}
              exit={{ y: 20, opacity: 0 }}
              style={{ translateY: yPositions[index] }} // Aplica la posición Y calculada
            >
              {element}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}