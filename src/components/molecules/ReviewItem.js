import React from 'react'
import ReviewMark from '../atoms/Reviews/ReviewMark'
import ReviewText from '../atoms/Reviews/ReviewText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = (props) => {
  return (
	<div class="p-4 md:w-1/3 w-full">
	<div class="h-full bg-gray-100 p-8 rounded">

	  <FontAwesomeIcon
		 className="mb-4 mr-4 text-4xl opacity-40"
		 icon={faComment}
	  />

	  <ReviewText
		 text={props.text}
	  />

	  <ReviewMark mark={props.mark} />
	</div>
 </div>
  )
}

export default ReviewItem