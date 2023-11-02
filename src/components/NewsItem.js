import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ border: '1px solid black', }} >
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className=" badge rounded-pill  bg-danger" >{source}</span>
        </div>
        <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/10/29/1600x900/ge70beb_1698551720781_1698551720964.jpg" : imageUrl}
          className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank " className="btn btn-sm btn-dark"> Read more</a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;