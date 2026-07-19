const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    await prisma.userType.createMany({
        data: [
            {
                name: "Administrador"
            },
            {
                name: "Cliente"
            }
        ],
        skipDuplicates: true
    });

    console.log("Seed executada com sucesso!");
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });