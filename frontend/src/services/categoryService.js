const getCategories = async () => {
  try {
    const response = await fetch("/Data/categoryData.json");

    if (!response.ok) {
      throw new Error("دریافت رشته ها ناموفق بود");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export default getCategories;
