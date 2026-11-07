import api from "./api";

export const getCourses = async (qureryParams = "") => {
  const endpoint = qureryParams ? `/courses?${qureryParams}` : "/courses";
  return await api.get(endpoint);
};
export const getCourseById = async (courseId) => {
  return await api.get(`/courses/${courseId}`);
};

export const getCategories = async () => {
  try {
    return await api.get("/categories");
  } catch (error) {
    console.warn(
      " به دلیل عدم دریافت از API استفاده از دسته بندی پیش فرض:",
      error.message,
    );
    return [
      { id: 1, title: "زیست‌شناسی", slug: "biology" },
      { id: 2, title: "ریاضیات", slug: "math" },
      { id: 3, title: "فیزیک", slug: "physics" },
      { id: 4, title: "شیمی", slug: "chemistry" },
    ];
  }
};

export const courseService = {
  getCourses,
  getCourseById,
  getCategories,
};

export default courseService;
