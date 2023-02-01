function likePost(id) {
  console.log("Bhavik",id);
  fetch("/books/likes", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      reqbookId: id,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      //console.log(result)
      const newData = data.map((book) => {
        if (book._id == result._id) {
          return result;
        } else {
          return book;
        }
      });
      setData(newData);
    })
    .catch((err) => {
      console.log(err);
    });
}
