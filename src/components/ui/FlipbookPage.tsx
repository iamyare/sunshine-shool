import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Page } from 'react-pdf'

interface FlipbookPageProps {
  number: number
}

export const FlipbookPage = forwardRef<HTMLDivElement, FlipbookPageProps>(
  ({ number }, ref) => {
    const isLeftPage = number % 2 !== 0

    return (
      <div
        className={cn(
          'page',
          number === 1 && 'page-cover rounded-lg shadow-realistic',
          isLeftPage ? 'page-left shadow-xl' : 'page-right shadow-xl'
        )}
        ref={ref}
      >
        <Page
          pageNumber={number}
          width={400}
          height={570}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className={'!h-full'}
        />
        {isLeftPage ? (
          <>
            <div className='page-right-highlight' />
            <div className='page-right-top-shadow' />
            <div className='page-right-shadow' />
            <div className='page-right-binding' />
          </>
        ) : (
          <>
            <div className='page-left-highlight' />
            <div className='page-left-binding' />
            <div className='page-left-shadow' />
            <div className='center-line' />
          </>
        )}
      </div>
    )
  }
)

FlipbookPage.displayName = 'FlipbookPage'