import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

class ModalComponent extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modelClass: "viewModel"
    };
  }
  handleClose = () => {
    console.log("sadakjsdhakjsd");
    this.setState({ show: false });
    this.setState({ modelClass: "hideModel" });
    window.location.reload();
  };

  render() {
    console.log(this.state.modelClass, "this.state.modelClass====");
    const modelClass = this.state.modelClass ? "viewModel" : "hideModel";
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
        animation={false}
        className={this.state.modelClass}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <img
                  className="model-image"
                  src={this.props.data.book_image}
                  alt="Slide-Image"
                />
              </Col>
              <Col md={6}>
                <span className="model-author">
                  <b>Author: </b>
                  {this.props.data.author}
                </span>
                <br />
                <span className="model-publisher">
                  <b>Publisher: </b>
                  {this.props.data.publisher}
                </span>
                <br />
                <span className="model-description">
                  <b>Description: </b>
                  {this.props.data.description}
                </span>
              </Col>
            </Row>
          </Container>
          <Button>Add to Favorites +</Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalComponent;
