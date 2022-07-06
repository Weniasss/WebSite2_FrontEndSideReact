import React from 'react'
import ItemSteps from '../molecules/ItemSteps'
import StepsItem from '../molecules/StepsItem'

const StepSection = () => {
  return (
	<div className="2xl:container 2xl:mx-auto  px-20 py-10 ">
        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between ">
          <div className="w-6/12 bg-new bg-cover bg-center rounded-md opacity-95"/>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">

              <StepsItem 
                title="Create your task"
                text="It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout." 
                icon="faRightToBracket" 
              />

              <StepsItem 
                title="Sent your task on our website"
                text="It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout." 
                icon="faAnglesRigh" 
              />

              <StepsItem 
                title="Wait when your task complete"
                text="It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout." 
                icon="faClock" 
              />

            </div>
          </div>
        </div>
      </div>
  )
}

export default StepSection