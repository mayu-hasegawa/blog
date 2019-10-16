import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Header>
          <TopLink to="/" >
            <StyledIcon icon={faAngleLeft} />
            <HeaderText>Mayu HASEGAWA</HeaderText>
          </TopLink>   
        </Header>
        <Article>
          <div>
            <Title>{post.frontmatter.title}</Title>
            <Date>{post.frontmatter.date}</Date>
          </div>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
      }
    }
  }
`

const Article = styled.article`
  width: 90%;
  max-width: 1200px;
  margin: 10% auto 5%;
`

const Header = styled.header`
  width: 100%;
  height: 65px;
  padding: 21px 18px 0 31px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`

const TopLink = styled(props => <Link {...props} />)`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  color: #515151;
`

const HeaderText = styled.p`
  font-size: 20px;
`

const Title = styled.h1`
  font-size: 48px;
`

const Date = styled.p`
  font-size: 24px;
  margin-top: 24px;
`

const Content = styled.section`
  font-size: 16px;
  line-height: 28px;
  margin: 35px 0 60px;
`

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  font-weight: 700;
  font-size: 24px;
  color: #EF75BE;
  margin-right: 23px;
`