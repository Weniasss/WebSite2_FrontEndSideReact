import React from 'react'

import CardTitle from '../../atoms/ProjectCards/CardTitle'
import CardText from '../../atoms/ProjectCards/CardText'
import CardButton from '../../atoms/ProjectCards/CardButton'

const CardItem = (props) => {
  return (
	<div class="flex justify-center mb-8 ">
	<div class="bg-white max-w-sm border-black border-dashed border-2">
	  <div class="p-6">
		 {/* <img className="shadow-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/> */}

		 <CardTitle title={props.title}/>
		  
		 <CardText text={props.text} description={props.description}/>


		 <CardButton id={props.id}/>
		 
	  </div>
	</div>
 </div>
  )
}

export default CardItem