import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import { useLanguageContext } from './languageContext'

const LanguageSelect = () => {
  const { languages, onClickLanguageChange, currentLanguage } = useLanguageContext()

  const handleLanguageChange = (value: string) => {
    onClickLanguageChange(value)
  }

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={currentLanguage}>
      <SelectTrigger className=' w-fit px-2 bg-transparent border-none hover:bg-background/50'>
        <SelectValue placeholder='Language' />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, lang]) => (
          <SelectItem key={code} value={code}>
            {lang.flag} {lang.nativeName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSelect