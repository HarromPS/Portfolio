import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Loader from "./Loading";
import PropTypes from 'prop-types';

// import to do the infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

// import { json } from 'react-router-dom';

export class News extends Component {
  // static methods & Proptypes
  static defaultProps = {   // uses these values when props are not received from parent component
    country: "in",
    category: "general",
    pageSize: 8
  }

  // static proptypes
  static propTypes = {     // defining the datatypes of prototypes
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  // Constructor in class Based component
  constructor() {

    // Very important to call this super method
    super();

    // State in constructor
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      top: "",
      totalResults: 0
    }
  }

  async updateNews() {

    console.log(this.props.setProgress);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`);

    // loading until data is fetched
    this.setState({ loading: true });
    let parsedData = await data.json();

    // loading finish when data is fetched
    this.setState({
      articles: parsedData.articles,
      loading: false,
      top: this.props.category[0].toUpperCase() + this.props.category.slice(1)
    });
    this.props.setProgress(100);
  }

  // Using lifecycle method to change this.state

  // async-> waits for a promise to be returned
  async componentDidMount() {
    // This method runs after render method

    // loading until data is fetched
    // this.setState({ loading: true });
    // this.updateNews();

    this.props.setProgress(10);
    // fetching api
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=1`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();

    // Check this url to know the usage
    // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${this.props.API_KEY}&page=1

    this.setState(
      {
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        page: 1,
        top: this.props.category[0].toUpperCase() + this.props.category.slice(1)
      }
    )
    this.props.setProgress(100);
    // console.log(this.props.category[0].toUpperCase() + this.props.category.slice(1));
  }

  // this is an array of the class & is same as used above this.articles
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Janet Lee",
      "title": "Eating heart-healthy foods also helps lower your dementia risk - The Washington Post",
      "description": "Research suggests that two specific dietary approaches may help stave off cognitive decline.",
      "url": "https://www.washingtonpost.com/wellness/2023/09/18/diet-brain-health-preventing-alzheimers/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YAQT5XZYSD3G3CUDBSATUDQH54.jpg&w=1440",
      "publishedAt": "2023-09-18T18:10:30Z",
      "content": "Comment on this story\r\nComment\r\nConsumer Reports has no financial relationship with any advertisers on this site.\r\nDoing puzzles, playing memory-boosting games, taking classes and reading are activit… [+8535 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Michael Wayland",
      "title": "Stellantis could close 18 facilities under UAW deal — here are the full details of its latest offer - CNBC",
      "description": "The company made the latest offer Thursday, before the start of targeted strikes by the United Auto Workers Union against Stellantis, Ford and GM.",
      "url": "https://www.cnbc.com/2023/09/18/uaw-strike-stellantis-could-close-18-facilities-under-deal.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107301949-1694908758398-gettyimages-1668659646-DET1253.jpeg?v=1695060955&w=1920&h=1080",
      "publishedAt": "2023-09-18T18:05:40Z",
      "content": "United Auto Workers members attend a solidarity rally as the UAW strikes the Big Three automakers on September 15, 2023 in Detroit, Michigan.\r\nDETROIT The most recent contract proposal by automaker S… [+7409 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Tom Warren, Jay Peters",
      "title": "Microsoft's former Surface chief Panos Panay is reportedly heading to Amazon - The Verge",
      "description": "Panos Panay, the former head of Windows and Surface, is joining Amazon, Bloomberg reports. He’d replace Amazon’s former hardware boss in charge of Alexa and Echo, Dave Limp.",
      "url": "https://www.theverge.com/2023/9/18/23879036/microsoft-panos-panay-amazon-hire-former-surface-windows-chief",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/3R_M280tYi09QKtk573LRhiHFcU=/0x0:4774x3176/1200x628/filters:focal(2387x1588:2388x1589)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931924/1454311872.jpg",
      "publishedAt": "2023-09-18T17:39:45Z",
      "content": "Microsofts former Surface chief Panos Panay is reportedly heading to Amazon\r\nMicrosofts former Surface chief Panos Panay is reportedly heading to Amazon\r\n / The former Windows and Surface exec is exp… [+1487 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Daniella Genovese",
      "title": "Clorox warns of product shortages after cyberattack - Fox Business",
      "description": "Clorox is the latest company to disclose the details of a cyber attack it faced last month that hindered its operations and will impact its quarterly earnings.",
      "url": "https://www.foxbusiness.com/lifestyle/clorox-warns-product-shortages-after-cyberattack",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/09/0/0/Clorox.jpg?ve=1&tl=1",
      "publishedAt": "2023-09-18T17:25:39Z",
      "content": "Clorox warned Monday that the \"widescale\" cyberattack it endured last month is causing product availability issues and will have a material impact on its first-quarter earnings. \r\nThe California-base… [+3407 chars]"
    }
  ]


  handlePrevFunction = async () => {
    if (!(this.state.page - 1 < 1)) {
      // best way of updating the page variable is using await syntax
      await this.setState({
        page: this.state.page - 1
      });
      this.updateNews();
    }

  }
  handleNextFunction = async () => {

    if (!(this.state.page + 1 > Math.floor(this.state.totalResults / this.props.pageSize))) {
      await this.setState({
        page: this.state.page + 1
      });
      this.updateNews();
    }
  }

  fetchMoreData = async () => {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
    let parsedData = await data.json();

    // Check this url to know the usage
    // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${this.props.API_KEY}&page=1

    await this.setState(
      {
        articles: this.state.articles.concat(parsedData.articles),
        length: this.state.articles.length + this.state.length,
        totalResults: parsedData.totalResults,
        top: this.props.category[0].toUpperCase() + this.props.category.slice(1),
        page: this.state.page + 1
      }
    )
    // console.log(this.state.articles.length, this.state.totalResults);
  }
  // Runs after constructor method
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center my-3">{`NewsMonkey - Top ${this.state.top} Headlines`}</h2>


          {/* special syntax when rendering components using conditionals */}
          {this.state.loading && <Loader />}


          {/* INFINITE SCROLL */}
          <InfiniteScroll
            pageStart={0}
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.length !== this.state.totalResults}
            loader={<Loader />}>

            {/* below will be the item to scroll */}

            {/* using bootstrap to create row of news */}
            <div className="row">
              {/* col: column, md: mobile devices, 4: takes space of 4 columns, Here grid is of 12 columns size */}

              {/* returning a column data cell */}
              {/* when loading is false, then render the news */}

              {/* {!this.state.loading && this.state.articles.map((element) => {
              return (
                // every element of map function must be provided with a unique key for react to identify
                <div key={element.urlToImage} className="col-md-4 my-3">
                <NewsItem title={element.title ? element.title.slice(0, 45) : "..."} description={element.description ? element.description.slice(0, 60) : "..."} imageUrl={element.urlToImage} url={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} color={this.props.color} />
                </div>
                );
              })} */}

              {/* component to scroll */}
              {this.state.articles.map((element) => {
                return (
                  // every element of map function must be provided with a unique key for react to identify

                  <div key={element.urlToImage ? element.urlToImage : element.title} className="col-md-4 my-3">
                    {/* <h2 className="text-center my-3">{`${this.state.articles.length}, ${this.state.totalResults}`}</h2> */}
                    <NewsItem title={element.title ? element.title.slice(0, 45) : "..."} description={element.description ? element.description.slice(0, 60) : "..."} imageUrl={element.urlToImage} url={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} color={this.props.color} />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" id="prev" className={`btn btn-${this.props.color}`} onClick={this.handlePrevFunction}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.floor(this.state.totalResults / this.props.pageSize)} type="button" id="next" className={`btn btn-${this.props.color}`} onClick={this.handleNextFunction}>Next &rarr;</button>
        </div> */}

          {/* <div className="col-md-4 my-3">
            <NewsItem />
            </div>

          <div className="col-md-4 my-3">
          <NewsItem />
        </div> */}


          {/* Three columns of each row */}
          {/* <div className="row">
          <div className="col-md-4 my-3"><NewsItem /></div>
          <div className="col-md-4 my-3"><NewsItem /></div>
          <div className="col-md-4 my-3"><NewsItem /></div>

          </div>
          <div className="row">
          <div className="col-md-4 my-3"><NewsItem /></div>
          <div className="col-md-4 my-3"><NewsItem /></div>
          <div className="col-md-4 my-3"><NewsItem /></div>
        </div> */}
          {/* <NewsItem />
        <NewsItem />
      <NewsItem /> */}

        </div>
      </>

    )
  }
}

export default News