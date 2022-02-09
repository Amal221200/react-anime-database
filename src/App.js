import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {

  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getTopAnime = async () =>{
    // const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
    // const data = temp.json();
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    setTopAnime(temp.top.slice(0, 5));
  }

  useEffect(() => {
    getTopAnime();
  }, [])

  const handleSearch =  (e) =>{
    e.preventDefault();
    fetchAnime(search);
  }

  const fetchAnime = async (query) =>{
    setLoading(true);
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
                            .then(res => res.json());
    setLoading(false);
    SetAnimeList(temp.results);
  }

  
  // console.log(topAnime)
  return (
    <div>
      <Header />
      <div className="content-wrap">
          <SideBar topAnime={topAnime} />
          <MainContent search={search} setSearch={setSearch} handleSearch={handleSearch} animeList={animeList} loading={loading} />
      </div>
    </div>
  );
}

export default App;
