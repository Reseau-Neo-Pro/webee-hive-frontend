import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const body = await request.json();

  const { pseudo, email, image, hashedPassword, description, statusDispo } =
    body;

  const user = await prisma.user.create({
    data: {
      pseudo: pseudo,
      email: email,
      image: image,
      hashedPassword: hashedPassword,
      description: description,
      statusDispo: statusDispo,
      favoritesIds: [],
      recommendationIds: [],
      jobIds: [],
      projectIds: [],
      stacksIds: [],
    },
  });

  return NextResponse.json(user);
}
