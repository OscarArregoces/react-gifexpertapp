import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [category, setCategory] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            
            <ol>
                {
                    category.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}



// <>
//     <AddCategory setCategory={setCategory} />
//     <hr />

//     <GifGrid category={category} />
// </>