import Link from "next/link";
import { GiMoneyStack } from "react-icons/gi";

const EmptyPayments = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-10">
      <GiMoneyStack className="text-6xl text-green-600" />
      <p>Você ainda não pegou empréstimo conosco!</p>
      <Link
        href="/new-loan"
        className="rounded-md bg-green-600 px-6 py-2.5 text-center font-sans text-sm font-semibold text-white"
      >
        Peça seu empréstimo agora!
      </Link>
    </div>
  );
};

export default EmptyPayments;
