import create from 'zustand';

type State = {
  homepage?: boolean;
  setHomepage?: () => void;
};

const useStore = create<State>((set) => ({
  homepage: false,
  setHomepage: () => set(() => ({homepage: true})),
}));

export default useStore;
