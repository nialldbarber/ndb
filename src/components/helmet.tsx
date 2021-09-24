import React from 'react';
import {Helmet} from 'react-helmet';

export default function Meta({title}: {title: string}) {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Front End Developer making the internets an awesome place."
      />
      <meta
        name="keywords"
        content="Niall Barber,Niall D Barber,HTML,CSS,JavaScript,Web Developer,React,js"
      />
      <title>{title}</title>
    </Helmet>
  );
}
