import React from 'react';
import WatchListItem from './WatchListItem';


const WatchList = ({ watchList, onClick }) => {

    const watchingList = watchList.map((wshare, index) => {
        return <WatchListItem share={wshare} key={index} onClick={onClick} />
    })

    return (
        <>
            <div className='watch-list'>
                <h2>Watch List:</h2>

                <ul>
                    {watchingList}
                </ul>
            </div>
        </>
    )
}

export default WatchList;