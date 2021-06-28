import React, {Component} from 'react';
import Moment from 'react-moment';
import { FaRegCalendarCheck } from 'react-icons/fa';

class ListLesson extends Component {

  render() {

    return (
        <div className="container board-item" key={this.props.lsns.lsnId}>
          <div className="row bg-dark">
            <div className="col-2 col-md-2 brd">
              <span className="lsn-date text-white">
              <Moment
                date={this.props.lsns.lessonDate}
                format="MM-DD"
              />
              </span>
            </div>
            <div className="col-2 col-md-2 brd">
              <span className="lsn-date text-white">
              <Moment
                date={this.props.lsns.lsnTime}
                format="hh:mm a"
              />
              </span>
            </div>
            <div className="col-4 col-md-3 brd">
              <span className="label-item mr-2 text-break">
              Instructor:
              </span>
              <span className="board-name text-white">
              {this.props.lsns.instructorName}
              </span>
            </div>
            <div className="col-3 col-md-3 label-item brd lsn-price text-info text-break">
              {this.props.lsns.lessonCost}
            </div>
            <div className="col-1 col-md-2 brd">
              <button className="btn btn-sm btn-success pr-3 pl-3 mr-1 ml-1 mr-md-1 pr-md-4 pl-md-4 ml-md-auto d-block" onClick={() => {this.props.toggleAdd(); this.props.reserveLsn(this.props.lsns)}}><FaRegCalendarCheck  /></button>
            </div>
          </div>
        </div>
    )
  }
}
export default ListLesson;