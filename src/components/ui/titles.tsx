import { InView } from 'react-intersection-observer'
import Tag from '../tag'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

type InViewProps = {
  triggerOnce: boolean
  threshold: number
}

type ClassNameProps = {
  classNameTag?: string
  classNameTitle?: string
  classNameDescription?: string
  classNameContainer?: string
}

export default function Title({
  tag,
  tagContent,
  title,
  description,
  ClassNameProps,
  inView
}: {
  tag?: string
  tagContent?: string
  description?: string
  title: string
  className?: string
  inView?: InViewProps
  ClassNameProps?: ClassNameProps
}) {
  return (
    <InView
      triggerOnce={inView?.triggerOnce ?? true}
      threshold={inView?.threshold ?? 0.5}
    >
        {( { inView, ref }) => (
                  <motion.div
                    ref={ref}
                  initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    'flex flex-col items-center space-y-5',
                    ClassNameProps?.classNameContainer
                  )}
                >
                  {tagContent && (
                    <Tag
                      tag={tag}
                      content={tagContent}
                      className={ClassNameProps?.classNameTag}
                    />
                  )}

                    <div className='flex flex-col items-center space-y-2'>
                    <h2
                    className={cn(
                      ' text-3xl text-primary font-medium',
                      ClassNameProps?.classNameTitle
                    )}
                  >
                    {title}
                  </h2>
                  <p
                    className={cn(
                      ' text-muted-foreground',
                      ClassNameProps?.classNameDescription
                    )}
                  >
                    {description}
                  </p>
                    </div>
                </motion.div>
            )}
    </InView>
  )
}
