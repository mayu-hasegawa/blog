import React from 'react'
import styled from 'styled-components'

const facebook = require('../img/social/facebook.svg')
const instagram = require('../img/social/instagram.svg')
const twitter = require('../img/social/twitter.svg')

interface SnsProps {
  src: string
  alt: string
  facebook: string
  instagram: string
  twitter: string
}

const snsArea = (props: SnsProps) => (
  <Wrapper>
    <LinkWrapper>
      <SnsLink href="https://facebook.com">
        <img
          src={facebook}
          alt="Facebook"
        />
      </SnsLink>
      <SnsLink href="https://twitter.com">
        <img
          src={twitter}
          alt="Twitter"
        />
      </SnsLink>
      <SnsLink href="https://instagram.com">
        <img
          src={instagram}
          alt="Instagram"
        />
      </SnsLink>
    </LinkWrapper>
  </Wrapper>
)

export default snsArea

const Wrapper = styled.div`
  width: 100%;
  height: 280px;
  background: #F7F7F7;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

const LinkWrapper = styled.div`
  width: 180px;
  height: 40px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

const SnsLink = styled.a`
  width: 40px;
  height: 100%;
`