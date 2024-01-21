const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersRevisados = (event) => {
  const input = event.target.previousElementSibling;
  const streamers$$ = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(input.value.toLowerCase())
  );
  console.log(streamers$$);
};

const button = document.querySelector(
  '[data-function="toShowstreamersRevisados"]'
);

button.addEventListener("click", filterStreamers);
