import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"

import myphoto from '../img/myphoto.jpg'

const TopProfile = () => (
  <Profile>
    <Img
      src={myphoto}
      alt="my photo"
    />
    <Name>Mayu HASEGAWA</Name>
    <Job>Web Coder</Job>
  </Profile>
)

export default TopProfile

const Profile = styled.div`
  width: 36%;
  max-width: 275px;
  min-height: 276px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 31px 0;
  box-sizing: border-box;
  z-index: 1;
  margin-right: 3%;
  ${media.lessThan("medium")`
    width: 100%;
    max-width: inherit;
  `}
`

const Img = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  z-index: 1;
`

const Name = styled.p`
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 30px;
  ${media.lessThan("medium")`
    margin-top: 62px;
  `}
`

const Job = styled.p`
  font-size: 14px;
  color: #FFFFFF;
  margin-top: 12px;
`