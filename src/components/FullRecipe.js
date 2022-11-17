import React from 'react';
import {useParams} from 'react-router-dom';
import useAppContext from './AppContext';

function FullRecipe() {
    const {recipe} =useParams();
    //const {fetchedData} = useAppContext();
    //console.log(fetchedData);
  
    //  fetch the data from contentful checks for an entry title that matches the {recipe} 
    // and display the full recipe
  return (
    <div>
        {/* <p>hello this is articls from contentful {fetchedData}</p> */}
       <p>{`Full recipe for ${recipe} will be displayed here`} </p>   
    </div>
  )
}

export default FullRecipe


// const MyVeryImportantComponent = () => {
//   const {fetchedData, otherStates} = useAppContext();

//   return //return your JSX structure here
// }


