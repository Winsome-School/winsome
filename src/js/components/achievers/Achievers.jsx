import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import Hero from '../hero/HeroImage';
import FirstHeading from './FirstHeading'
import Portion1 from './Portion1'
import Portion2 from './Portion2'
import News from '../News/News'


export class Achievers extends React.Component {
  constructor() {
    super();
  }
  renderArray() {

  }
  render() {
    let {achieversData}=this.props;
    console.log('Data of Achievers',achieversData)

    return (
    <div>
        <Hero
          style={'header-image'}
        />
          <div className="achievers">
            <div className="content">
              <FirstHeading
                heading={achieversData.firstPart.heading}
                text={achieversData.firstPart.text}
              />
              <Portion1
                achieversData={achieversData}
              />
              <Portion2
                achieversData={achieversData}
              />
            </div>  
            <News/>
            <div className="clear"></div>
          </div>
      </div>
    )
  }
}
function mapStateToProps({achieversData}) {
  return {
    achieversData:achieversData
  }
}

export default connect(mapStateToProps,null)(Achievers)