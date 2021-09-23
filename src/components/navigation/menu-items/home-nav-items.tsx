import React from 'react';
import {Link} from 'gatsby';
import {Items, ListItem} from 'styles/components/navigation/home-nav-items';

function HomeNavItems() {
  return (
    <Items>
      {/* bottom left */}
      <ListItem
        initial={{x: -200}}
        animate={{x: 0}}
        transition={{delay: 0.2}}
        exit={{x: -200}}
        className="bottom-left"
      >
        <Link to="/about" activeClassName="active">
          about
        </Link>
      </ListItem>
      {/* bottom right */}
      <ListItem
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{delay: 0.2}}
        exit={{x: 200}}
        className="bottom-right"
      >
        <Link to="/contact" activeClassName="active">
          contact
        </Link>
      </ListItem>
      {/* top right */}
      {/* <ListItem
        initial={{x: 200}}
        animate={{x: 0}}
        transition={{delay: 0.2}}
        exit={{x: 200}}
        className="top-right"
      >
        <Link to="/all-posts" activeClassName="active">
          blog
        </Link>
      </ListItem> */}
    </Items>
  );
}

export default HomeNavItems;
