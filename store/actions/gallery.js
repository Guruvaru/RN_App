import { FETCH_GALLERY_START, FETCH_GALLERY_SUCCESS } from "./actionTypes";

export function fetchGallery() {
  return async dispatch => {
    dispatch(fetchGalleryStart());
    fetch(
      "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
    )
      .then(res => res.json())
      .then(data => {
        dispatch(fetchGallerySuccess(data));
      });
  };
}

export function fetchGallerySuccess(data) {
  return {
    type: FETCH_GALLERY_SUCCESS,
    data
  };
}

export function fetchGalleryStart() {
  return {
    type: FETCH_GALLERY_START
  };
}
