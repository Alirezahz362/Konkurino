const API_BASE_URL = "http://localhost:5000/api";

export const getCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/courses`);
  if (!response.ok) {
    throw new Error("خطا در دریافت لیست دوره‌ها از سرور");
  }
  return await response.json();
};

export const getCourseById = async (courseId) => {
  const response = await fetch(`${API_BASE_URL}/courses/${courseId}`);
  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات دوره");
  }
  return await response.json();
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn(
      "پاسخ از API دسته‌بندی‌ها دریافت نشد، استفاده از داده‌های پیش‌فرض.",
    );
  }

  return [
    { id: 1, title: "زیست‌شناسی", slug: "biology", count: 12 },
    { id: 2, title: "ریاضی و حسابان", slug: "math", count: 15 },
    { id: 3, title: "فیزیک", slug: "physics", count: 10 },
    { id: 4, title: "شیمی", slug: "chemistry", count: 8 },
  ];
};

export const courseService = {
  getCourses,
  getCourseById,
  getCategories,
};

export default courseService;
