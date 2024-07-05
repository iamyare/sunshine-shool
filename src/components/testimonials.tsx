import { useEffect, useState } from 'react';
import CardsTweets from "./cards-tweets";
import Title from "./ui/titles";
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Juan Perez",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec lectus interdum tincidunt. Nullam"
  },
  {
    id: 2,
    name: "Lola Lopez",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec lectus interdum tincidunt. Nullam"
  },
  {
    id: 3,
    name: "Pedro Martinez",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec lectus interdum tincidunt. Nullam"
  }
];

export default function Testimonials() {
  const { scrollYProgress } = useScroll();
  const [offsetX, setOffsetX] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      const unsubscribe = scrollYProgress.onChange((latest) => {
        // Ajusta este valor según sea necesario para controlar la velocidad del desplazamiento horizontal
        const maxOffsetX = 500; // Máximo desplazamiento horizontal
        //Restar la posicion, hasta que llegue a inView
        
        const newOffsetX = (latest * maxOffsetX) ;
        setOffsetX(newOffsetX);
      });

      return () => unsubscribe();
    } 
  }, [inView, scrollYProgress]);

  return (
    <section ref={ref} className='w-screen flex flex-col py-10 bg-muted space-y-5 overflow-x-hidden'>
      <Title title="Testimonios" description="Conoce lo que dicen nuestros estudiantes" tagContent="Opiniones" />

      <ul className="flex space-x-2 pt-10 pb-20" style={{ transform: `translateX(-${offsetX}px)` }}>
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.li key={testimonial.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: index * 0.1 } }}
            exit={{ y: 20, opacity: 0 }}
          >
            <CardsTweets name={testimonial.name} content={testimonial.content} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
