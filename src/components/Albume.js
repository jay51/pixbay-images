import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchImages } from "../actions";
import { connect } from "react-redux";

export class Albume extends Component {
	componentDidMount = async () => {
		const { dispatch } = this.props;
		// TO BE USED WITH REDUX-THUNK
		// this.props.fetchImages();
		fetchImages(dispatch);
	};

	render() {
		const { images } = this.props;
		const photos = (
			<div>
				<div className="container">
					<div className="row">
						{images.hits.map(img => (
							<div key={img.id} className="col-lg-4">
								<img
									className="img-thumbnail"
									alt="dog images"
									src={img.webformatURL}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
		const loading = <h2>Loadding ....</h2>;

		return (
			<div className="container">
				<div className="row">{images.done ? photos : loading}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	images: state.imgs
});

// TO BE USED WITH REDUX-THUNK
// export default connect(
// 	mapStateToProps,
// 	{ fetchImages }
// )(Albume);

export default connect(mapStateToProps)(Albume);
