/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Helmet from 'react-helmet';
import { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/common';
import {
  FaqHero,
  ControlPanel,
  QuestionsList,
} from '../components/faq';

class FrequentlyAskedQuestions extends Component {
  state = {
    visibleQuestions: [],
    activeCategory: null,
    searchQuery: '',
    searchActive: false,
  };

  componentWillMount() {
    const {
      data: {
        page: {
          data: pageData,
        },
      },
    } = this.props;
    const {
      questions,
    } = pageData;
    this.setState({ visibleQuestions: questions });
  }

  setSearchHandler = (event) => {
    const { statusFilter } = this.state;
    const searchQuery = event.target.value.toLowerCase() || '';
    this.setState({ searchQuery });
    this.queryQuestions(statusFilter, searchQuery);
  }

  setCategoryHandler = (event, category) => {
    const { activeCategory, searchQuery } = this.state;
    if (event) event.preventDefault();
    if (category !== activeCategory) {
      this.setState({ activeCategory: category });
      this.queryQuestions(category, searchQuery);
    }
  }

  queryQuestions = (activeCategory, searchQuery) => {
    const {
      data: {
        page: {
          data: pageData,
        },
      },
    } = this.props;
    const {
      questions,
    } = pageData;
    let visibleQuestions = questions;
    if (searchQuery) {
      visibleQuestions = questions.filter((faqItem) => (
        faqItem.question.text.toLowerCase().includes(searchQuery)
      ));
    }
    if (activeCategory) {
      visibleQuestions = visibleQuestions.filter((faqItem) => {
        const thisCategory = faqItem.category.document[0].data.categoryName.text;
        return activeCategory === thisCategory;
      });
    }
    this.setState({ visibleQuestions });
  }

  searchFocusHandler = (event, clicked) => {
    event.preventDefault();
    this.setState({ searchActive: clicked });
  }

  render() {
    const {
      searchActive,
      visibleQuestions,
      activeCategory,
      searchQuery,
    } = this.state;
    const {
      data: {
        page: {
          data: pageData,
        },
      },
      location,
    } = this.props;
    const {
      pageTitle,
      heroSubtitle,
      questions,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    const bannerTitle = pageTitle && pageTitle.text ? pageTitle.text : 'Frequently Asked Questions';
    const bannerSubtitle = heroSubtitle && heroSubtitle.text ? heroSubtitle.text : 'You have questions, we have answers';
    const categories = questions.map(((faqItem) => faqItem.category.document[0].data.categoryName.text));
    const uniqueCategories = [...new Set(categories)];
    const faqSchemaData = questions && questions.length > 0 && questions.map((questionItem) => {
      const {
        question,
        answer,
      } = questionItem;
      return (
        {
          '@type': 'Question',
          name: question.text,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer.text,
          },
        }
      );
    });
    console.log('Faq Schema Data:', JSON.stringify(faqSchemaData));


    return (
      <Styled.root>
        <Layout
          location={location}
          seoData={seoData}
        >
          <Helmet>
            <script
              className="structured-data-list"
              type="application/ld+json"
            >
              {JSON.stringify(faqSchemaData)}
            </script>
          </Helmet>
          <FaqHero
            title={bannerTitle}
            subtitle={bannerSubtitle}
            location={location}
          />
          <ControlPanel
            activeCategory={activeCategory}
            uniqueCategories={uniqueCategories}
            setActiveCategoryHandler={this.setCategoryHandler}
            searchActive={searchActive}
            searchQuery={searchQuery}
            searchFocusHandler={this.searchFocusHandler}
            setSearchHandler={this.setSearchHandler}
            numResults={visibleQuestions.length}
          />
          <QuestionsList
            questions={visibleQuestions}
            location={location}
          />
        </Layout>
      </Styled.root>
    );
  }
}

export default FrequentlyAskedQuestions;

export const pageQuery = graphql`
query FrequentlyAskedQuestionsQuery {
  page: prismicFrequentlyAskedQuestions {
    uid,
    data {
      pageTitle: page_name {
        text
      }
      heroSubtitle: hero_subtitle {
        text
      }
      questions {
        question {
          text
        }
        answer {
          text
          html
        }
        category {
          document {
            ... on PrismicQuestionCategory {
              id
              data {
                categoryName: category_name {
                  text
                }
              }
            }
          }
        }
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
`;
