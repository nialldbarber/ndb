const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async function ({actions, graphql}) {
  const {data} = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  // Create paginated pages for posts
  const postsPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage);

  Array.from({length: numPages}).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/all-posts' : `/all-posts/${i + 1}`,
      component: require.resolve('./src/templates/all-posts.tsx'),
      context: { 
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Creates single blog post
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/post.tsx'),
      context: {id},
    });
  });
};
