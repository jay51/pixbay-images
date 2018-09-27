import { combineReducers } from "redux";
import { images } from "../constance";

const initState = { hits: [], done: false };

function imagesReducer(state = initState, action) {
	switch (action.type) {
		case images.FETCH_START:
			return state;

		case images.FETCH_SECUSSED:
			return { ...state, hits: [...action.payload], done: true };

		case images.FETCH_FAILD:
			return state;

		default:
			return state;
	}
}

export const rootReducer = combineReducers({ imgs: imagesReducer });
