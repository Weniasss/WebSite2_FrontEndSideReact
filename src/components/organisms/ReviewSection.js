import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ReviewItem from "../molecules/ReviewItem";
import ReviewService from "../../services/ReviewService";

const ReviewSection = () => {
  const [loading, setLoading] = useState(true);

  const [reviewExamples, setReviewExamples] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response2 = await ReviewService.getReviews();
        setReviewExamples(response2.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-24 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          {!loading && (
            <>
              {reviewExamples.map((review) => (
                <ReviewItem
                  text={review.userComment}
                  mark={review.userRating}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
