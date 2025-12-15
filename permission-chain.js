function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

getData(1)
  .then(() => {
    return getData(2);
  })
  .then(() => {
    return getData(3);
  })
  .then(() => {
    console.log("All data fetched");
  });
