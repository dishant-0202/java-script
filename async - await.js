function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function fetchData() {
  console.log("fatch data 1");
  await getData(1);
  console.log("fatch data 2");
  await getData(2);
  console.log("fatch data 3");
  await getData(3);
  console.log("All data fetched");
}

fetchData();
