import  { useState, useRef, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Document, pdfjs } from 'react-pdf'
import { FlipbookPage } from './FlipbookPage'
import { NavigationControls } from './NavigationControls'
import { ThumbnailPreview } from './ThumbnailPreview'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`

interface FlipbookProps {
  pdfUrl: string
}

export default function Flipbook({ pdfUrl }: FlipbookProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pdfLoaded, setPdfLoaded] = useState<boolean>(false)
  const [showThumbnail, setShowThumbnail] = useState<boolean>(false)
  const [thumbnailPages, setThumbnailPages] = useState<number[]>([1, 2])
  const [sliderValue, setSliderValue] = useState<number>(1)
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

  useEffect(() => {
    setSliderValue(currentPage + 1)
  }, [currentPage])

  const handlePageChange = (pageNumber: number) => {
    if (bookRef.current) {
      let targetPage = pageNumber;
      if (pageNumber > 0) {
        targetPage = pageNumber % 2 === 0 ? pageNumber - 1 : pageNumber;
      }
      bookRef.current.pageFlip().flip(targetPage);
      setCurrentPage(targetPage);
    }
  }

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    setThumbnailPages(value === 1 ? [1] : [value, Math.min(value + 1, numPages)])
    setShowThumbnail(true)
  }

  const handleSliderCommit = (value: number) => {
    setShowThumbnail(false)
    console.log('Slider commit:', value)
    handlePageChange(value - 1)
  }

  return (
    <section className='h-full w-full flex justify-center items-center overflow-hidden'>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {pdfLoaded ? (
          <aside className='flex flex-col gap-5 relative'>
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
              onFlip={(e) => setCurrentPage(e.data)}
              ref={bookRef}
            >
              {[...Array(numPages)].map((_, index) => (
                <FlipbookPage key={index} number={index + 1} />
              ))}
            </HTMLFlipBook>

            <NavigationControls
              currentPage={currentPage}
              numPages={numPages}
              sliderValue={sliderValue}
              onPageChange={handlePageChange}
              onSliderChange={handleSliderChange}
              onSliderCommit={handleSliderCommit}
            />

            {showThumbnail && (
              <ThumbnailPreview pages={thumbnailPages} />
            )}
          </aside>
        ) : (
          <div className='text-white'>Loading PDF...</div>
        )}
      </Document>
    </section>
  )
}