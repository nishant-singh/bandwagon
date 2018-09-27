import React, { Component } from 'react';
import styles from'./App.scss';

import SearchPage from "../search_page/search_page_container";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <SearchPage />
      </div>
    );
  }
}

export default App;
