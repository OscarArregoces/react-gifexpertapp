



export const getGifGrid = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UQzfhgR7YjhEMAJQvgqTwtyYml2dgUmh`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifImg = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifImg);
    // console.log(images)
    return gifImg;

}