import { NavDropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const LanguageSelection = () => {
  const { t, i18n } = useTranslation()

  const onLangChange = (locale) => {
    i18n.changeLanguage(locale)
  }

  return (
    <NavDropdown className="language-section" title={t('language')}>
      {['en-US', 'zh-CN', 'zh-TW'].map((locale) => {
        return (
          <NavDropdown.Item key={locale} onClick={() => onLangChange(locale)}>
            {t(locale.replace('-', '_'))}
          </NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )
}

export default LanguageSelection
