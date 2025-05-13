import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='space-y-5 px-4'>
             
            <img className='w-full h-[350px] object-cover rounded-2xl' src={news.image_url} alt="" />
            <h2 className='text-2xl font-semibold'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn btn-secondary ' to={`/category/${news.category_id}`}> <FaArrowLeft />
            All News in this Category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;