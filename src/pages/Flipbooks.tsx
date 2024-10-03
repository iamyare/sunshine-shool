import DoodlesMain from "@/components/doodles-main";
import Flipbook from "@/components/ui/flipbook";

export default function FlipbooksPage() {
  return (
    <main  className=' w-screen h-screen overflow-hidden relative'>
        <Flipbook pdfUrl='https://qsbvjgbhuemdbykiourv.supabase.co/storage/v1/object/public/revistas/Sunshine%20Diciembre.pdf' />
        <div className='absolute -z-[1] top-0 left-0 opacity-50'>
        <DoodlesMain className='relative opacity-10 ' />
      </div>
    </main>
  )
}
