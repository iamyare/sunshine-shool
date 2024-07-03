import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import { Button } from '../ui/button'
import Logo from '../ui/logo'
import { NAVIGATION } from './navigation-data'
import { cn } from '../../lib/utils'

export default function Navigation() {
  const { scrollYProgress } = useScroll()
  const [headerClass, setHeaderClass] = useState('bg-background/0')

  useEffect(() => {
    scrollYProgress.onChange(() => {
      const newClass = scrollYProgress.get() > 0.1 ? 'bg-background/50 group is-active' : 'bg-background/0'
      setHeaderClass(newClass)
    })
  }, [scrollYProgress])

  const pathname = window.location.pathname

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex  fixed w-screen z-50 items-center justify-between py-4 px-10  backdrop-blur-md transition-colors duration-500 ease-in-out hover:bg-background/50  ${headerClass}`}
    >
      <div className='flex items-center space-x-2'>
        <Logo className='h-10 w-10' />
        <span className='text-lg font-medium transition-colors duration-300 group-[.is-active]:text-foreground text-primary'>Sunshine School</span>
      </div>
      <nav className='flex items-center'>
        <ul className='flex space-x-10'>
            {
                NAVIGATION.map((item, index) => (
                    <li key={index} className={
                        cn('text-muted/70 group-[.is-active]:text-primary transition-colors duration-300 hover:text-primary active:text-primary font-medium',
                        pathname === item.href ? 'text-muted group-[.is-active]:text-foreground font-semibold' : ''
                        )
                    }>{item.name}</li>
                ))
            }

        </ul>
      </nav>
      <Button>Inscribete</Button>
    </motion.header>
  )
}