//공채나 채용 칸 하나하나를 card로 만들어봄

import React, { Component } from 'react';

class Card extends Component {
  render() {
    // job_post_url를 클릭 시 이동하는 로직을 추가
    const { job_post_url } = this.props;
    return (
      <a href={job_post_url} target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
      </a>
    );
  }
}

export default Card;