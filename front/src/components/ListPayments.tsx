const Payments = () => {
  return (
    <div className="max-w-7xl mx-auto items-center h-40 p-10">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Faturas</h1>
          <select name="" id="" className="w-[255px] rounded-md font-medium">
            <option value="">Filtrar</option> 
            <option value="">Faturas pagas</option>
            <option value="">Faturas pendentes</option>
            <option value="">Faturas atrasada</option>
          </select>
        </div>
        <div className="">
          <ul className="mt-6">
            <li className="flex w-full h-16 items-center justify-between p-2 bg-slate-300/30 border-l-4 border-l-yellow-500 rounded-md">
              <div className="mx-auto grid grid-cols-5 gap-10 justify-between items-center">
                <div className="flex justify-start">
                  <span>Parcela mensalidade de janeiro</span>   
                </div>
                <div className="flex justify-center">
                  <span>Vencimento: {`13/06/2022`}</span>   
                </div>           
                <div className="flex justify-center">
                  <span className="p-2 bg-yellow-100 rounded-md">Pendente</span>    
                </div>
                <div className="flex justify-center">
                  <span>R$ 6.000.00</span>
                </div>
                <div className="flex justify-end">
                  <button className="h-9 w-52 justify-end rounded-md bg-blue-400 text-white">Marcar como pago</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Payments;