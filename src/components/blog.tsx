import { InView } from 'react-intersection-observer'
import BlogPost from './ui/blog-post'
import Title from './ui/titles'

import { motion } from 'framer-motion'

const BLOG_POSTS = [
  {
    id: 1,
    tag: 'Articulo',
    date: '2021-01-01',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 2,
    tag: 'Video',
    date: '2021-01-01',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 3,
    tag: 'STEAM',
    date: '2021-01-01',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima mollitia incidunt, neque necessitatibus earum ipsam optio, consectetur quae facere atque aut amet natus. Numquam eum deserunt at. Perspiciatis, magni.'
  }
]

export default function Blog() {
  return (
    <InView triggerOnce threshold={0.1}>
        {({ inView, ref }) => (
                <section className=' flex flex-col py-20 container space-y-5 overflow-x-hidden'>
                <Title
                  title='Blog'
                  description='Aquí encontrarás las últimas noticias y novedades'
                  tagContent='Blog'
                  ClassNameProps={{ classNameTag: 'bg-muted' }}
                />
                <ul className='flex flex-col md:flex-row gap-6 md:gap-4'>
                  {BLOG_POSTS.map((post, index) => (
                    <motion.li key={post.id}
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: index * 0.2}}
                        className='w-full'
                    >
          
                        <BlogPost title={post.title} date={post.date} tag={post.tag} description={post.description} />
                    </motion.li>
                  ))}
                </ul>
              </section>
        )}
        </InView>
  )
}
