export const gifApi = {
    async function getGifs() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=pNd73F2GiTlIEcEnhFBLj9s6WZboo1qp&tag=drunk&rating=pg`;
        let response = await fetch(url);
        let json = await response.json();
        let resGifs = json.data.images.original.url;
        console.log(json);
    
        setGif(resGifs);
      }
}