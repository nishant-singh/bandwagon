import React from "react";
import {connect} from "react-redux";

import loadingImage from "../../images/Loading.svg";

function Loading (props) {
  return (
    props.loading ?  <img src={loadingImage} alt="loading"/> : null
  );
}
const mapStateToProps = (state) => {
    return {
        loading: state.loading
    };
};
export default connect(mapStateToProps)(Loading);