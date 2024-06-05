export const getBcfBoards = async () => {
  const response = await fetch("https://demo6396395.mockable.io/bcf-boards", {
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const getPrompts = async () => {
  const response = await fetch("https://demo6396395.mockable.io/prompts", {
    method: "GET",
  });

  const data = await response.json();
  return data;
};
