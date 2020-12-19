import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/blog" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <a
        href="https://speek.design"
        activeClassName="active"
        aria-label="View personal site"
      >
        About
      </a>
      <a
        href="mailto:speek@hey.com"
        activeClassName="active"
        aria-label="View blog page"
      >
        Contact
      </a>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
