import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            pseudo: 'gertrude',
            email: 'gertudev@mail.com',
            favoritesIds: [],
            recommendationIds: [],
            jobIds: [],
            projectIds: [],
            stacksIds: [],
            Status: true,
        }
    })
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());