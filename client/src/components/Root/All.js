import React from 'react';

const All = ({title, image, source, fullimage}) => {
    return(
        <div className='All'>
            <h1 className='Alltitle'>{title}</h1>
            <img className='Allimage' src={image} alt= ""/>
            <a href={source} target="_blank" rel="noopener noreferrer" ><h5>More info</h5></a>
            <a href={fullimage} target="_blank" rel="noopener noreferrer" ><h5>View Image in full Screen</h5></a>
        </div>
    );
}

export default All;
