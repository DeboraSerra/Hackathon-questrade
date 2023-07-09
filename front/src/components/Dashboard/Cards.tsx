"use client";
import { context } from "@/lib/context";
import ReactScoreIndicator from "@/lib/react-score-indicator";
import { useContext } from "react";

const Cards = () => {
  const {
    paymentInfo: { payedQuotas, totalPayed, totalQuotas },
  } = useContext(context);
  return (
    <div className="mx-auto mt-8 grid max-w-7xl grid-cols-3 gap-3 p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div className="flex h-[120px] items-center justify-between rounded-md border border-slate-50 bg-slate-300/30 p-3">
        <div className="flex flex-col gap-3">
          <h3 className="font-s font-semibold">Pagamentos</h3>
          <span className="text-sm">Total de Parcelas pagas</span>
        </div>
        <strong className="text-5xl max-lg:text-4xl max-sm:text-3xl">
          {`${payedQuotas}/${totalQuotas}`}
        </strong>
      </div>
      <div className="flex h-[120px] flex-wrap items-center justify-between rounded-md border border-slate-50 bg-slate-300/30 p-3">
        <div className="flex flex-col gap-3">
          <h3 className="font-s font-semibold">Total pago</h3>
        </div>
        <strong className="text-5xl text-green-300  max-lg:text-4xl max-sm:text-3xl">
          R$ {totalPayed.toFixed(2).replace('.',',')}
        </strong>
      </div>
      <div className="relative h-[120px] rounded-md border border-slate-50 bg-slate-300/30 p-3">
        <h3 className="font-s absolute font-semibold">Score</h3>
        <div className="flex h-full w-full items-center justify-center">
          <ReactScoreIndicator
            value={500}
            maxValue={1000}
            width={100}
            textStyle={{ left: "4px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
