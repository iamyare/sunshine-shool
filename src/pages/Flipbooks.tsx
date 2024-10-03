import Flipbook from "@/components/ui/flipbook";

export default function FlipbooksPage() {
  return (
    <main  className=' w-screen h-screen overflow-hidden'>
        <Flipbook pdfUrl='https://qsbvjgbhuemdbykiourv.supabase.co/storage/v1/object/public/revistas/Sunshine%20Diciembre.pdf' />
    </main>
  )
}
