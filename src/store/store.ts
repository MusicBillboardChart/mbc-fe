import { create } from "zustand";

export interface siteInfo {
  selectedSite: string;
  setSelectedSite: (selectedSite: string) => void;
}

export interface musicChart {
  musicChartList: string[];
  setMusicChartList: (musicChartList: string[]) => void;
}

export const siteInfoStore = create<siteInfo>((set) => ({
  selectedSite: "",
  setSelectedSite: (site: string) => set({ selectedSite: site }),
}));

export const musicChartStore = create<musicChart>((set) => ({
  musicChartList: [],
  setMusicChartList: (musicChart: Array<string>) => set({ musicChartList: musicChart }),
}));

