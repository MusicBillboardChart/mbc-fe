import axios from "axios";
import { musicChartStore, siteInfoStore } from "../store/store";


const selectedSite = siteInfoStore.getState().selectedSite;
const setMusicChartList = musicChartStore.getState().setMusicChartList;
const musicChartList = musicChartStore.getState().musicChartList;
export const fetchData = async () => {
  const url: string = `http://localhost:3000/${selectedSite}`;
  const options = {
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      name: "test",
    },
  };

  try {
    const response = await axios(options);
    setMusicChartList(response.data)
    console.log(musicChartList);
  } catch (error) {
    console.error("Error:", error);
  }
};