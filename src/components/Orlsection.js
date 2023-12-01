import React, { Component } from 'react';
import Card from './Card'; // Card 컴포넌트 임포트
import Pagination from './Pagination'; // Pagination 컴포넌트 임포트

class Orlsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 10 // 총 10개의 페이지
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  renderCards() {
    const cards = [];
    for (let i = 0; i < 20; i++) {
      cards.push(
        <div key={i}><Card /></div>
      );
    }
    return cards;
  }

  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <div className="bg-gray-100">
        <div className="ml-28 mr-28 pb-4">
          <div className="font-semibold text-xl mr-4 ml-6 mb-10 pt-8">이번주 공채 소식</div>
          <div className="grid grid-cols-4 grid-flow-row gap-4">
            {this.renderCards()}
          </div >
          <div className="pt-3 pb-3 ">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Orlsection;