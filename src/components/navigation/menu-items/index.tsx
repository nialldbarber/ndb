import useStore from 'store';
import useMobileDetect from 'hooks/useMobileDetect';
import {classNames} from 'utils/classNames';
import SingleMenuItem from 'components/navigation/menu-items/single-menu-item';
import {List} from 'styles/components/navigation/menu-items';
import {navItems} from 'constants/theme';

const variants = {
  open: {
    opacity: 1,
    transition: {staggerChildren: 0.07, delayChildren: 0.3},
  },
  closed: {
    opacity: 0,
    transition: {staggerChildren: 0, staggerDirection: 0},
  },
};

export default function MenuItems() {
  const {isMenuOpen} = useStore();
  const {isMobile} = useMobileDetect();

  return (
    <List
      variants={variants}
      className={classNames(
        isMenuOpen ? 'open' : '',
        isMobile() ? 'mobile' : ''
      )}
    >
      {navItems.map(({id, url, name}) => (
        <SingleMenuItem key={id} url={url} name={name} styleType={name} />
      ))}
    </List>
  );
}
