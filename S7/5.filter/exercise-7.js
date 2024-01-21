const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const addEvent = (event) => {
  console.log(event);
  const streamersRevisados = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(event.target.value.toLowerCase())
  );

  console.log(streamersRevisados);
};

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener("input", addEvent);
