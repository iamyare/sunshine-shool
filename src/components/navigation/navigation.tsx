import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import Logo from '../ui/logo'
import { NAVIGATION } from './navigation-data'
import { cn } from '../../lib/utils'
import ButtonPrimary from '../button-primary'

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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut'}}
      className={`flex  fixed w-screen z-50 items-center justify-between py-4 px-10  backdrop-blur-md transition-colors duration-500 ease-in-out hover:bg-background/50  ${headerClass}`}
    >
      <div className='flex items-center space-x-2'>
        <Logo className='h-10 w-10' />
        <span className='text-lg font-medium transition-colors duration-300 group-[.is-active]:text-foreground text-primary'>Sunshine School</span>
      </div>
      <nav className=' items-center hidden md:flex'>
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
      <ButtonPrimary text='Contacto' />
    </motion.header>
  )
}