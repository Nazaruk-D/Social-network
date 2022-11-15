import React, {useEffect, useState} from 'react';
import s from "./Paginator.module.scss";
import MainButton from "../MainButton/MainButton";

type PaginatorPropsType = {
    totalItemsCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    portionSize: number
}

const Paginator: React.FC<PaginatorPropsType> = React.memo(({
                                                     totalItemsCount,
                                                     pageSize,
                                                     onPageChanged,
                                                     currentPage,
                                                     portionSize
                                                 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const choosePage = (p: number) => {
        console.log(portionNumber)
        // setPortionNumber(portionNumber)
        onPageChanged(p)
    }

    useEffect(()=>{
        setPortionNumber(portionNumber)
        console.log(portionNumber)
    },[])

    console.log("Paginator")

    return (
        <div className={s.paginatorBlock}>
            {portionNumber > 1 &&
                <MainButton onClick={() => setPortionNumber(portionNumber - 1)} nameButton={"previous"}/>
            }
            <div className={s.pages}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p, index) => <span key={index}
                                             className={currentPage === p ? s.selectedPage : s.page}
                                             // onClick={() => onPageChanged(p)}>{p}</span>)}
                                             onClick={()=>choosePage(p)}>{p}</span>)}
            </div>
            {portionCount > portionNumber &&
                <MainButton onClick={() => setPortionNumber(portionNumber + 1)} nameButton={"next"}/>
            }
        </div>
    );
});

export default Paginator;