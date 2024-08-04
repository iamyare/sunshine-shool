import Title from './ui/titles'
import { motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { InView } from 'react-intersection-observer'

const FAQS = [
  {
    id: 1,
    question: '¿Qué es Sunshine School?',
    answer:
      'Sunshine School es una institución educativa que ofrece una educación de alta calidad que combina estándares académicos rigurosos con métodos innovadores para desarrollar la creatividad y el pensamiento crítico.'
  },
  {
    id: 2,
    question: '¿Cómo puedo inscribir a mi hijo?',
    answer:
      'Para inscribir a tu hijo en Sunshine School, simplemente completa el formulario de inscripción en línea en nuestro sitio web y nos pondremos en contacto contigo para completar el proceso.'
  },
  {
    id: 3,
    question: '¿Cuál es el horario de clases?',
    answer:
      'El horario de clases en Sunshine School es de lunes a viernes de 8:00 a.m. a 3:00 p.m. con una hora de almuerzo de 12:00 p.m. a 1:00 p.m.'
  }
]

export default function FAQ() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <section className=' flex flex-col space-y-4 py-20 container'>
          <Title
            title='Preguntas Frecuentes'
            description='Aquí encontrarás las respuestas a las preguntas más comunes'
            tagContent='FAQ'
          />

          <motion.aside
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2}}
           className='max-w-xl w-full mx-auto '>
            <Accordion className='w-full ' type='multiple' key='acordion-faq'>
              {FAQS.map((faq) => (
                <AccordionItem key={faq.id} value={faq.question}>
                  <AccordionTrigger>
                    <h3 className='text-xl font-bold text-primary'>
                      {faq.question}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className='text-muted-foreground'>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.aside>
        </section>
      )}
    </InView>
  )
}
