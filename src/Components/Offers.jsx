import React, { useEffect, useState } from 'react'

const Offers = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("/offers.json")
            .then(res => res.json())
            .then(json => setdata(json))
            .catch((err) => console.error("Error fetching offers:", err));
    },[])

  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto py-5">
        <p className="text-center text-gray-500">Loading offers...</p>
      </div>
    );
  }

  return (
    <div className='my-10 gap-5 container mx-auto grid grid-cols-1 lg:grid-cols-5'>
      {data.map((item) => (
        <div 
          key={item.id}
          className="shadow flex items-center justify-center gap-4 bg-gray-500/10 container mx-auto rounded p-5"
        >
            <img src={item.img} alt="" className="w-24 h-24 object-contain" />

            <div>
                <h2 className="font-semibold">{item.offer}</h2>
                <p className="text-gray-500">{item.details}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Offers
