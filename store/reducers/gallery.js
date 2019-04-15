import {
  FETCH_GALLERY_START,
  FETCH_GALLERY_SUCCESS
} from "../actions/actionTypes";
const initialState = {
  data: [],
  loading: false
};

export default function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GALLERY_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data:[...action.data]
      };
    default:
      return state;
  }
}
