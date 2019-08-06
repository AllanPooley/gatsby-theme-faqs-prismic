module.exports = ({
  prismicRepositoryName,
  prismicAccessToken,
  siteName = null,
  homePath = '/',
}) => ({
  siteMetadata: {
    homePath,
    siteName,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: prismicAccessToken,
        schemas: {
          frequently_asked_questions: require('./src/schemas/frequently-asked-questions.json'),
          question_category: require('./src/schemas/question-category.json'),
        },
      },
    },
  ],
})
