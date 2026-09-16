const getSubjects = async () => {
  try {
    const response = await fetch("/Data/subjectsData.json");

    if (!response.ok) {
      throw new Error("دریافت اطلاعات درس‌ها ناموفق بود");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export default getSubjects;
