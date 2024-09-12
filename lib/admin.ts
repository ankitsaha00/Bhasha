

import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2lNTE9S9o6ci2AXJgh5QOD188DR"]

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};