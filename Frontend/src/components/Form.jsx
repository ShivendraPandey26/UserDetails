import React from 'react'

function Form() {
  return (
    <main className="text-white px-20 py-6 w-full">
    <div className=" pt-10">
      {/* top Header */}
      <h1 className="text-4xl text-pink-600 font-black">Bank Details</h1>
    </div>
    {/* Profile Details */}
    <div className="py-4 mt-10 max-w-4xl">
      {/* first line */}
      <div className="grid grid-cols-2 mt-2 gap-10 items-center place-items-start">
        <label className="rounded-sm px-3 py-2 text-xl">Bank Name :</label>
        <input
          type="text"
          value={"State bank Of India"}
          className="rounded-sm px-3 py-2 bg-slate-200 text-black"
        />
      </div>
      {/* second line */}
      <div className="grid grid-cols-2 mt-2 gap-10 items-center place-items-start">
        <label className="rounded-sm px-3 py-2 text-xl">
          Account Holder Name :
        </label>
        <input
          type="text"
          value={"test"}
          className="rounded-sm px-3 py-2 bg-slate-200 text-black"
        />
      </div>
      {/* third line */}
      <div className="grid grid-cols-2 mt-2 gap-10 items-center place-items-start">
        <label className="rounded-sm px-3 py-2 text-xl">
          Account Number :
        </label>
        <input
          type="text"
          value={"789658748596"}
          className="rounded-sm px-3 py-2 bg-slate-200 text-black"
        />
      </div>
      {/* Fourth line */}
      <div className="grid grid-cols-2 mt-2 gap-10 items-center place-items-start">
        <label className="rounded-sm px-3 py-2 text-xl">IFSC Code :</label>
        <input
          type="text"
          value={"SBIN00000"}
          className="rounded-sm px-3 py-2 bg-slate-200 text-black"
        />
      </div>
      {/* fifth line */}
      <div className="grid grid-cols-2 mt-2 gap-10 items-center place-items-start">
        <label className="rounded-sm px-3 py-2 text-xl">Branch Name :</label>
        <input
          type="text"
          value={"Test branch"}
          className="rounded-sm px-3 py-2 bg-slate-200 text-black"
        />
      </div>
      {/* sixth line */}
      <div className="grid grid-cols-2 mt-2 gap-10 items-center place-items-start">
        <label className="rounded-sm px-3 py-2 text-xl">UPI ID :</label>
        <input
          type="text"
          value={"7489632547@upi"}
          className="rounded-sm px-3 py-2 bg-slate-200 text-black"
        />
      </div>
    </div>
    <div className="flex ml-52">
      <button
        className="px-4 py-2 rounded-lg font-bold max-w-[200px] w-full bg-pink-600
      "
      >
        Save
      </button>
    </div>
  </main>
  )
}

export default Form