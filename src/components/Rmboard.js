// Rmboard.js

import React, { Component } from 'react';
import Card from './Card';
import Pagination from './Pagination';

class Rmboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      cardsPerPage: 30,
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  renderCards() {
    const { data } = this.props;
    const { currentPage, cardsPerPage } = this.state;
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = data.slice(startIndex, endIndex);

    return currentCards.map((job, index) => (
      <div key={index}>
        <Card
          imageUrl={job.TITLE_IMG || 'default-image.jpeg'}
          title={job.TITLE || '이미지 타이틀'}
          heading={job.TITLE || '제목'}
          description={job.MAINDUTIES || '여기에 설명을 작성하세요.'}
        />
      </div>
    ));
  }

  render() {
    const { currentPage } = this.state;
    const { data } = this.props;
    const totalCards = data.length;

    return (
      <div>
        <div className="mr-4 ml-4 gap-2">
          <div className="grid grid-cols-3 grid-flow-row gap-4">
            {this.renderCards()}
          </div>
          <div className="pt-3 pb-3">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalCards / this.state.cardsPerPage)}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Rmboard;