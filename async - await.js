function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function fetchData() {
  await getData(1);
  await getData(2);
  await getData(3);
  console.log("All data fetched");
}

fetchData();
