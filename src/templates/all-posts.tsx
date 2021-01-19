import React, {FC} from 'react';
import {graphql, Link} from 'gatsby';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import Badge from 'components/badge';
import {list, height} from 'utils/framer';
import {contentMargin} from 'styles/config/mixins';

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

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  ${contentMargin};
  max-width: ${({theme}) => theme.dimensions.maxWidth};
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 110px 1fr;
  height: 250px;
  padding: 1rem 1.5rem;
  background: ${({theme}) => theme.colors.darkerBlack};
  border-bottom-right-radius: 15px;
  color: ${({theme}) => theme.colors.white};
  transform: scale(1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  h3 {
    margin: 0;
    color: ${({theme}) => theme.colors.pink};
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const BadgeContainer = styled.div`
  align-self: center;
`;

const AllPosts: FC<PostProps> = ({pageContext, data}) => {
  const {currentPage, numPages} = pageContext;
  const isFirst: boolean = currentPage === 1;
  const isLast: boolean = currentPage === numPages;
  const prevPage: string = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
  const nextPage: string = `/${currentPage + 1}`;
  const posts = data.allMdx.edges;

  return (
    <Wrapper>
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={list}
        >
          <PageLayout title="blog">
            <>
              <p>Get your thinking hat on and search a topic!</p>
            </>
          </PageLayout>
        </motion.div>
        <Grid>
          {posts.map((post: any) => {
            const {slug, date, title, excerpt, tags} = post.node.frontmatter;

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
