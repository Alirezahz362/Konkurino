const API_BASE_URL = "http://localhost:5000/api";
export const fetchClient = async (endpoint, options = {}) => {
  const user = JSON.parse(localStorage.getItem("user") || 'null');
  const token = user?.token;

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });
  if (!response.ok) {
    throw new Error(`خطای سرور :${response.status}`);
  }
  return await response.json();
};
