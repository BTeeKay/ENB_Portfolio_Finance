import React from 'react';
import WatchListItem from './WatchListItem';


const WatchList = ({ watchList, onWlClick }) => {

    const watchingList = watchList.map((wshare, index) => {
        return <WatchListItem share={wshare} key={index} onWlClick={onWlClick} />
    })

    return (
        <>
            <div className='watch_list'>
                <h4>Watch List:</h4>

                <ul>
                    {watchingList}
                </ul>
            </div>
        </>
    )
}

export default WatchList;