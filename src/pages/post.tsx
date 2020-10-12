import React, {FC} from 'react';
import useSiteMetadata from 'hooks/useSiteMetadata';

const Post: FC = () => {
  const {title, description} = useSiteMetadata();
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Post;
