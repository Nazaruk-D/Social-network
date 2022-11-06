import React, {useState} from 'react';
import s from "./Paginator.module.scss";

type PaginatorPropsType = {
    totalItemsCount: any
    currentPage: number
    pageSize: number
    onPageChanged: (page: number) => void
    portionSize: number
}

const Paginator: React.FC<PaginatorPropsType> = ({
                                                     totalItemsCount,
                                                     pageSize,
                                                     onPageChanged,
                                                     currentPage,
                                                     portionSize
                                                 }) => {
    // let portionSize = 10;
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginatorBlock}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}> Previous </button>}
            <div className={s.pages}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p, index) => <span key={index}
                                             className={currentPage === p ? s.selectedPage : s.page}
                                             onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}> Next </button>}

        </div>
    );
};

export default Paginator;