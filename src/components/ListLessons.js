import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListLessons extends Component {
  render() {
    const listItems = this.props.lessons.map(item => (
      <div>{item.boarderName}</div>
    ));

    return (
      <div className="lesson-list item-list mb-3">
        {this.props.lessons.map(item => (
          <div class="container board-item" key={item.lsnId}>
            <div class="row">
              <div class="col-3 col-md-4 brd">
                <span class="lsn-date">
                <Moment
                  date={item.lessonDate}
                  formate="MMM-D h:mma"
                />
                </span>
              </div>
              <div class="col-3 col-md-3 brd">
                <span class="label-item">
                Rider:
                </span>
                <span class="board-name">
                {item.boarderName}
                </span>
              </div>
              <div class="col-2 col-md-2 brd lsn-length">
                {item.lessonLength}
              </div>
              <div class="col-2 col-md-1 brd lsn-price">
                {item.lessonCost}
              </div>
              <div class="col-2 col-md-2 brd">
                <button class="btn btn-sm btn-secondary" onClick={() => this.props.deleteLesson(item)}><FaTimes  /></button>
              </div>
            </div>

          </div>
        ))}
      </div>
    );
  }
}

export default ListLessons;