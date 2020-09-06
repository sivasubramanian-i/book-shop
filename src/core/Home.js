import React, { Component } from "react";
import { getProducts } from "./apiCore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalComponent from "./Model";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
      show: false,
      singleData: []
    };
  }
  componentDidMount() {
    getProducts()
      .then(res => {
        this.setState({ ...this.state, bookData: res.results.books });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleShow = value => {
    this.setState({ show: true });
    this.state.bookData.forEach((book, key) => {
      if (key === value) {
        this.setState({ singleData: book });
      }
    });
  };

  renderSlides = () =>
    this.state.bookData.map((value, index) => (
      <div key={index} style={{ width: "50% !important" }}>
        <a>
          <img
            className="zoom"
            src={value.book_image}
            alt="Slide-Image"
            onClick={() => this.handleShow(index)}
          />
          <span className="book-rating">{value.rating} out of 5</span>
          <br />
          <span className="book-title">{value.title}</span>
          <br />
          <span className="book-author">{value.author}</span>
          <br />
          <span className="book-publish">{value.publisher}</span>
        </a>
      </div>
    ));

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      autoplay: true,
      speed: 500
    };
    return (
      <div className="row">
        {/* Home Page */}
        <div className="col-12">
          <img
            src="./assets/bg.jpg"
            alt="Background-Image"
            style={{ width: "100%" }}
          />

          <div className="top-left">
            <img src="./assets/bmuse_logo.png" alt="Logo-Image" />
            <p className="col-4 header-content">
              <span className="header-text">Bookshelf & Book Racks</span>
              <br />
              <span className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </p>
          </div>
          <div className="top-right">
            <img src="./assets/search.png" alt="Background-Image" />
          </div>
        </div>
        {/* Slider Component */}
        <div className="col-md-12 centered">
          <span className="title">Lorem ipsum</span>
          <Slider {...settings}>{this.renderSlides()}</Slider>
        </div>
        {/* Model Component */}
        <ModalComponent
          show={this.state.show}
          data={this.state.singleData}
        ></ModalComponent>
      </div>
    );
  }
}

export default Home;
