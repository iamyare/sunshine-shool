import { useLanguageContext } from "../translation/languageContext"


export const NAVIGATION = () => {
    const { t } = useLanguageContext()

    return [
        {
            name: t('navigation.home'),
            href: '#'
        },
        {
            name: t('navigation.about'),
            href: '#about'
        },
        {
            name: t('navigation.contact'),
            href: '#contact'
        },
        {
            name: t('navigation.itIsAHawkThings'),
            href: '#it-is-a-hawk-things'
        },
        {
            name: t('navigation.enrollments'),
            href: '#enrollments'
        }
    ]
}