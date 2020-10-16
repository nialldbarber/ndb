import React, { FC } from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {motion} from 'framer-motion';
import PageLayout from 'components/layouts/page';
import Wrapper from 'components/layouts/wrapper';
import Dots from 'components/dots';
import {height, list} from 'utils/framer';

interface PostProps {
  data: any
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

const Post: FC<PostProps> = ({data}) => {
  const {title, excerpt} = data.mdx.frontmatter;
  // const featureImg = data.mdx.frontmatter.image.childImageSharp.fixed;

  return (
    <Wrapper>
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={list}
        >
          <PageLayout title={title} post>
            <h3>{excerpt}</h3>
          </PageLayout>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </motion.div>
        <Dots start={start} middle={middle} end={end} />
      </>
    </Wrapper>
  )
}

export const pageQuery = graphql`
    query SinglePost($id: String!) {
      mdx(id: {eq: $id}) {
      body
      frontmatter {
        date
        excerpt
        title
        slug
        # image {
        #   childImageSharp {
        #     fixed {
        #       ...GatsbyImageSharpFixed
        #     }
        #   }
        # }
      }
    }
  }
`;

export default Post;
