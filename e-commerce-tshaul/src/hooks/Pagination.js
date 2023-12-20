import React, { useState } from 'react'

export const usePagination = (perPageRecords,totalPageRecords) => {

    const totalPages = Math.ceil(totalPageRecords / perPageRecords);

    const[startPageIndex,setStartPageIndex] = useState(0);
    const[endPageIndex,setEndPageIndex] = useState(perPageRecords-1);
    const[currentPageIndex,setCurrentPageIndex] = useState(1);

    //function 
    const displayPage = (pageNo) => {
        setCurrentPageIndex(pageNo);

        let startPageIndex = perPageRecords * pageNo  - perPageRecords;
        setStartPageIndex(startPageIndex);

        let endPageIndex = perPageRecords*pageNo -1;

        if(endPageIndex > totalPageRecords){
            setEndPageIndex(totalPageRecords-1)
        }else{
            setEndPageIndex(endPageIndex)
        }


    }

    return[totalPages
    ,startPageIndex
    ,endPageIndex
    ,currentPageIndex
    ,displayPage
    ]

}