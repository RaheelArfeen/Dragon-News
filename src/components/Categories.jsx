import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)

    return (
        <div>
            <h1 className='font-semibold text-xl text-primary'>All categories</h1>
            <div className='grid grid-cols-1'>
                {
                    categories.map(category => <NavLink key={category.id} className='text-xl hover:bg-base-100 hover:shadow-md transition duration-500 font-medium text-[#9f9f9f] py-4 mt-5 px-[80px] w-full rounded-lg' to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;