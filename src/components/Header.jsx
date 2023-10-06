
import styled from 'styled-components'
import { useState } from 'react';
import React from 'react'
import bild from '../assets/coming-soon.jpg'

const Header = () => {
    const [count, setCount] = useState(0)


    function handleAdd() {
        setCount(count + 1);
    }

    function handleSub() {
        setCount(count - 1);
    }
    function handleReset() {
        setCount(0)
    }



    return (
        <div >

            <H1>Header</H1>
            {/* kako se slika dodaje */}
            <img src={bild} alt="React Image" width={100} height={100} />

            {/* usestate */}

            <div className="box">
                <p>{count}</p>
                <button onClick={handleAdd} className='add'>Add + </button>
                <button onClick={handleReset} className='reset'>Reset(0)</button>
                <button onClick={handleSub} className='sub'>Sub - </button>
            </div>

        </div>
    )
}


const H1 = styled.h1`
color: red;
font-size: 4rem;
`;

export default Header
