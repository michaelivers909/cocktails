export const SET_SEARCH ="Set Search";
export const CLEAR_SEARCH="Clear Search";

export function setSearch(results) {
    return{type: SET_SEARCH, search: results };
}

export function clearSearch() {
    return {type: CLEAR_SEARCH};
}