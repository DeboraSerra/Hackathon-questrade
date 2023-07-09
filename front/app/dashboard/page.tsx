import Spinner from "@/components/CommonLayout/Spinner";
import { Suspense } from "react";
import Cards from "../../src/components/Dashboard/Cards";
import Payments from "../../src/components/Dashboard/ListPayments";

const Dashboard = () => {
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Cards />
        <Payments />
      </Suspense>
    </div>
  );
};

export default Dashboard;
