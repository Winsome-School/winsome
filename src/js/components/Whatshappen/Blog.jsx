import React from 'react';
import { number, func, array, shape } from 'prop-types';
import { connect } from 'react-redux';
import WhatsHappen from './whatshappen';
import {
  nextViewToSaga,
  previousViewToSaga,
  initialBlogViewToSaga
} from '../../actions';

export class Blog extends React.Component {
  constructor() {
    super();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.props.initialBlogViewToSaga();
  }

  next() {
    this.props.nextViewToSaga();
  }
  previous() {
    this.props.previousViewToSaga();
  }
  createNormalView() {
    const { viewData } = this.props;

    const view = viewData.selectedView.map((item, index) => (
      <WhatsHappen blog={item} key={Math.random()} count={index} />
    ));
    return view;
  }
  createRespView() {
    const { viewData } = this.props;

    const view = viewData.respView.map(item => (
      <WhatsHappen blog={item} key={Math.random()} count={'resp'} />
    ));
    return view;
  }
  render() {
    const view = this.createNormalView();
    const respView = this.createRespView();
    return (
      <div id="sec-2">
        <div className="wraper">
          <div className="des">
            <h2>Whats been happening</h2>
            <span>What its like to be a part of our school community.</span>
          </div>

          <div className="slide-show">
            <div className="arrows left">
              <div
                id="previous"
                className="arrow previous"
                onClick={this.previous}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
              />
            </div>

            <div className="arrows right">
              <div
                id="next"
                className="arrow next"
                onClick={this.next}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
              />
            </div>

            <div className="whatsHappen-card">
              <div className="wh-normal-view">{view}</div>
              <div className="wh-responsive-view">{respView}</div>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  nextViewToSaga: func,
  previousViewToSaga: func,
  initialBlogViewToSaga: func,
  viewData: shape({
    selectedView: array,
    firstIndexofSelectedView: number
  })
};
Blog.defaultProps = {
  nextViewToSaga: null,
  previousViewToSaga: null,
  initialBlogViewToSaga: null,
  viewData: null
};
function mapStateToProps({ viewData }) {
  return {
    viewData
  };
}

export default connect(mapStateToProps, {
  nextViewToSaga,
  previousViewToSaga,
  initialBlogViewToSaga
})(Blog);
