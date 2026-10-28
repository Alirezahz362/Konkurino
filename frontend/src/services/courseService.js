import { fetchClient } from "./api";
export const courseService = {
  getCategories: async () => {
    return await fetchClient("/categories");
  },
  getFeaturedCourses: async () => {
    return await fetchClient("/courses/featured");
  },
  getCoursesByFilter: async (field, subject) => {
    const query = new URLSearchParams();
    if (field) query.append("field", field);
    if (subject) query.append("subject", subject);
    return await fetchClient(`/courses?${query.toString()}`);
  },
  getCourseById : async (courseId) => {
    return await fetchClient(`/courses/${courseId}`)
  }
};
