import axios from "axios";
import { siteInfoStore } from "../store/store";

export const fetchData = async () => {
  const selectedSite = siteInfoStore.getState().selectedSite;
  const url: string = `http://localhost:3000/${selectedSite}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    console.log(url);
    
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};