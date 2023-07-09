import ReactScoreIndicator from "@/lib/react-score-indicator";

const Cards = () => {
  return (
    <div className="mx-auto mt-8 grid max-w-7xl grid-cols-3 gap-3 p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div className="flex h-[120px] items-center justify-between rounded-md border border-slate-50 bg-slate-300/30 p-3">
        <div className="flex flex-col gap-3">
          <h3 className="font-s font-semibold">Pagamentos</h3>
          <span className="text-sm">Total de Parcelas pagas</span>
        </div>
        <strong className="text-5xl max-lg:text-4xl max-sm:text-3xl">
          3/70
        </strong>
      </div>
      <div className="flex h-[120px] items-center justify-between rounded-md border border-slate-50 bg-slate-300/30 p-3 flex-wrap">
        <div className="flex flex-col gap-3">
          <h3 className="font-s font-semibold">Tatal pago</h3>
        </div>
        <strong className="text-5xl text-green-300  max-lg:text-4xl max-sm:text-3xl">
          R$ 100.00
        </strong>
      </div>
      <div className="h-[120px] rounded-md border border-slate-50 bg-slate-300/30 p-3 relative">
        <h3 className="font-s font-semibold absolute">Score</h3>
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
