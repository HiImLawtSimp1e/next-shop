"use server";

import { redirect } from "next/navigation";

export const searchAction = (formAction: FormData) => {
  const name = formAction.get("name") as string;
  if (typeof name === "string" && name.trim().length > 0) {
    redirect(`/list/search/${name}`);
  }
};
