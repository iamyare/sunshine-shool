import { useParams } from 'react-router-dom';
import DoodlesMain from "@/components/doodles-main";
import Flipbook from "@/components/ui/flipbook";
import {  useEffect, useState } from 'react';

export default function FlipbooksPage() {
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id === '1122019d-b4fe-4deb-bb65-5545c9269846') {
      setPdfUrl('https://qsbvjgbhuemdbykiourv.supabase.co/storage/v1/object/public/revistas/Revista%20Sunshine%20Marzo%202024_compressed.pdf')
    } else {
      setPdfUrl('https://qsbvjgbhuemdbykiourv.supabase.co/storage/v1/object/public/revistas/Revista%20Sunshine%20Diciembre_compressed.pdf')
    }
  }, [id])


  return (
    <main className='w-screen h-screen overflow-hidden relative'>
      <Flipbook pdfUrl={pdfUrl} />
      <div className='absolute -z-[1] top-0 left-0 opacity-50'>
        <DoodlesMain className='relative opacity-10 ' />
      </div>
    </main>
  );
}