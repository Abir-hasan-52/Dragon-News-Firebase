import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './newsCard';

const CategoryNews = () => {
    const {id} =useParams();
    const data=useLoaderData();
     
        // console.log(id,data);
        const [categoryNews, setCategoryNews]=useState([]);
        useEffect(()=>{

            if(id=='0'){
                setCategoryNews(data);
                return;
            }
            else if(id=='1'){
                const filteredData= data.filter(news=>news.others.is_today_pick==true);
                setCategoryNews(filteredData);
            }

            else{
                 const filteredData= data.filter(news=>news.category_id==id);
            // console.log(filteredData);
            setCategoryNews(filteredData)
            }
        },[data,id])

    return (
         
        <div>
              <h1 className='font-bold mt-5'>total <span className='text-secondary'>{categoryNews.length}</span> news in this category</h1>

              <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
              </div>
        </div>
    );
};

export default CategoryNews;