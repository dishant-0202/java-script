function getData(dataId, callback) {
  setTimeout(() => {
    console.log("data", dataId);
    callback();
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      console.log("All data fetched");
    });
  });
});
