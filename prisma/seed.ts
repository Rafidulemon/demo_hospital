const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);

  await prisma.patient.create({
    data: {
      id: "mp00000001",
      name: "John Doe",
      mobile: "01712345678",
      email: "johndoe@example.com",
      gender: "MALE",
      age: 30,
      date_of_birth: new Date("1994-05-20"),
      password_hash: passwordHash,
    },
  });

  console.log("Patient seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
