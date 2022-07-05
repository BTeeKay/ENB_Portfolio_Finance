import React, { useState, useContext } from 'react';
import PortfolioListItem from "./PortfolioListItem";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const PortfolioList = ({ portfolioShares }) => {

    const [selected, setSelected] = useState([]);
    const [position, setPosition] = useState(0);

    const portfolioNodes = portfolioShares.map(share => {
        return <PortfolioListItem
            itemId={share._id}
            key={share._id}
            share={share}
        />
    });

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) =>
        ({ getItemById, scrollToItem }) => {
            const itemSelected = isItemSelected(id);

            setSelected((currentSelected) =>
                itemSelected
                    ? currentSelected.filter((el) => el !== id)
                    : currentSelected.concat(id)
            );

        };

    // const LeftArrow = () => {
    //     const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    //     return (
    //         <LeftArrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}></LeftArrow>
    //     );
    // }

    // const RightArrow = () => {
    //     const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    //     return (
    //         <RightArrow disabled={isLastItemVisible} onClick={() => scrollNext}></RightArrow>
    //     )
    // }



    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <div className='scrollmenu'>
                {portfolioNodes}
            </div>
        </div>
    )
};

export default PortfolioList;