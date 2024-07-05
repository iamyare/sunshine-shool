import { useEffect, useState } from 'react';
import CardsTweets from "./cards-tweets";
import Title from "./ui/titles";
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Juan Perez",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec lectus interdum tincidunt. Nullam",
    color: "bg-violet-200"
  },
  {
    id: 2,
    name: "Lola Lopez",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec lectus interdum tincidunt. Nullam",
    color: "bg-yellow-200"
  },
  {
    id: 3,
    name: "Pedro Martinez",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec lectus interdum tincidunt. Nullam",
    color: "bg-green-200"
  }
];

export default function Testimonials() {
  const { scrollYProgress } = useScroll();
  const [offsetX, setOffsetX] = useState(0);
  const [startY, setStartY] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (!inView) {
        setStartY(null);
      }

      if (inView && startY === null) {
        setStartY(latest);
      }

      if (inView && startY !== null) {
        const maxOffsetX = 40  // Ajusta este valor según sea necesario para controlar la velocidad del desplazamiento horizontal
        const newOffsetX = (latest - startY) * maxOffsetX * 100;
        setOffsetX(newOffsetX);
      }


    });

    return () => unsubscribe();
  }, [inView, scrollYProgress, startY]);

  return (
    <section ref={ref} className='w-screen flex flex-col py-10 bg-muted space-y-5 overflow-x-hidden'>
      <Title title="Testimonios" description="Conoce lo que dicen nuestros estudiantes" tagContent="Opiniones" />

      <ul className="flex space-x-2 pt-10 pb-20 md:ml-[50vw]" style={{ transform: `translateX(-${offsetX}px)` }}>
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.li key={testimonial.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: index * 0.1 } }}
            exit={{ y: 20, opacity: 0 }}
          >
            <CardsTweets name={testimonial.name} content={testimonial.content} className={testimonial.color} />
          </motion.li>
        ))}
      </ul>
      
      <Button className=' mx-auto'>Mas Historias</Button>
    </section>
  );
}