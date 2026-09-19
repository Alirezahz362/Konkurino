const getTestimonials = async () => {
  try {
    const response = await fetch("/Data/testimonialsData.json");
    if (!response.ok) {
      throw new Error("دریافت نظرات دانش‌آموزان با خطا مواجه شد");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export default getTestimonials;
