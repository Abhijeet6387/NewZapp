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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
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
              <small className="text-danger">
                <p>
                  {" "}
                  By {!author ? "Unknown" : author} on <br />
                  {new Date(date).toGMTString()}
                </p>
              </small>
            </p>
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
