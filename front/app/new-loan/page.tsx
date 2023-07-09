"use client";
import Spinner from "@/components/CommonLayout/Spinner";
import NewLoanForm from "@/components/NewLoanForm";
import { context } from "@/lib/context";
import ReactScoreIndicator from "@/lib/react-score-indicator";
import { useViewport } from "@/lib/useViewport";
import { useRouter } from "next/navigation";
import { Suspense, useContext, useEffect } from "react";

const NewLoan = () => {
  const { width } = useViewport();
  const { isLogged } = useContext(context);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, []);
  return (
    <div className="container flex w-full flex-wrap-reverse justify-between px-40 align-top max-lg:flex-col-reverse max-lg:items-center max-lg:justify-center max-md:px-2">
      <Suspense fallback={<Spinner />}>
        <NewLoanForm />
        <div className="mt-20 flex flex-col items-center">
          <h2 className="mb-5 text-center text-3xl font-bold">Seu Score</h2>
          <ReactScoreIndicator
            value={750}
            maxValue={1000}
            lineWidth={16}
            width={200}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default NewLoan;
