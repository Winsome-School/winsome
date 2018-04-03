import React from 'react';
import { number, func, array, shape } from 'prop-types';
import { connect } from 'react-redux';
import WhatsHappen from './whatshappen';
import { nextView, previousView } from '../../actions';

class Blog extends React.Component {
  constructor() {
    super();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.props.nextView();
  }

  previous() {
    this.props.previousView();
  }
  createView() {
    const { viewData } = this.props;

    const view = viewData.selectedView.map((item, index) => (
      <WhatsHappen blog={item} key={Math.random()} count={index} />
    ));
    return view;
  }
  render() {
    const view = this.createView();
    return (
      <div id="sec-2">
        <div className="wraper">
          <div className="des">
            <h2>What's been happening</h2>
            <span>What it's like to be a part of our school community.</span>
          </div>

          <div className="slide-show">
            <div className="arrows left">
              <div
                className="arrow previous"
                onClick={this.previous}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
              />
            </div>

            <div className="arrows right">
              <div
                className="arrow next"
                onClick={this.next}
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
              />
            </div>

            <div className="whatsHappen-card">
              <div className="whatsHappen-box">{view}</div>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    );
  }
}
Blog.propTypes = {
  nextView: func,
  previousView: func,
  viewData: shape({
    selectedView: array,
    firstIndexofSelectedView: number
  })
};
Blog.defaultProps = {
  nextView: null,
  previousView: null,
  viewData: null
};
function mapStateToProps({ viewData }) {
  return {
    viewData
  };
}

export default connect(mapStateToProps, { nextView, previousView })(Blog);
