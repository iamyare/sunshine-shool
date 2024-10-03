import { cn } from '@/lib/utils'
import React, { useState, forwardRef, useEffect, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from './button'
import { Input } from './input'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`

interface PagesProps {
  children: React.ReactNode
  number: number
}

const Pages = forwardRef<HTMLDivElement, PagesProps>(
  ({ children, number }, ref) => {
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
        {children}
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

Pages.displayName = 'Pages'

interface FlipbookProps {
  pdfUrl: string
}

export default function Flipbook({ pdfUrl }: FlipbookProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pdfLoaded, setPdfLoaded] = useState<boolean>(false)
  const bookRef = useRef<any>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPdfLoaded(true)
  }

  useEffect(() => {
    const book = document.querySelector('.demo-book')
    if (currentPage === 0) {
      book?.classList.add('!-translate-x-[200px]')
    } else {
      book?.classList.remove('!-translate-x-[200px]')
    }
  }, [currentPage])

  const handlePrevPage = () => {
    if (bookRef.current && currentPage > 0) {
      bookRef.current.pageFlip().flipPrev()
    }
  }

  const handleNextPage = () => {
    if (bookRef.current && currentPage < numPages - 1) {
      bookRef.current.pageFlip().flipNext()
    }
  }

  const handlePageChange = (page: number) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(page)
    }
  }

  return (
    <section className='h-full w-full flex justify-center items-center overflow-hidden'>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {pdfLoaded ? (
          <aside className='flex flex-col gap-5'>
            <HTMLFlipBook
              width={400}
              height={570}
              size='fixed'
              minWidth={100}
              maxWidth={500}
              minHeight={100}
              maxHeight={500}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={false}
              startZIndex={0}
              autoSize={false}
              maxShadowOpacity={0.3}
              showCover={true}
              mobileScrollSupport={false}
              clickEventForward={false}
              useMouseEvents={true}
              swipeDistance={100}
              showPageCorners={true}
              disableFlipByClick={false}
              className='demo-book transition-transform duration-500 ease-in-out !-translate-x-[200px]'
              style={{}}
              startPage={0}
              onFlip={(e) => {
                setCurrentPage(e.data)
              }}
              ref={bookRef}
            >
              {[...Array(numPages)].map((_, index) => (
                <Pages key={index} number={index + 1}>
                  <Page
                    pageNumber={index + 1}
                    width={400}
                    height={570}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    className={'!h-full'}
                  />
                </Pages>
              ))}
            </HTMLFlipBook>

            <div className='flex justify-between w-full'>
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                
              >
                Retroceder
              </Button>
              <div className='flex items-center'>
                <Input
                  type='number'
                  min={1}
                  max={numPages}
                  value={currentPage + 1}
                  onChange={(e) => handlePageChange(Number(e.target.value) - 1)}
                />
                <span className='mx-2'>de {numPages}</span>
              </div>

              
              <Button
                onClick={handleNextPage}
                disabled={currentPage === numPages - 1}
                
              >
                Avanzar
              </Button>
            </div>
          </aside>
        ) : (
          <div className='text-white'>Loading PDF...</div>
        )}
      </Document>
    </section>
  )
}