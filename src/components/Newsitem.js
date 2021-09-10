import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    // setting state as props
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{
            // borderStyle: "solid",
            boxShadow: " 8px 8px 15px 0px rgba(0,0,0,0.09)",
          }}
        >
          <img
            src={!imageUrl ? "unavailable.jpg" : imageUrl}
            className="card-img-top"
            // style={{ width: "100%", height: "13vw", objectFit: "cover" }}
            style={{ height: "13rem", width: "100%", objectFit: "cover" }}
            alt="..."
          />
          <div
            className="card-header"
            style={{
              backgroundColor: "#333333",
              color: "white",
              // opacity: "0.6",
            }}
          >
            <h6>{title}...</h6>
          </div>
          <div className="card-body" style={{ color: "#000000" }}>
            {/* <h5 className="card-title">{title}...</h5>
            <hr /> */}
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <span className="badge mb-3">
              <i style={{ color: "gray" }}>-{source}</i>
            </span>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-dark"
              style={{ display: "block" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
