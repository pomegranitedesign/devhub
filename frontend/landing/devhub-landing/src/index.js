import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Landing } from './Components/index'
import { _globalTheme } from './_globalTheme'
import './index.scss'

render(
  <ThemeProvider theme={_globalTheme}>
    <Router>
      <Landing />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
