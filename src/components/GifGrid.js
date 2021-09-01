import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );


    return (
        <>
            <h3> {category}</h3>

            {loading && <h4 className="animate__animated animate__fadeOutDown ">Cargando imagenes...</h4>}

            <div className="car-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
