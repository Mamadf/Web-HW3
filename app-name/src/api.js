
const API_BASE = "http://localhost:8080/api/drawings";

export async function saveDrawing(username, shapes) {
  const response = await fetch(`${API_BASE}/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ jsonContent: JSON.stringify(shapes) }) // stringify یک بار
  });

  if (!response.ok) {
    throw new Error("Failed to save drawing");
  }
}


export async function loadDrawing(username) {
  const response = await fetch(`${API_BASE}/${username}`);

  if (!response.ok) {
    throw new Error("Failed to load drawing");
  }

  const data = await response.json();
  return JSON.parse(data.jsonContent);  
}
