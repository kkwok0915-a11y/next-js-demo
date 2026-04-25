import { redirect } from "next/navigation";

export default async function Home() {
  const session = undefined; // Your auth logic

  if (!session) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }
}
