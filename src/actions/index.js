import { images } from "../constance";
import axios from "axios";

// TO BE USED WITH REDUX-THUNK
// export function fetchImages() {
// 	return dispatch => {
// 		axios
// 			.get("https://pixabay.com/api/?key=10010304-40393dc53945c9ee690c7ec04")
// 			.then(res => {
// 				dispatch({
// 					type: images.FETCH_START
// 				});
// 				// return res.json();
// 				return res;
// 			})
// 			.then(img => {
// 				dispatch({
// 					type: images.FETCH_SECUSSED,
// 					payload: img.data.hits
// 				});
// 			});
// 	};
// }

export function fetchImages(dispatch) {
	axios
		.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}`)
		.then(res => {
			dispatch({
				type: images.FETCH_START
			});
			return res;
		})
		.then(img => {
			dispatch({
				type: images.FETCH_SECUSSED,
				payload: img.data.hits
			});
		});
}
