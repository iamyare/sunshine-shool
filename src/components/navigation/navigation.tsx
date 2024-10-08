import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from '../ui/logo'
import { NAVIGATION } from './navigation-data'
import { cn } from '../../lib/utils'
import ButtonPrimary from '../button-primary'
import LanguageSelector from '../translation/languageSelect'

export default function Navigation() {
  const { scrollYProgress } = useScroll()
  const [headerClass, setHeaderClass] = useState('bg-background/0')

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newClass =
        latest > 0.02 ? 'bg-background/50 group is-active' : 'bg-background/0'
      setHeaderClass(newClass)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const pathname = window.location.pathname

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`flex fixed w-screen z-50 items-center justify-between py-4 px-10 backdrop-blur-md transition-colors duration-500 ease-in-out hover:bg-background/50 ${headerClass}`}
    >
      <div className='flex items-center space-x-2'>
        <Logo className='h-10 w-10' />
        <span className='text-lg font-medium transition-colors duration-300 group-[.is-active]:text-foreground text-primary'>
          Sunshine School
        </span>
      </div>
      <nav className='items-center hidden md:flex'>
        <ul className='flex space-x-10'>
          {NAVIGATION().map((item: { name: string; href: string }, index: number) => (
            <li
              key={index}
              className={cn(
                'text-muted/70 group-[.is-active]:text-primary transition-colors duration-300 hover:text-primary active:text-primary font-medium',
                pathname === item.href ? 'text-muted group-[.is-active]:text-foreground font-semibold' : ''
              )}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center gap-2'>
        <LanguageSelector />
        <ButtonPrimary text='Contacto' />
      </div>
    </motion.header>
  )
}