function fetchDataWithCallback(callback) {
  let error = false; 

  try {
    if (error) {
      throw new Error("Fetch failed");
    }

    setTimeout(() => {
      callback("Data fetched");
    }, 2000);

  } catch (err) {
    console.error(err.message);
  }
}

fetchDataWithCallback(function(result) {
  console.log(result);
});
