"use server";

import { redirect } from "next/navigation";

export const searchAction = (formAction) => {
  const name = formAction.get("name") as string;
  console.log(name);
  if (name) {
    redirect(`/list?name=${name}`);
  }
};
