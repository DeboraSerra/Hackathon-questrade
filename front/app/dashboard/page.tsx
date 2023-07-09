import Cards from "../../src/components/Cards"
import Payments from "../../src/components/ListPayments"

const Dashboard = () => {
  return (
    <div className="container">
      <Cards />
      <Payments />
    </div>
  )
}

export default Dashboard