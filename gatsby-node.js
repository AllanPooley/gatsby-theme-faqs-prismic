// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise => promise.then((result) => {
  if (result.errors) throw result.errors;
  return result;
});


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const faqPageTemplate = require.resolve('./src/templates/faq.js');

  const faqPages = await wrapper(
    graphql(`
      {
        allPrismicFrequentlyAskedQuestions {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `),
  );

  const faqPageList = faqPages.data.allPrismicFrequentlyAskedQuestions.edges;

  /* ---------------------------------------------
  = Create an individual page for each Information page =
  ----------------------------------------------- */

  faqPageList.forEach((edge) => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}/`,
      component: faqPageTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });
};
