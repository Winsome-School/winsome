import React from 'react';
import PropTypes from 'prop-types'
import SecondParts from './SecondParts'

class SecondPart2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    let { classStudents, firstNo, secondNo, heading,top } = this.props;
    return (
      <div>
        <div className="secondPart">
          <div className="box"></div>
          <h2>{heading}</h2>
          <div className="col1">
            {[...classStudents].slice(top, firstNo).map(function ({...item}, index) {
              console.log(item.textHeading)
              return (
                <SecondParts
                  key={index}
                  textHeading={item.textHeading}
                  text={item.text}
                  image={item.image}
                  divStyle={item.divStyle}
                />
              )
            })}

          </div>
          <div className="col2">
            {[...classStudents].slice(firstNo, secondNo).map(function ({...item}, index) {
              return (
                <SecondParts
                  key={index}
                  textHeading={item.textHeading}
                  text={item.text}
                  image={item.image}
                  divStyle={item.divStyle}

                />
              )
            })}
          </div>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default SecondPart2

SecondPart2.propTypes = {
  //getAction: PropTypes.func.isRequired
}
