import { useEffect, useState } from "react"
import { getGifGrid } from '../helpers/getGifGrid'


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {

        getGifGrid(category)
            .then(imgs => {
                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])

    return state;
}