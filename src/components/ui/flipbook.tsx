import React, { useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { pdfjs, Document, Page as ReactPdfPage } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PageProps {
  pageNumber: number
}

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ pageNumber }, ref) => {
    return (
      <div className='page' ref={ref}>
        <ReactPdfPage pageNumber={pageNumber} width={300} />
      </div>
    )
  }
)

Page.displayName = 'Page'

export default function Flipbook({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumbers(Array.from(new Array(numPages), (_, index) => index + 1))
  }

  return (
      <>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <HTMLFlipBook
width={300} 
height={500}
          size='fixed'
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={true}
          className='demo-book'
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={false}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={5000}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pageNumbers.map((pageNumber) => (
            <Page key={pageNumber} pageNumber={pageNumber} />
          ))}
        </HTMLFlipBook>
      </Document>

    </>
  )
}
