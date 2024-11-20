import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import RankList from "./components/rankList";
export const MusicSiteName = React.createContext<string | null>(null);

function App() {
  const [selectedSite, setSelectedSite] = useState<string>("");
  return (
    <MusicSiteName.Provider value={selectedSite}>
      <div id="root">
        <Header setSelectedSites={setSelectedSite}/>
        <RankList siteNames={selectedSite}/>
      </div>
    </MusicSiteName.Provider>
  );
}

export default App;
