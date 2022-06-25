import {Helmet} from 'react-helmet';

export default function Meta({title}: {title: string}) {
  return (
    <Helmet htmlAttributes={{lang: 'en'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Hey! I'm a Software Engineer based in the U.K. specialising in front-end projects"
      />
      <meta
        name="keywords"
        content="Niall Barber,Niall D Barber,HTML,CSS,JavaScript,Web Developer,React,js"
      />
      <title>{title}</title>
    </Helmet>
  );
}
