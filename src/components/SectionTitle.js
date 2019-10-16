import React from 'react'
import styled from 'styled-components'

const SectionTitle = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <SubTitle>{props.subtitle}</SubTitle>
  </Wrapper>
)

export default SectionTitle

const Wrapper = styled.div`
  margin-top: 120px;
  text-align: center;
  line-height: 28px;
`

const Title = styled.h2`
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 16px;
  margin-top: 14px;
`