import axios from "axios";

const REVIEW_API_BASE_URL = "http://localhost:8080/api/v1/reviews";

class ReviewService {
	saveReview(review){
		return axios.post(REVIEW_API_BASE_URL,review);
	}

	getReviews(){
		return axios.get(REVIEW_API_BASE_URL);
	}

	deleteReview(id){
		return axios.delete(REVIEW_API_BASE_URL+"/"+id);
	}

	getReviewById(id){
		return axios.get(REVIEW_API_BASE_URL+"/"+id);
	}

	updateReview(review,id){
		return axios.put(REVIEW_API_BASE_URL + "/" + id , review);
	}
}
export default new ReviewService();