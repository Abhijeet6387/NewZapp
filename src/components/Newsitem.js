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
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          <img
            src={!imageUrl ? "unavailable.jpg" : imageUrl}
            className="card-img-top"
            style={{ width: "100%", height: "13vw", objectFit: "cover" }}
            alt="..."
          />
          <div
            class="card-header"
            style={{
              backgroundColor: "#333333",
              color: "white",
              // opacity: "0.6",
            }}
          >
            <h6>{title}...</h6>
          </div>
          <div
            className="card-body"
            style={{ backgroundColor: "lightgrey", color: "#000000" }}
          >
            {/* <h5 className="card-title">{title}...</h5>
            <hr /> */}
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "Unknown" : author} on{" "}
                <p>{new Date(date).toGMTString()}</p>
              </small>
            </p>
            <span class="badge mb-3">
              <i style={{ color: "gray" }}>-{source}</i>
            </span>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-dark"
              style={{ display: "block" }}
              onMouseOver=""
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
