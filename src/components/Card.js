import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div >
        <div className={'bg-white p-6 rounded-lg shadow-xl max-w-sm transition-transform transform hover:scale-105'}>
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
          <a
            href={this.props.link || '#'}
            className="mt-4 inline-block bg-purple-300 text-white py-2 px-4 rounded hover:bg-purple-500 transition-colors duration-300"
          >
            더 보기
          </a>
        </div>
      </div>
    );
  }
}

export default Card;