"use server";

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";
import { requireUser } from "./utils/require-user";
import { companySchema } from "./utils/zod-schemas";
import { z } from "zod";

export async function createCompany(data: z.infer<typeof companySchema>) {
  const user = await requireUser();

  const validatedData = companySchema.parse(data);

  console.log(validatedData);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  return redirect("/");
}
