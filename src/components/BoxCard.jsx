
import React, { useState } from 'react'


const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true);


    /* hidden je css, a show je gore true ?=true :=false */
    return (
        <div className={show ? "" : "hidden"}>
            <div className={`box ${result}`}>
                {children}
            </div>
            <button onClick={() => setShow(!show)} className='trigger'>Hide</button>
        </div>
    )
}

export default BoxCard
