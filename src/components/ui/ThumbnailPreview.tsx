import React from 'react'
import { Page } from 'react-pdf'

interface ThumbnailPreviewProps {
  pages: number[]
}

export const ThumbnailPreview: React.FC<ThumbnailPreviewProps> = ({ pages }) => {
  return (
    <div className='absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg flex'>
      {pages.map((pageNum, index) => (
        <Page
          key={index}
          pageNumber={pageNum}
          width={100}
          height={142}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      ))}
    </div>
  )
}