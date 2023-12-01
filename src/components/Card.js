//공채나 채용 칸 하나하나를 card로 만들어봄

import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div >
        <div className={'bg-white p-6 rounded-lg max-w-sm transition-transform transform hover:scale-105'}>
          <div className="relative">
            <img
              src={this.props.imageUrl || 'default-image.jpeg'}
              alt="Placeholder"
              className="rounded-t-lg mb-4 w-full"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-3">
              <h3 className="font-semibold">{this.props.title || '이미지 타이틀'}</h3>
            </div>
          </div>
          <h2 className="text-2xl mb-2">{this.props.heading || '제목'}</h2>
          <p className="text-gray-700">{this.props.description || '여기에 설명을 작성하세요.'}</p>

        </div>
      </div>
    );
  }
}

export default Card;