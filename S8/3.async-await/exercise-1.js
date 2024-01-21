const espera = async () => {
  await new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
  console.log("Time out!");
};

espera();
