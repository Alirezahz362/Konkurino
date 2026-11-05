const API_URL = "http://localhost:5000/api/categories";

export const getCategories = async () => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn(
      "دریافت دسته‌بندی‌ها با خطا مواجه شد، بارگذاری مقادیر پیش‌فرض",
    );
  }

  return [
    { id: 1, title: "زیست‌شناسی", slug: "biology", count: 12 },
    { id: 2, title: "ریاضی و حسابان", slug: "math", count: 15 },
    { id: 3, title: "فیزیک", slug: "physics", count: 10 },
    { id: 4, title: "شیمی", slug: "chemistry", count: 8 },
  ];
};

export const categoryService = {
  getCategories,
};

export default categoryService;
