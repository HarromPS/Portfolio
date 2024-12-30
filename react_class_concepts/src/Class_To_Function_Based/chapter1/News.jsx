import React, { useEffect, useState } from 'react';
import NewsItem from "./NewsItem";
import Loader from "./Loading";
import PropTypes from 'prop-types';

// import to do the infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // use States
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [top, setTop] = useState("")
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {

    props.setProgress(10);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page}&pageSize=${props.pageSize}`);

    // loading until data is fetched
    setLoading(true);
    let parsedData = await data.json();

    // loading finish when data is fetched
    setArticles(parsedData.articles);
    setLoading(false);
    setTop(props.category[0].toUpperCase() + props.category.slice(1));
    props.setProgress(100);
  }

  // componentDidMount = useEffect
  useEffect(() => {
    updateNews();
    // enlist-disable-next-line
  }, []);
  // put the above comment to dependency warning go


  const handlePrevFunction = async () => {
    if (!(page - 1 < 1)) {
      // best way of updating the page variable is using await syntax
      await setPage(page - 1);
      updateNews();
    }

  }
  const handleNextFunction = async () => {

    if (!(page + 1 > Math.floor(totalResults / props.pageSize))) {
      await setPage(page + 1);
      updateNews();
    }
  }

  const fetchMoreData = async () => {

    // so the reason why continuous pages was there & hasMore function was failing ->
    // setPage is an async function
    // so update in url 1st the use useState
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API_KEY}&page=${page+1}&pageSize=${props.pageSize}`);
    let parsedData = await data.json();

    // Check this url to know the usage
    // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${props.API_KEY}&page=1

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setTop(props.category[0].toUpperCase() + props.category.slice(1));
    setPage(page + 1);
  }

  return (
    <>
      <div className="container my-3">
        <h2 className="text-center my-3">{`NewsMonkey - Top ${top} Headlines`}</h2>
        {loading && <Loader />}
        {/* INFINITE SCROLL */}
        <InfiniteScroll
          pageStart={0}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={articles.length > totalResults?"":<Loader />}>
          <div className="row">
            {/* component to scroll */}
            {articles.map((element) => {
              return (
                <div key={element.urlToImage ? element.urlToImage : element.title} className="col-md-4 my-3">
                  <NewsItem title={element.title ? element.title.slice(0, 45) : "..."} description={element.description ? element.description.slice(0, 60) : "..."} imageUrl={element.urlToImage} url={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} color={props.color} />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

News.defaultProps = {   // uses these values when props are not received from parent component
  country: "in",
  category: "general",
  pageSize: 8
}

News.propTypes = {     // defining the datatypes of prototypes
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News