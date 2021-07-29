async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  console.log("response = ", response);

  const data = await response.json();
  console.log("Data = ", data);
}

getData();

async function postData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("response = ", response);

  const data = await response.json();
  console.log("Data = ", data);
}

postData();
