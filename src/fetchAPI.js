const baseURL = "http://localhost:1337/api";

export default async function getPlayers() {
  const response = await fetch(`${baseURL}/players`);
  const data = await response.json();
  return Object.values(data.data).map((el) => {
    console.log(el);
    return {
      id: el.id,
      name: el.attributes.name,
      elo: el.attributes.elo,
      victories: el.attributes.victories,
      defeats: el.attributes.defeats,
      non_shows: el.attributes.non_shows,
    };
  });
}
