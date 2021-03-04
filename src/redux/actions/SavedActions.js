export const ADD_SAVED = "Add Saved";
export const DELETE_SAVED = "Delete Saved";

export function addSaved(gif, drink) {
  return { type: ADD_SAVED, saved: drink, gif: gif };
}

export function deleteSaved(id) {
  return { type: DELETE_SAVED, id: id };
}
