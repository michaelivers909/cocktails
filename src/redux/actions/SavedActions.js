export const ADD_SAVED = "Add Saved";
export const DELETE_SAVED = "Delete Saved";

export function addSaved(cocktail) {
  return { type: ADD_SAVED, saved: cocktail };
}

export function deleteSaved(id) {
  return { type: DELETE_SAVED, id: id };
}
