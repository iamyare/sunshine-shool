import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Page } from 'react-pdf'

interface BookInfo {
  dimensions: {
    width: number
    height: number
  }
  format: 'A4' | 'Letter'
  aspectRatio: number
}

interface FlipbookPageProps {
  number: number
  bookInfo: BookInfo
}

export const FlipbookPage = forwardRef<HTMLDivElement, FlipbookPageProps>(
  ({ number, bookInfo }, ref) => {
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
          width={bookInfo.dimensions.width}
          height={bookInfo.dimensions.height}
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