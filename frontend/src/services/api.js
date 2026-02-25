const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export async function apiFetch(endpoint, options = {}) {
  const { headers: optionHeaders, ...restOptions } = options;
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...optionHeaders,
    },
    ...restOptions,
  });

  const data = await response.json();

  if (!response.ok) {
    throw { status: response.status, data };
  }

  return data;
}
