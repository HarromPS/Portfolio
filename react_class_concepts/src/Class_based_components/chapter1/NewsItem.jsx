import React, { Component } from 'react';


export class NewsItem extends Component {
  render() {
    // Props in class based component
    // using destructuring
    let { title, description, imageUrl, url, author, date, source,color } = this.props;

    return (
      <>
        {/* <div>This is a NewsItem</div> */}
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2021/07/Travel-3-770x433.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className={`badge text-bg-${color}`}>{source}</span></h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {date}</small></p>
            <a rel="noreference" href={url} target="_blank" className={`btn btn-sm btn-${color}`}>Read More</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem