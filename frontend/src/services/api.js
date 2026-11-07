const BASE_URL = "http://localhost:5000/api";
export const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const token = localStorage.getItem("token");
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  if (config.body && typeof config.body === "object") {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);
    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    if (!response.ok) {
      const errorMessage =
        typeof data === "object" && data.message
          ? data.message
          : data || "خطایی در ارتباط با سرور رخ داده است.";
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error(
      `[API Error] ${options.method || "GET"} ${endpoint}:`,
      error.message,
    );
    throw error;
  }
};
export const api = {
  get: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: "GET" }),
  post: (endpoint, body, options = {}) =>
    request(endpoint, { ...options, method: "POST", body }),
  put: (endpoint, body, options = {}) =>
    request(endpoint, { ...options, method: "PUT", body }),
  delete: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: "DELETE" }),
};
export default api;