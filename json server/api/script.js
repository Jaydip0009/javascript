const getvalue = (id) => {
  return document.getElementById(id).value;
};
const create = async (data) => {
  let req = await fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let res = await req.json();
};
const getdata = async () => {
  let req = await fetch("http://localhost:3000/post");
  let res = await req.json();
  console.log(res);
};
document.getElementById("post").addEventListener("submit", (e) => {
  e.preventDefault();
  let postdata = {
    title: getvalue("name"),
    password: getvalue("password"),
  };
  create(postdata);
});
getdata()