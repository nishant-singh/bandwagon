import React,{PureComponent} from "react";
import {connect} from 'react-redux';

import { searchAction } from "../../actions/search";
import styles from "./search_box.scss";
import search_icon from "../../images/search.svg";
import debounce from "../../utils/debounce";

class SearchBox extends PureComponent {
  constructor(props){
    super(props)
    this.search = debounce(this.props.searchArtist, 1000);
  }

  searchArtist = (e) => {
      this.search(e.target.value);
  }

  render(){
    return(
      <div className={styles.search_box_container}>
        <input type="search" 
          className={styles.search_input} 
          onChange={this.searchArtist.bind(this)}
          placeholder="Search for artists"
        />
        <img  
          src={search_icon} 
          alt="search" 
          className={styles.search_icon}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArtist: artist => {
      dispatch(searchAction({name: artist}))
    }
  }
}
export default connect(null, mapDispatchToProps)(SearchBox);