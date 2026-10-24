import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
export const client = prismaClient;

export * from "@prisma/client";
 