import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  // setting state using constructor
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }
  // componentdidmount is a life-cycle method runs after render
  // fetch api takes a url and returns a promise
  // async await can be used to wait until the promise returned is resolved and return data
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5262dcace9d64898a8f2fe210a13eee7";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h4>NewZapp - Top Headlines</h4>
        <div className="row">
          {/* to loop through articles */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  // .slice is used to restrict the length of title and description being displayed
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
