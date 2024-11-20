import { create } from "zustand";

export interface siteInfo {
  selectedSite: string;
  setSelectedSite: (selectedSite: string) => void;
}

export const siteInfoStore = create<siteInfo>((set) => ({
  selectedSite: "",
  setSelectedSite: (site: string) => set({ selectedSite: site }),
}));

