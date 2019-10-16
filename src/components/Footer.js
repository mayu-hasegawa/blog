import React from 'react'
import styled from 'styled-components'
import ScrollUp from './ScrollUp.js'

const Footer = () => (
  <FooterArea>
    <ScrollUp />
  </FooterArea>
)

export default Footer

const FooterArea = styled.footer`
  width: 100%;
  height: 64px;
  background: #515151;
`