import { cn } from '@/lib/utils'
import React, { useState, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`

interface PagesProps {
  children: React.ReactNode
  number: number
}

const Pages = forwardRef<HTMLDivElement, PagesProps>(
  ({ children, number }, ref) => {

    return (
      <div
        className={cn(
          'page',
          number === 1 && 'page-cover',
          number % 2 === 0 ? 'page-right' : 'page-left'
        )}
        ref={ref}
      >
        {children}
        <p>Page number: {number}</p>
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
  const [pdfLoaded, setPdfLoaded] = useState<boolean>(false)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPdfLoaded(true)
  }

  return (
    <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden'>
      <h1 className='text-3xl text-white text-center font-bold'>FlipBook</h1>

      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {pdfLoaded ? (
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
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            clickEventForward={false}
            useMouseEvents={true}
            swipeDistance={100}
            showPageCorners={true}
            disableFlipByClick={false}
            className='demo-book'
            style={{}}
            startPage={0}
          >
            {[...Array(numPages)].map((_, index) => (
              <Pages key={index} number={index + 1}>
                <Page
                  pageNumber={index + 1}
                  width={400}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
                <p>
                  Page {index + 1} of {numPages}
                </p>
              </Pages>
            ))}
          </HTMLFlipBook>
        ) : (
          <div className='text-white'>Loading PDF...</div>
        )}
      </Document>
    </div>
  )
}
