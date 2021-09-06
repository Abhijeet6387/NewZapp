import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    // setting state as props
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
