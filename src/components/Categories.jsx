import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="font-semibold text-xl sm:text-2xl text-primary mb-5">All Categories</h1>
      <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4">
        {categories.map(category => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="block text-lg sm:text-xl hover:bg-base-100 hover:shadow-md transition duration-300 font-medium text-gray-500 py-3 px-6 sm:px-10 rounded-lg"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
