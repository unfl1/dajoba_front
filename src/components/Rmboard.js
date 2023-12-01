//채용쪽 카드로 만든 게시물들

import React, { Component } from 'react';
import Card from './Card'; // Card 컴포넌트 임포트
import Pagination from './Pagination'; // Pagination 컴포넌트 임포트

class Rmboard extends Component {
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
    for (let i = 0; i < 30; i++) {
      cards.push(
        <div key={i}><Card /></div>
      );
    }
    return cards;
  }

  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <div >
      <div className="mr-4 ml-4 gap-2">
        <div className="grid grid-cols-3 grid-flow-row gap-4">
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

export default Rmboard;