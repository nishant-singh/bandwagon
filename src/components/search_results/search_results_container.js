import React,{Component, Fragment} from "react";
import { connect } from "react-redux";

import ArtistProfile from "../artist/artist_profile";

class SearchResults extends Component {
  render(){
    return(
      <Fragment>
          <ArtistProfile artist={this.props.artist}/>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        artist: state.searchedArtist
    };
};
export default connect(mapStateToProps)(SearchResults);