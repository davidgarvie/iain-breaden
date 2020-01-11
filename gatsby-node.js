const path = require('path')

async function createPages({ graphql, actions }) {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`${__dirname}/src/templates/Page/Page.js`);
  const serviceTemplate = path.resolve(`${__dirname}/src/templates/Service/Service.js`);

  const data = await graphql(
    `
    query getAllPages {
      allContentfulPage {
        nodes {
          slug
        }
      }
      allContentfulService {
        nodes{
          slug
        }
      }
    }
    `
  )

  const { data: { allContentfulPage: { nodes: pages } }} = data;
  const { data: { allContentfulService: { nodes: services } }} = data;

  pages.map(page => {
    const { slug } = page;
    createPage({
      path: `/${slug}/`,
      component: pageTemplate,
      context: {
        slug
      }
    })
  })

  services.map(service => {
    const { slug } = service;
    createPage({
      path: `/services/${slug}/`,
      component: serviceTemplate,
      context: {
        slug
      }
    })
  })
}

exports.createPages = createPages;
