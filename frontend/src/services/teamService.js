const getTeam = async () => {
  try {
    const response = await fetch("/Data/teamData.json");

    if (!response.ok) {
      throw new Error("دریافت اطلاعات تیم ناموفق بود");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export default getTeam;
