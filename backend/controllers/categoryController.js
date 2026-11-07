const prisma = require("../prisma");

exports.getCategories = async (req, res) => {
  try {
    const categories = await prisma.major.findMany({
      include: {
        subject: true,
      },
    });
    const formattedCategories = categories.map((major) => ({
      id: major.id,
      title: major.title,
      slug: major.slug,
      icon: major.icon,
      subjects: major.subject || [],
    }));

    res.json(formattedCategories);
  } catch (error) {
    console.error("خطا در دریافت دسته‌بندی‌ها از دیتابیس:", error.message);
    res.status(500).json({ message: "خطایی در دریافت دسته‌بندی‌ها رخ داد." });
  }
};
