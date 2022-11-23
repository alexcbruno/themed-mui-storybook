const ANIMA_API_URL = "https://api.animaapp.com";

export const syncStorybook = async (token) => {
  if (!token) {
    throw new Error("No token in the query params");
  }
  await fetch(`${ANIMA_API_URL}/storybook/sample`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};

