import useLockBodyScroll from 'hooks/useLockBodyScroll';
import {MenuBg} from 'styles/components/navigation/nav-background';

export default function NavBg({className}: {className: string}) {
  // useLockBodyScroll();
  return <MenuBg className={className} />;
}
