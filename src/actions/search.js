import actions from "./constants";

export const searchAction = payload => ({
    type: actions.SEARCH,
    payload
});
export const searchDone = payload => ({
    type: actions.SEARCH_COMPLETED,
    payload
});