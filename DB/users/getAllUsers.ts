import prisma from "@/lib/prisma/prismadb";

export default async function getAllUsers({ orderBy }: { orderBy: string }) {
  try {
    const users = await prisma.user.findMany();
    const safeUsers = users.map((user) => ({
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    }));

    return safeUsers;
  } catch (error: any) {
    throw new Error(error);
  }
}
