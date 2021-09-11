// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

// export class News extends Component {
const News = (props) => {
  // setting state using constructor(class-based)
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 10,
  //   category: "general",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  News.defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  // using usestate hook to setup constuctor props
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState("false");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   articles: [],
  //   loading: false,
  //   page: 1,
  // };
  // document.title = `${
  //   this.props.category[0].toUpperCase() + this.props.category.slice(1)
  // } - NewZapp`;
  // this.props =>>> props(functional)
  // creating function to render next and previous pages
  // async updateNews() {
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    // }

    // componentdidmount is a life-cycle method runs after render
    // fetch api takes a url and returns a promise
    // async await can be used to wait until the promise returned is resolved and return data
    // useeffect will do the job for functional based component
  };
  useEffect(() => {
    updateNews();
  }, []);
  // async componentDidMount() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5262dcace9d64898a8f2fe210a13eee7&page=1&pageSize=${props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  //   this.updateNews();
  // }

  const handleNextClick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=5262dcace9d64898a8f2fe210a13eee7&page=${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
    // this.setState({ page: this.state.page + 1 });
    setPage(page + 1);
    // this.updateNews();
    updateNews();
  };

  const handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=5262dcace9d64898a8f2fe210a13eee7&page=${
    //   this.state.page - 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    // this.setState({ page: this.state.page - 1 });
    setPage(page - 1);
    // this.updateNews();
    updateNews();
  };

  // render() {
  return (
    <div className="container my-3">
      <h4
        className="text-center"
        style={{
          margin: "30px",
          textShadow: "2px 2px rgba(0,0,0,0.15)",
          marginTop: "90px",
        }}
      >
        NewZapp - Top Headlines (
        {props.category[0].toUpperCase() + props.category.slice(1)})
      </h4>
      {loading && <Spinner />}
      <div className="row">
        {/* to loop through articles */}
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsitem
                  // .slice is used to restrict the length of title and description being displayed
                  title={
                    element.title
                      ? element.title.slice(0, 48)
                      : "Click on the Read More button below to know more"
                  }
                  // title={!element.title ? "" : element.title}
                  description={
                    element.description
                      ? element.description.slice(0, 90)
                      : "Click on the Read More button below to get an insight of the news"
                  }
                  // description={
                  //   !element.description ? "" : element.description
                  // }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          className="btn btn-dark my-3"
          type="button"
          onClick={handlePrevClick}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          className="btn btn-dark my-3"
          type="button"
          onClick={handleNextClick}
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
  // }
  // }
  //prop-types setup(functional)
};
export default News;
