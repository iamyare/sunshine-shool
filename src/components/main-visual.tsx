import { motion } from 'framer-motion';

const elements = [
  "Elemento 1",
  "Elemento 2",
  "Elemento 3",
  "Elemento 4",
  "Elemento 5",
  "Elemento 6",
  "Elemento 7",
];

export default function MainVisual() {
  return (
    <aside className="w-screen py-8 mt-10 bg-red-500">
      <motion.div 
        className='flex items-center justify-center bg-blue-500'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0 }}
      >
        <ul className='flex space-x-2'>
          {elements.map((element, index) => (
            <motion.li
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: index * 0.1 } }}
              exit={{ y: 20, opacity: 0 }}
            >
              {element}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}