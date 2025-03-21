import { create } from "zustand";
import { TStores } from "@/types/types";

type TCommunitiesState = {
  data: TStores | undefined;
  setData: (posts: TStores | undefined) => void;
  isLoading: boolean;
  isError: boolean;
  setLoading: (isLoading: boolean) => void;
  setError: (isError: boolean) => void;
};

const useCommunityStore = create<TCommunitiesState>((set) => ({
  data: undefined,
  setData: (data) => set({ data }),
  isLoading: false,
  isError: false,
  setLoading: (isLoading) => set({ isLoading }),
  setError: (isError) => set({ isError }),
}));

export default useCommunityStore;
