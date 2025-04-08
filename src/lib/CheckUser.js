import { currentUser } from "@clerk/nextjs/server";
import prismadb from "./Prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  try {
    const userData = await prismadb.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (userData) {
      return userData;
    }

    const newUser = await prismadb.user.create({
      data: {
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName + " " + user.lastName,
        imageUrl: user.imageUrl,
        phone: user.phone || "",
      },
    });
    return newUser;
  } catch (error) {
    console.error("Please login to continue");
  }
};
