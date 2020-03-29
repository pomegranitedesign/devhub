import React from 'react'
import { withTheme } from 'styled-components'

import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import ContactUs from './ContactUs/ContactUs'
import Footer from './Footer'

const Landing = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ContactUs />
      <Footer />
    </>
  )
}

export default withTheme(Landing)
