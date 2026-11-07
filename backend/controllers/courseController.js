const prisma = require("../prisma");

exports.getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        major: true,
        subject: true,
      },
    });
    res.json(courses);
  } catch (error) {
    console.error(" خطا در دریافت دوره ها از دیتابیس:", error.message);
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findUnique({
      where: { id: Number(id) || id },
      include: { major: true, subject: true },
    });
    if (!course) {
      return res.status(404).json({ message: "دوره مورد نظر یافت نشد." });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "خطایی در سرور رخ داده است." });
  }
};
