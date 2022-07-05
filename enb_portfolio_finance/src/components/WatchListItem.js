import React from "react";

const WatchListItem = ({ share, onClick }) => {

    const handleClick = () => {
        onClick(share)
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