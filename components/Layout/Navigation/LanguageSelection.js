import { NavDropdown } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import { langOptions } from "./const"

const LanguageSelection = () => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language.replace("-", "_")

  const onLangChange = (locale) => {
    i18n.changeLanguage(locale)
  }
  return (
    <NavDropdown className="language-section" title={t(currentLang)}>
      {langOptions.map(({ value: locale, label }) => {
        return (
          <NavDropdown.Item key={locale} onClick={() => onLangChange(locale)}>
            {label}
          </NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )
}

export default LanguageSelection
