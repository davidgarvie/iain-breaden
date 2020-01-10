const path = require('path')

async function createPages({ graphql, actions }) {
  const { createPage } = actions;
  const data = await graphql(
    `
    query getAllPages {
      allContentfulPage {
        nodes {
          name
          slug
        }
      }
    }
    `
  )

  const pageTemplate = path.resolve(`${__dirname}/src/templates/page.js`);
  
  data.data.allContentfulPage.nodes.map(page => {
    const { slug } = page;

    createPage({
      path: `/${slug}/`,
      component: pageTemplate,
      context: {
        slug: slug
      }
    })
  })
}

exports.createPages = createPages;
