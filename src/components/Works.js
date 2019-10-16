import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import output01 from '../img/output01.png'
import output02 from '../img/output02.png'
import output03 from '../img/output03.jpg'

const Works = () => (
  <Wrapper>
    <Block>
      <WorksContent
        href="https://app-ads-gladcube.com/"
        src={output01}
        alt="実績①"
        site="app-ads-gladcube.com"
        cording="cording / HTML・CSS・jQuery"
      />
      <WorksContent
        href="https://www.aun0904.com/"
        src={output02}
        alt="実績②"
        site="株式会社a.Un様LP"
        cording="cording / HTML・CSS・jQuery"
      />
      <WorksContent
        href="https://catfood-hasem-shopping.ssl-lolipop.jp/"
        src={output03}
        alt="実績③"
        site="Portfolio"
        cording="cording / PHP"
      />
    </Block>
  </Wrapper>
)

export default Works

const WorksContent = props => (
  <Content>
    <Link href={props.href} >
      <WorksImg><img src={props.src} alt={props.alt} /></WorksImg>    
      <TextBold>{props.site}</TextBold>
      <Text>{props.cording}</Text>
      <StyledIcon icon={faAngleRight} />
    </Link>
  </Content>
)

const Wrapper = styled.div`
  margin: 75px 0 112px;
`

const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  ${media.lessThan("medium")`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`

const Content = styled.div`
  width: 275px;
  text-align: center;
  ${media.lessThan("medium")`
    width: 100%;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  `}
`

const Link = styled.a`
  color: #000000;
  width: 100%;
  height: 100%;
  display: block;
  transition: 0.2s ease;
  &:hover {
    background: rgba(239,117,190,0.3);
    transition: 0.2s ease;
  }
`

const WorksImg = styled.div`
  width: 100%;
  height: 160px;
  ${media.lessThan("medium")`
    height: inherit;
  `}
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`

const TextBold = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
`

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  font-weight: 700;
  font-size: 24px;
  color: #EF75BE;
  margin-top: 40px;
`