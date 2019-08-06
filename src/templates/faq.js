import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


class LegalPageTemplate extends Component {
  state = {
    sectionsInView: [],
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata: {
            homePath = '/',
            siteName,
          },
        },
        page: {
          data: pageData,
        },
      }
    } = this.props
    const {
      pageTitle,
      sections,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    }
    return (
      <Styled.root>
        <Layout
          siteName={siteName}
          title={pageTitle.text}
          seoData={seoData}
        >
          Frequently Asked Questions!
        </Layout>
      </Styled.root>
    )
  }
}

export default LegalPageTemplate

export const pageQuery = graphql`
  query FaqPageBySlug($uid: String!) {
    site {
      siteMetadata {
        siteName,
        homePath,
      }
    },
    page: prismicFrequentlyAskedQuestions(uid: { eq: $uid }) {
      data {
        pageTitle: page_name {
          text
        }
        metaTitle: meta_title {
          html
          text
        },
        metaDescription: meta_description {
          html
          text
        },
        openGraphImage: open_graph_image {
          alt
          copyright
          url
        }
      }
    }
  }
`
