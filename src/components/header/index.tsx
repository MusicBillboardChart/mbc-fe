import "../../App.css";
import Lp from "../../assets/LP.svg";
import { siteInfoStore } from "../../store/store";
import { fetchData } from "../../api/index";

interface HeaderProps {
  setSelectedSites: (site: string) => void;
}

const Header = ({setSelectedSites}:HeaderProps) => {
  const sites = [
    { value: "", label: "음원 차트를 골라주세요!" },
    { value: "youtube-music", label: "유튜브 뮤직" },
    { value: "youtube-music-global", label: "유튜브 뮤직(글로벌)" },
    { value: "genie", label: "지니뮤직" },
    { value: "bugs", label: "벅스뮤직" },
    { value: "vibe", label: "바이브" },
  ];

  const { selectedSite, setSelectedSite } = siteInfoStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSite(event.target.value);
    fetchData();
    setSelectedSites(event.target.value)
  };

  return (
    <header>
      <img src={Lp} alt="Logo" className="logo" />
      <select value={selectedSite} onChange={handleChange} id="musicSite">
        {sites.map((site, idx) => (
          <option key={idx} value={site.value}>
            {site.label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;