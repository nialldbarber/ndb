import {MouseEvent} from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';
import useStore from 'store';
import {SingleItem} from 'styles/components/navigation/single-menu-item';
import {removeForwardSlash} from 'utils/config';
import {Items} from 'constants/theme';

interface SingleMenuItemProps extends Items {
  styleType?: string;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

export default function SingleMenuItem({
  url,
  name,
  styleType,
}: SingleMenuItemProps) {
  const {closeMenu, showSamePageToast} = useStore();
  const {pathname} = useLocation();
  const currentPath = removeForwardSlash(pathname);

  function handleClick(e: MouseEvent): void {
    const input = e.target as HTMLElement;
    if (currentPath === input.innerText) {
      showSamePageToast(true);
      setTimeout(() => {
        showSamePageToast(false);
      }, 2000);
    }
    closeMenu();
  }

  return (
    <SingleItem variants={variants} className={styleType}>
      <Link
        to={`${url === '/' ? '/' : `${url}/` || ''}`}
        activeClassName="active"
        onClick={(e) => handleClick(e)}
      >
        {name}
      </Link>
    </SingleItem>
  );
}
