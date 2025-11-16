import React from 'react'
import img1 from '../assets/Featured/alt.png'
import img2 from '../assets/Featured/alt(1).png'
import img3 from '../assets/Featured/alt(2).png'
import img4 from '../assets/Featured/alt(3).png'
import img5 from '../assets/Featured/alt(4).png'
import img6 from '../assets/Featured/alt(5).png'
import img7 from '../assets/Featured/alt(6).png'
import img8 from '../assets/Featured/alt(7).png'
import img9 from '../assets/Featured/alt(8).png'
import img10 from '../assets/Featured/alt(9).png'

const Featured = () => {
    const categories = [
        { id: 1, img: img1, name: 'Cake & Milk' },
        { id: 2, img: img2, name: 'Organic Kiwi' },
        { id: 3, img: img3, name: 'Peach' },
        { id: 4, img: img4, name: 'Red Apple' },
        { id: 5, img: img5, name: 'Snacks' },
        { id: 6, img: img6, name: 'Vegetables' },
        { id: 7, img: img7, name: 'Strawberry' },
        { id: 8, img: img8, name: 'Black Plum' },
        { id: 9, img: img9, name: 'Custard Apple' },
        { id: 10, img: img10, name: 'Fast Food' },
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-5 container mx-auto gap-5 py-5'>
            {categories.map((category) => (
                <div 
                    key={category.id}
                    className='bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group'
                >
                    <div className='flex flex-col items-center text-center gap-3'>
                        <div className='w-20 h-20 flex items-center justify-center'>
                            <img 
                                src={category.img} 
                                alt={category.name} 
                                className='object-contain w-full h-full group-hover:scale-110 transition-transform duration-300'
                            />
                        </div>
                        <p className='text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors'>
                            {category.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Featured
