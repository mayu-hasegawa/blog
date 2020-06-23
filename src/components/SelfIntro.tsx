import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"

const SelfIntro = () => (
  <Wrapper>
    <Desc>大学卒業後、倉庫会社にて貿易事務、輸出営業に従事。<br />未経験からWebエンジニア業界へ転職し、自社開発企業にてWebコーダーとして勤務。三度の飯より三度の飯が好き。</Desc>
    <Name>長谷川 茉由 : ハセガワ マユ</Name>
    <TextWrapper>
      <TextContent>
        <Text>性別</Text>
        <Text>年齢</Text>
        <Text>現住所</Text>
      </TextContent>
      <TextContent>
        <Text>女性</Text>
        <Text>30歳</Text>
        <Text>大阪府</Text>
      </TextContent>
    </TextWrapper>
  </Wrapper>
)

export default SelfIntro

const Wrapper = styled.div`
  width: 64%;
  max-width: 612px;
  ${media.lessThan('medium')`
    width: 100%;
    max-width: inherit;
    margin: 24px 0 50px;
  `}
`

const Desc = styled.p`
  font-size: 14px;
  color: #FFFFFF;
  line-height: 28px;
`

const Name = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin-top: 29px;
`

const TextWrapper = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width: 317px;
  margin-top: 10px;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`

const TextContent = styled.ul`
  width: 50%;
`

const Text = styled.li`
  font-size: 14px;
  line-height: 28px;
  color: #FFFFFF;
`