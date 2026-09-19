const getFeatured = async () => {
  try {
    const response = await fetch("/Data/featuredData.json");

    if (!response.ok) {
      throw new Error(`Featured request failed: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Featured service error:", err);

    throw err;
  }
};

export default getFeatured;
