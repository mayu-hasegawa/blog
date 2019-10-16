import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query"
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import ColumnTitle from './ColumnTitle.js'

import pen from '../img/pen.png'
import heart from '../img/heart.png'
import interrest01 from '../img/interrest01.jpg'
import interrest02 from '../img/interrest02.jpg'

class Activity extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <List>
        <Block>
          <Content>
            <Icon src={pen} /><ColumnTitle title="BLOG" />
              {posts &&
                posts.map(({ node: post }) => (
                  <BlogLink key={post.fields.slug} to={post.fields.slug} >
                    <Date>{post.frontmatter.date}</Date>
                    <Title>{post.frontmatter.title}</Title>
                  </BlogLink>
                ))}
          </Content>
          <Content>
            <Icon src={heart} /><ColumnTitle title="INTERREST" />
            <Items>
              <Item>
                <Img src={interrest01} />
                <TextBold>食べ歩き、料理</TextBold>
              </Item>
              <Item>
                <Img src={interrest02} />
                <TextBold>ヨガ</TextBold>
              </Item>
            </Items>
          </Content>
        </Block>
      </List>           
    )
  }
}

Activity.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ActivityQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "YYYY.MM.DD")
                title
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Activity data={data} count={count} />}
  />
)

const List = styled.div`
  margin: 67px 0 86px;
`
const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  ${media.lessThan("medium")`
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
  ${media.lessThan("medium")`
    width: 100%;
    &:first-child {
      margin-bottom: 60px;
    }
  `}
  ${media.lessThan("small")`
    padding-left: 0;
  `}
`

const Icon = styled.img`
  width: 18px;
  height: 16px;
  position: absolute;
  left: 17px;
  top: 13px;
  ${media.lessThan("small")`
    left: 0;
  `}
`

const BlogLink = styled(props => <Link {...props} />)`
  display: block;
  width: 100%;
  color: #000000;
  margin-bottom: 15px;
  transition: 0.2s ease;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: rgba(239,117,190,0.3);
    transition: 0.2s ease;
  }
`

const Date = styled.div`
  width: 25%;
  margin-left: 25px;
  ${media.lessThan("medium")`
    width: 50%;
  `}
`

const Title = styled.div`
  padding: 20px 0 0 140px;
  margin: -36px 0 0;
  ${media.lessThan("medium")`
    padding: 0 0 20px 25px;
    margin: inherit;
  `}
`

const Items = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  ${media.lessThan("small")`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  `}
`

const Item = styled.div`
  width: 50%;
  text-align: center;
  ${media.lessThan("small")`
    width: 100%;
    &:first-child {
      margin-bottom: 60px;
    }
  `}
`

const Img = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`

const TextBold = styled.p`
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px
`