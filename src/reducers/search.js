import actions from "../actions/constants";

const SearchReducer = (state = {}, action) => {
  switch(action.type){
    //TODO create Action constant
    case actions.SEARCH_STARTED:
      return {
        loading: true
      };
    case actions.SEARCH_COMPLETED:
      return  {
        searchedArtist: action.payload,
        loading: false
      };
    case actions.ERROR_FETCHING_DATA:
      return {
        loading: false
      };
    default:
      return state;
  }
};

export default SearchReducer;