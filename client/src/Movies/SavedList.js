import React from 'react';
import {useHistory} from 'react-router-dom';

// const history = useHistory();

// const SavedList = props => (
//   <div className="saved-list">
//     <h3>Saved Movies:</h3>
//     {props.list.map(movie => (
//       <span className="saved-movie">{movie.title}</span>
//     ))}
//     <div onClick={} className="home-button">Home</div>
//   </div>
// );

// export default SavedList;


export default function SavedList(props){

  const history = useHistory()

  const routeToHome = () =>{
    history.push('/Movies')
  }



  return(
    <div className="saved-list">
        <h3>Saved Movies:</h3>
    {
        props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))
    }
  
        <div onClick={routeToHome} className="home-button">Home</div>
      </div>
  );
}