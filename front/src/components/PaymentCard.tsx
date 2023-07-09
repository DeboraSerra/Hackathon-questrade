import { NextPage } from "next";

interface Props {
  description: string;
  dueDate: Date | string;
  value: number;
  status: "pending" | "payed" | "expired" | "default";
}

const PaymentCard: NextPage<Props> = ({
  description,
  dueDate,
  status,
  value,
}) => {
  const statusColor = {
    pending: {
      card: "border-l-yellow-500",
      status: "bg-yellow-100"
    },
    payed: {
      card: "border-l-green-500",
      status: "bg-green-100"
    },
    expired: {
      card: "border-l-red-500",
      status: "bg-red-100"
    },
    default: {
      card: "border-l-slate-300",
      status: "bg-slate-100"
    },
  };

  const statusPtBr = {
    pending: "Pendente",
    payed: "Pago",
    expired: "Vencida",
    default: "A vencer",
  }
  return (
    <li
      className={`flex h-16 w-full items-center justify-between rounded-md border-l-4 ${statusColor[status].card} bg-slate-300/30 p-2 mb-3 max-sm:h-auto relative`}
    >
      <div className="mx-auto grid grid-cols-5 items-center justify-between gap-10 max-sm:flex max-sm:flex-wrap max-sm:p-2">
        <div className="flex justify-start">
          <span className="max-lg:text-sm max-sm:text-xs">{description}</span>
        </div>
        <div className="flex justify-center">
          <span className="max-lg:text-sm max-sm:text-xs">
            Vencimento:{" "}
            {new Date(dueDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            })}
          </span>
        </div>
        <div className="flex justify-center">
          <span className={`rounded-md ${statusColor[status].status} p-2 max-lg:text-sm max-sm:text-xs`}>{statusPtBr[status]}</span>
        </div>
        <div className="flex justify-center">
          <span className="max-lg:text-sm max-sm:text-xs">R$ {value.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="flex justify-end  max-sm:bottom-1 max-sm:right-1 max-sm:w-20">
          <button className="h-9 w-52 justify-end rounded-md bg-blue-400 text-white disabled:bg-blue-700 max-lg:text-sm max-sm:text-xs" disabled={status === 'payed'}>
            Marcar como pago
          </button>
        </div>
      </div>
    </li>
  );
};

export default PaymentCard;
