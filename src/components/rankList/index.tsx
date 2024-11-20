import { musicChartStore } from "../../store/store";

const RankList = () => {
  const { musicChartList } = musicChartStore();

  return (
    <section>
      <ol>
        {musicChartList.length > 0 ? (
          musicChartList.map((chart, idx) => <li key={idx}>{chart}</li>)
        ) : (
          <p>No charts available</p>
        )}
      </ol>
    </section>
  );
  
};

export default RankList;
