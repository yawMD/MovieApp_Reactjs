
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const CourseGoalItem =(props)=>{


    
    return(
        <div className="grid">
            <div className="cards">
            <div className="imageMovie">
            <img className="card-img-top" style={{width:'14rem'}} src={API_IMG+props.poster_path} />
            </div>
               <div className="Overview"><p>{props.overview}</p></div>
               <div className="title"><h3>{props.title}</h3></div>
            </div>
          </div>
    )
}

export default CourseGoalItem;