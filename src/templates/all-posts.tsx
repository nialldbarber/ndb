import React, {FC, useState} from 'react';
import {graphql, Link} from 'gatsby';
import {motion} from 'framer-motion';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Badge from 'components/badge';
import {list, height} from 'utils/framer';
import {
  Grid,
  Card,
  BadgeContainer,
  BadgeSelectContainer,
} from 'styles/templates/all-posts';

interface PostProps {
  pageContext: any;
  data: any;
}

// Dots
const start = {
  visible: {
    x: -300,
    y: -350,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
    scale: 6,
  },
  hidden: {
    y: -height,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
  exit: {
    y: height,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
};

const middle = {
  ...start,
  visible: {
    x: -338,
    y: 100,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.4,
    },
    scale: 2,
  },
};
const end = {
  ...start,
  visible: {
    x: 350,
    y: 100,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.5,
    },
    scale: 4,
  },
};

const AllPosts: FC<PostProps> = ({pageContext, data}) => {
  const [selectedTag, setSelectedTag] = useState('all');

  const {currentPage, numPages} = pageContext;
  const isFirst: boolean = currentPage === 1;
  const isLast: boolean = currentPage === numPages;
  const prevPage: string = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
  const nextPage: string = `/${currentPage + 1}`;
  const posts = data.allMdx.edges;

  // filter posts by post tag selected

  return (
    <Wrapper>
      <>
        <motion.div
          variants={list}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{marginBottom: -200}}
        >
          <PageLayout title="blog">
            <p>Get your thinking hat on and search a topic!</p>
            <p>The selected tag is {selectedTag || ''}</p>
          </PageLayout>
        </motion.div>

        <BadgeSelectContainer>
          {posts.map((post) => {
            const {tags} = post.node.frontmatter;

            return tags.map((tag, i) => (
              <>
                <Badge
                  key={i * 10}
                  text={tag}
                  action={() => setSelectedTag(tag)}
                />
              </>
            ));
          })}
        </BadgeSelectContainer>

        <Grid>
          {posts.map((post) => {
            const {slug, title, excerpt, tags} = post.node.frontmatter;

            return (
              <Link key={slug} to={`/${slug}`}>
                <Card key={slug}>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <BadgeContainer>
                    {tags.map((tag, i) => (
                      <Badge key={i} text={tag} />
                    ))}
                  </BadgeContainer>
                </Card>
              </Link>
            );
          })}
        </Grid>
        <Dots start={start} middle={middle} end={end} />
      </>
    </Wrapper>
  );
};

export const pageQuery = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            excerpt
            tags
          }
          id
        }
      }
    }
  }
`;

export default AllPosts;
