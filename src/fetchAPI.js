const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(import.meta.env.PROD);
async function getPlayers() {
  const response = await fetch(`${BASE_URL}/players`);
  const data = await response.json();
  return getInfoPlayer(Object.values(data.data));
}

async function getBrackets() {
  const response = await fetch(`${BASE_URL}/brackets?populate=*`);
  const data = await response.json();
  const array = Object.values(data.data);
  return array.map((bracket) => {
    const object = {
      week: bracket.attributes.week,
      linkBracket: bracket.attributes.link_bracket,
      players: getInfoPlayer(bracket.attributes.players.data),
      mediumElo: calcMediumRating(bracket.attributes.players.data),
    };
    return object;
  });
}

const getInfoPlayer = (array) => {
  return array.map((el) => {
    return {
      id: el.id,
      name: el.attributes.name,
      elo: el.attributes.elo,
      victories: el.attributes.victories,
      defeats: el.attributes.defeats,
      non_shows: el.attributes.non_shows,
    };
  });
};
const calcMediumRating = (array) => {
  const sum = array.reduce((acc, cur) => acc + cur.attributes.elo, 0);
  return sum / array.length;
};

export { getPlayers, getBrackets, getInfoPlayer as default };
