import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    console.log('this.props.pageOfGallerey - ', this.props.pageOfGallerey);
    return (
      <>
        {this.props.pageOfGallerey.map(pic => {
          return (
            <li className="gallery-item" key={pic.id}>
              <p>resolved</p>
              <img src={pic.webformatURL} alt="pic" />
            </li>
          );
        })}
      </>
    );
  }
}