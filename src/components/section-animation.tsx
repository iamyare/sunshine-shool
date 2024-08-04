import { InView } from 'react-intersection-observer'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/lib/use-media-query'

interface SectionAnimationProps {
  children: React.ReactNode
  className?: string
  motions?: MotionProps
  inViewOptions?: {
    triggerOnce?: boolean
    thresholdDesktop?: number
    thresholdMobile?: number
  }
}

export default function SectionAnimation({
  children,
  className,
  motions = {} as MotionProps,
  inViewOptions
}: SectionAnimationProps) {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const {
    initial = { opacity: 0, y: 50 },
    animate = { opacity: 1, y: 0 },
    transition = { duration: 0.5 }
  } = motions

  const {
    triggerOnce = true,
    thresholdDesktop = 0.5,
    thresholdMobile = 0.1
  } = inViewOptions || {}

  const threshold = isDesktop ? thresholdDesktop : thresholdMobile

  return (
    <InView as='div' triggerOnce={triggerOnce} threshold={threshold}>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          initial={initial}
          animate={inView ? animate : {}}
          transition={transition}
          className={cn(
            'py-10 flex flex-col  gap-5 items-center',
            className
          )}
        >
          {children}
        </motion.section>
      )}
    </InView>
  )
}
