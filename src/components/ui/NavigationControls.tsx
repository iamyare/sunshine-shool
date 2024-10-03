import React from 'react'
import { Button } from './button'
import { Slider } from '@/components/ui/slider'

interface NavigationControlsProps {
  currentPage: number
  numPages: number
  sliderValue: number
  onPageChange: (page: number) => void
  onSliderChange: (value: number) => void
  onSliderCommit: (value: number) => void
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentPage,
  numPages,
  sliderValue,
  onPageChange,
  onSliderChange,
  onSliderCommit,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage === 1 ? 0 : currentPage - 2);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages - 1) {
      onPageChange(currentPage === 0 ? 1 : currentPage + 2);
    }
  };

  return (
    <div className='flex justify-between items-center gap-4 w-full'>
        <Button onClick={handlePrevPage} disabled={currentPage === 0}>
          Retroceder
        </Button>
        <div className='flex flex-col gap-2 w-full items-center'>
        <Slider
          min={1}
          max={numPages}
          step={1}
          value={[sliderValue]}
          onValueChange={(value) => onSliderChange(value[0])}
          onValueCommit={(value) => onSliderCommit(value[0])}
          className='w-full'
        />
        <span className='text-sm'>
          {currentPage === 0 ? 1 : currentPage + 1}-
          {currentPage === 0 ? 1 : Math.min(currentPage + 2, numPages)} de {numPages}
        </span>
      </div>
        <Button onClick={handleNextPage} disabled={currentPage >= numPages - 1}>
          Avanzar
        </Button>

    </div>
  )
}