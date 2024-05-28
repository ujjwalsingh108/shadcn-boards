export async function fetchBoardData() {
  const response = await fetch(`https://demo6396395.mockable.io/bcf-boards`);
  if (!response) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export async function fetchPrompts() {
  const response = await fetch(`https://demo6396395.mockable.io/prompts`);
  if (!response) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}
