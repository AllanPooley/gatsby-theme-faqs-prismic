import React, { Component } from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
} from '../components';
import {
  FaqHero,
  CategoryButtons,
  QuestionsList,
  SearchBar,
} from '../components/faq';
import './faq.scss';

class FrequentlyAskedQuestions extends Component {
  state = {
    visibleQuestions: [],
    activeCategory: null,
    searchQuery: '',
    searchActive: false,
  }

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

  setSearch = (event) => {
    const { statusFilter } = this.state;
    const searchQuery = event.target.value.toLowerCase() || '';
    this.setState({ searchQuery });
    this.queryQuestions(statusFilter, searchQuery);
  }

  setCategory = (event, category) => {
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
      visibleQuestions = questions.filter(faqItem => (
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
    const categories = questions.map((faqItem => faqItem.category.document[0].data.categoryName.text));
    const uniqueCategories = [...new Set(categories)];
    return (
      <Layout location={location} seoData={seoData}>
        <FaqHero />
        <SearchBar
          searchActive={searchActive}
          searchQuery={searchQuery}
          setSearch={this.setSearch}
          searchFocusHandler={this.searchFocusHandler}
        />
        <CategoryButtons
          activeCategory={activeCategory}
          categories={uniqueCategories}
          setActiveCategoryHandler={this.setCategory}
        />
        <QuestionsList
          questions={visibleQuestions}
        />
      </Layout>
    );
  }
}

export default FrequentlyAskedQuestions;

export const pageQuery = graphql`
query FrequentlyAskedQuestionsQuery {
  page: prismicFrequentlyAskedQuestions {
    uid,
    data {
      questions {
        question {
          text
        }
        answer {
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
