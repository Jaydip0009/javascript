const Url = "http://localhost:3000/users";
const allMethods = {
  create: async (data) => {
    await fetch(Url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};

export default allMethods;
