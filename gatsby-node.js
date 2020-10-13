const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

async function makePostsFromMdx({graphql, actions}) {
  const blogPost = path.resolve('./src/pages/post.tsx');
  const {errors, data} = await graphql(
    `
      {
        allMdx(
          filter: {fields: {collection: {eq: "post"}}}
          sort: {fields: [frontmatter___date], order: DESC}
        ) {
          edges {
            node {
              body
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const posts = data.allMdx.edges;
  posts.forEach((post, i) => {
    const prev = posts[i - 1];
    const next = posts[i + 1];
    actions.createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        collection: 'post',
        prev,
        next,
        pathPrefix: '',
      },
    });
  });
}

async function paginate({graphql, actions, collection, pathPrefix, component}) {
  const {errors, data} = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const {totalCount} = data.allMdx;
  const pages = Math.ceil(totalCount / 10);

  Array.from({length: pages}).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      path: `${pathPrefix}${i + 1}`,
      component,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      },
    });
  });
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  await Promise.all([
    makePostsFromMdx({graphql, actions}),
    makeTipsFromMdx({graphql, actions}),
    paginate({
      graphql,
      actions,
      collection: 'post',
      pathPrefix: '/blog/',
      component: path.resolve('./src/pages/blog.js'),
    }),
  ]);
};
