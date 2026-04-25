import { redirect } from "next/navigation";

export default async function Home() {
  const session = undefined; // Your auth logic

  if (!session) {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}
