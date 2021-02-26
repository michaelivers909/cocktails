export const SET_SEARCH ="Set Search";

export function setSearch(results) {
    return{type: SET_SEARCH, search: results };
}