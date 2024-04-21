import "./News.css";
import React, { useEffect, useState } from 'react'
import Card from './Card'
import {useParams} from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroll-component';

function News({setProgress,apiKey}) {
    const [articles, setArticles] = useState([]);
    const {query} = useParams();
    const [page,setPage] = useState(1);

   
    const fetchMoreData = async() => {
        setPage(page+1);
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${apiKey}&page=${page}&pageSize=20`);
        const data = await response.json();
        setArticles(articles.concat(data.articles));
    };

    useEffect(() => {
            async function fetchData() {
                setProgress(10);
                const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${apiKey}&page=1&pageSize=20`);
                setProgress(40);
                const data = await response.json();
                setArticles(data.articles)
                setProgress(80);
            }
            fetchData();
            setProgress(100);
    },[query])


  return (
    <div className="news">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<100}
          loader={<h4>Loading...</h4>}
          style={{overflow:'hidden'}}
        >
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {articles && articles.map(article =>{
                if(article.urlToImage == null) return null;
                return (
                    <div className="col" key={articles.indexOf(article)} >
                        <Card title={article.title} image={article.urlToImage} body={article.description} url={article.url}/>
                    </div>
                )
            })}
                
        </div>
        </InfiniteScroll>
        
    </div>
  )
}

export default News