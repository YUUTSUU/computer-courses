const postData = async (data) => {
  const url = "http://localhost:3000/requests";

  const res = await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json"
    }
  })

  return await res.json();
}

export default postData;