import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"
import ColumnTitle from './ColumnTitle'

const human = require('../img/silhouette.jpg')

interface CareerListProps {
    src: string
    title: string
    human: string
}

const CareerList01 = () => (
  <List>
    <Content>
      <Icon src={human} /><ColumnTitle title="EXPERIENCE" />
      <Block>
        <Border />      
        <TextDetail>
          <TextBold>Webコーダー | 2017.10 -<br />株式会社グラッドキューブ</TextBold>
        </TextDetail>
      </Block>
      <TextDetail>
        <TextBold>貿易事務・営業 | 2012.04 - 2017.08<br />三菱倉庫株式会社</TextBold>
        <Text>治験薬配送オペレーション、貿易事務、<br />輸出営業に携わる。</Text>
      </TextDetail>
    </Content>
    <Content>
      <Icon src={human} /><ColumnTitle title="EDUCATION" />
      <TextDetail>
        <TextBold>経済学など | 2008.04 - 2012.03<br />関西学院大学 経済学部</TextBold>
      </TextDetail>
    </Content>
  </List>
)

const CareerList02 = () => (
  <List>
    <ExContent>
      <Icon src={human} /><ColumnTitle title="SKILL" />
      <Block>
        <SkillText>JavaScript</SkillText>
        <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        <SkillComment>Reactを学習中</SkillComment>
      </Block>
      <Block>
        <SkillText>HTML / CSS</SkillText>
        <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
      </Block>
      <Block>
        <SkillText>PHP</SkillText>
        <Dots><GDot /><Dot /><Dot /><Dot /><Dot /></Dots>
        <SkillComment>バックエンドの仕組みを学ぶため勉強中</SkillComment>     
      </Block>
      <Block>
        <SkillText>WordPress</SkillText>
        <Dots><GDot /><Dot /><Dot /><Dot /><Dot /></Dots>
        <SkillComment>オリジナルテーマを開発できる</SkillComment>     
      </Block>
    </ExContent>
    <Content>
      <Icon src={human} /><ColumnTitle title="PERSONAL QUALITIES" />
      <TextDetail>
        <TextBold>真面目で根気強い。</TextBold>
      </TextDetail>
    </Content>
  </List>
)

const CareerList = (props: CareerListProps) => (
  <>
    <CareerList01 />
    <CareerList02 />
  </>
)

export default CareerList

const List = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  ${media.lessThan('medium')`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`

const Content = styled.div`
  width: 50%;
  padding-left: 25px;
  position: relative;
  ${media.lessThan('medium')`
    width: 100%;
  `}
  ${media.lessThan('small')`
    padding-left: 0;
  `}
`

const ExContent = styled(Content)`
  ${media.lessThan('medium')`
    margin-bottom: 60px;
  `}
`

const Icon = styled.img`
  width: 17px;
  height: 16px;
  position: absolute;
  left: 17px;
  top: 13px;
  ${media.lessThan('small')`
    left: 0;
  `}
`

const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
`

const Border = styled.div`
  margin-top: 19px;
  margin-bottom: -8px;
  border-left: 1px solid #C4C4C4;  
`

const TextDetail = styled.div`
  padding-left: 25px;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`

const TextBold = styled(Text)`
  position: relative;
  font-weight: bold;
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: .5em;
    left: -1.75em;
    width: 5px;
    height: 5px;
    background: #C4C4C4;
    border-radius: 50%;
    margin: 3px 0;
    z-index: 1;
  }
`

const SkillText = styled(Text)`
  padding-left: 25px;
  font-size: 14px;
  width: 20%;
  min-width: 110px;
`

const Dots = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin: 10px 3% 0 5%;
  width: 15%;
  ${media.lessThan('small')`
    margin: 10px 2% 0 3%;    
  `}
`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #C4C4C4;
  border-radius: 50%;  
  margin-right: 6px;
  ${media.lessThan('small')`
    margin-right: 3px;
  `}
`

const GDot = styled(Dot)`
  background: #00A1AB;
`

const SkillComment = styled(SkillText)`
  width: 70%;
  max-width: 270px;
  font-weight: 500;
  padding-left: 0;
`