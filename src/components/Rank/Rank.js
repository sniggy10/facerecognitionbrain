import React from 'react';
// import './Rank.css';

const Rank = ({name, entries}) => {
    return(
     <div>
        {`${name} , your current entry count is...`}
        <div className='white f1 '>
            {entries}
        </div>
    </div>
    );
}

export default Rank;