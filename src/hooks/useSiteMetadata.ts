import {graphql, useStaticQuery} from 'gatsby';

export default function useSiteMetadata(): any {
  const {site} = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return site.siteMetadata;
}
