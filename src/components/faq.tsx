import Title from './ui/titles'
import { motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { InView } from 'react-intersection-observer'
import { useLanguageContext } from './translation/languageContext'

const FAQ = () => {
  const { t } = useLanguageContext()

  const FAQS = [
    {
      id: 1,
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      id: 2,
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      id: 3,
      question: t('faq.question3'),
      answer: t('faq.answer3')
    }
  ]

  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <section className='flex flex-col space-y-4 py-20 container'>
          <Title
            title={t('faq.title')}
            description={t('faq.description')}
            tagContent='FAQ'
          />

          <motion.aside
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='max-w-xl w-full mx-auto'>
            <Accordion className='w-full' type='multiple' key='acordion-faq'>
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

export default FAQ