import { useEffect, useState } from "react";
import { fetchData } from "../../api";

interface siteInfo {
  siteNames : string
}

const RankList = ({siteNames}:siteInfo) => {
  const [musicChart, setMusicChart] = useState<object | null>(null);
  useEffect(()=> {
    const getData = async () => {
    try {
        const result = await fetchData()
        setMusicChart(result)
        console.log(result);
      }
    catch(e) {
      console.error(e);
    }
  }
    getData();
  }, [siteNames])

  if (!musicChart) return null;

  if(siteNames === "") {
    return <center>어떤 음원차트를 보여드릴까요?</center>
  }

  return (
    <section className="musicChartSection">
      <ul>
      {Object.entries(musicChart).map(([value,key]) => (
        <li key={value}>{parseInt(value)+1}. {JSON.stringify(key).split(`"`)}</li>
        ))}
      </ul>
    </section>
  );
};

export default RankList;
