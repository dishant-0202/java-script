function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

console.log("fatch data 1");
getData(1)
  .then((res) => {
    console.log("fatch data 2");
    return getData(2);
  })
  .then((res) => {
    console.log("fatch data 3");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
