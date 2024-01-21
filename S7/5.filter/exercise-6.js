const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const LolsFiltrados = streamers.filter((streamer) => {
  const devuelvemelo = streamer.gameMorePlayed.toLowerCase().includes("legends");

  if (devuelvemelo && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }

  return toReturn;
});

console.log(LolsFiltrados);
