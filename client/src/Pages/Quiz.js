import React from "react";
import Questions from "../Components/Questions/Questions";
import { useParams} from "react-router-dom";


function Quiz () {
  const {id} = useParams();
  return (
    <div>
      <Questions topic={id}/>
    </div>
  )
}

export default Quiz;