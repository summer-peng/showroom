import { NavDropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const LanguageSelection = () => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language.replace('-', '_')

  const onLangChange = (locale) => {
    i18n.changeLanguage(locale)
  }
  return (
    <NavDropdown className="language-section" title={t(currentLang)}>
      {[
        { locale: 'en-US', title: 'English(U.S.)' },
        { locale: 'zh-CN', title: '簡體中文' },
        { locale: 'zh-TW', title: '繁體中文' },
      ].map(({ locale, title }) => {
        return (
          <NavDropdown.Item key={locale} onClick={() => onLangChange(locale)}>
            {title}
          </NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )
}

export default LanguageSelection
