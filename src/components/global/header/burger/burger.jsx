import React, { useContext, useEffect } from 'react'
import { navigationContext } from '../../../../context/navigationContext'

export default function Burger() {

    const { burger, setBurger } = useContext(navigationContext)

    console.log(burger)

    return (
        <button onClick={() => setBurger(!burger)} className={burger ? "burger px-0" : "burger close"}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}
