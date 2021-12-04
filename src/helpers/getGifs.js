export const getGift = async (category) => {
  const base = "https://api.giphy.com/v1";
  const key = "s78EhL8E0LubTAuzIRLXkoD6rpFDAaob";
  const url = `${base}/gifs/search?q=${encodeURI(
    category
  )}&limit=12&api_key=${key}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gift;
};
