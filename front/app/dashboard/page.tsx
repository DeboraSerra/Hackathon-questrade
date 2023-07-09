import Cards from "../../src/components/Dashboard/Cards";
import Payments from "../../src/components/Dashboard/ListPayments";

const Dashboard = () => {
  return (
    <div className="container">
      <Cards />
      <Payments />
    </div>
  );
};

export default Dashboard;
