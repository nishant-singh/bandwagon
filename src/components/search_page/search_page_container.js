import React from "react";

import SearchBox from "../search_box/search_box";
import SearchResults from "../search_results/search_results_container"
import Loading from "../loading/loading";
import style from "./search_page.scss";

function SearchPage () {
  return(
    <div className={style.container}>
      <SearchBox />
      <SearchResults />
      <Loading />
    </div>
  );
}

export default SearchPage;