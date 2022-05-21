const apiKey = "ZIIFhd9IN5p2ezlKMxWvrqCf4TQ75A9s";

export default function getGifs({ Keyword = "morty" } = {}) {

  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${Keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        return gifs;
      }
    })
}
