"use client";
import Spinner from "@/components/CommonLayout/Spinner";
import Login from "@/components/Login/Login";
import { context } from "@/lib/context";
import { useRouter } from "next/navigation";
import { Suspense, useContext, useEffect } from "react";

export default function Home() {
  const { isLogged } = useContext(context);
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push("/dashboard");
    }
  }, []);
  return (
    <main className="flex h-full items-center justify-center">
      <Suspense fallback={<Spinner />}>
        <Login />
      </Suspense>
    </main>
  );
}
