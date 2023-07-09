import React from 'react'

const Cards = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-3 mt-8 p-6">
    <div className="h-[120px] flex justify-between p-3 items-center bg-slate-300/30 border border-slate-50 rounded-md">
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold font-s">Pagamentos</h3>
        <span className="text-sm">Total de Parcelas pagas</span>
      </div>
      <strong className="text-5xl">3/70</strong>
    </div>
    <div className="h-[120px] flex justify-between p-3 items-center bg-slate-300/30 border border-slate-50 rounded-md">
      <div className="flex flex-col gap-3">
          <h3 className="font-semibold font-s">Tatal pago</h3>
          <span className="text-sm">Valor total pago</span>
        </div>
        <strong className="text-5xl text-green-300">R$ 100.00</strong>
    </div>
    <div className="h-[120px] bg-slate-300/30 border border-slate-50 rounded-md">
      <h3>Score</h3>
    </div>
  </div>
  )
}

export default Cards;