import {Link} from 'gatsby';
import {Items, ListItem} from 'styles/components/navigation/home-nav-items';
import {navItems} from 'constants/theme';

export default function HomeNavItems() {
  return (
    <Items>
      {navItems
        .slice(1)
        .map(
          ({id, url, name, initial, animate, transition, exit, className}) => (
            <ListItem
              key={id}
              {...{
                initial,
                animate,
                transition,
                exit,
                className,
              }}
            >
              <Link to={url || ''} activeClassName="active">
                {name}
              </Link>
            </ListItem>
          )
        )}
    </Items>
  );
}
