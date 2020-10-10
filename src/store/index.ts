import create from 'zustand';

type State = {
  homepage?: boolean;
  setHomepage?: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const useStore = create<State>((set) => ({
  homepage: false,
  setHomepage: () => set(() => ({homepage: true})),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({isMenuOpen: !state.isMenuOpen})),
  closeMenu: () => set(() => ({isMenuOpen: false})),
}));

export default useStore;
