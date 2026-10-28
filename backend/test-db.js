const prisma = require("./prisma");
async function testSchema() {
  try {
    const newUser = await prisma.user.create({
      data: { fullName: "کاربر تست", phone: "09120000000", password: "123" },
    });
    console.log("✅ عالی شد! فیلدهای جدید پریزما ۱۰۰٪ آپدیت شده‌اند:");
    console.log(newUser);
    await prisma.user.delete({ where: { id: newUser.id } });
    console.log("🧹 داده تست پاک شد.");
  } catch (error) {
    console.error("❌ اسکیما پریزما هنوز آپدیت نشده است! متن خطا:");
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
}
testSchema();
