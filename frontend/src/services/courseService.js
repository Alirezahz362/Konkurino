const getCourses = async () => {
  try {
    const response = await fetch("/Data/coursesData.json");

    if (!response.ok) {
      throw new Error("دریافت دوره ناموفق بود ");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
export default getCourses;
