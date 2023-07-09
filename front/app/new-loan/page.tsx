"use client";
import NewLoanForm from "@/components/NewLoanForm";
import ReactScoreIndicator from "@/lib/react-score-indicator";
import { useViewport } from "@/lib/useViewport";
import { useEffect, useState } from "react";

const NewLoan = () => {
  const { width } = useViewport();
  return (
    <div className="w-full container flex flex-wrap-reverse justify-between px-40 align-top max-lg:flex-col-reverse max-lg:items-center max-lg:justify-center max-md:px-2">
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
    </div>
  );
};

export default NewLoan;
