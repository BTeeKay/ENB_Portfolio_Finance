import React from "react";

const WatchListItem = ({ share, onWlClick }) => {

    const handleClick = () => {
        onWlClick(share)
    }

    return (
        <>
            <li>
                <h5 onClick={handleClick}>{share["companyName"]}</h5>
            </li>
        </>
    )
}

export default WatchListItem;