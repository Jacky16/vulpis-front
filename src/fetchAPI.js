// console.log(import.meta.env.PROD);
const BASE_URL = import.meta.env.VITE_BASE_URL;

async function getPlayers() {
  const response = await fetch(`${BASE_URL}/players`);
  const data = await response.json();
  let dataToSend = null;
  if (response.ok) dataToSend = getInfoPlayer(Object.values(data.data));

  return {
    data: dataToSend,
    res: response,
  };
}

async function getBrackets() {
  const response = await fetch(
    `${BASE_URL}/brackets?populate[player_list][populate]=*`
  );
  const data = await response.json();
  let bracketArray = Object.values(data.data);
  bracketArray = refactorBracketArray(bracketArray);
  return {
    data: bracketArray,
    res: response,
  };
}

const refactorBracketArray = (array) => {
  //Obtener array de todas las semanas
  array = array.map((el) => {
    const { week } = el.attributes;
    let { player_list } = el.attributes;
    //Obtenemos Array de los jugadores de cada semana de cada grupo de brackets
    player_list = player_list.map((bracket) => {
      let { id, link, players } = bracket;

      // Array de los jugadores de cada semana
      players = Object.values(players).map((player) => {
        const elo = calcMediumRating(player);
        const players = getInfoPlayer(player);
        return {
          players: players,
          mediumElo: elo,
        };
      });
      return {
        id: id,
        linkPlayer: link,
        playerList: players,
      };
    });
    return {
      week: week,
      playerList: player_list,
    };
  });

  return array;
};

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
  return Math.round(sum / array.length);
};

export { getPlayers, getBrackets, getInfoPlayer as default };
