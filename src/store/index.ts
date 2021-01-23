import create from 'zustand';

type State = {
  homepage?: boolean;
  setHomepage?: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  error: boolean;
  success: boolean;
  showError: (error: boolean) => void;
  showSuccess: (success: boolean) => void;
  samePageToast: boolean;
  showSamePageToast: (samePageToast: boolean) => void;
};

const useStore = create<State>((set) => ({
  // Check if is homepage
  homepage: false,
  setHomepage: () => set(() => ({homepage: true})),
  // Menu state
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({isMenuOpen: !state.isMenuOpen})),
  closeMenu: () => set(() => ({isMenuOpen: false})),
  // Toast messages
  error: false,
  success: false,
  showError: (error) => set(() => ({error})),
  showSuccess: (success) => set(() => ({success})),
  // Same page message
  samePageToast: false,
  showSamePageToast: (samePageToast) => set(() => ({samePageToast})),
}));

export default useStore;
