import React from 'react';

const Dashboard= ()=>(
  <div id='dashboard'>
    <h1 className="text-center">Dashboard</h1>
    <div className="line" />
    <div className="row">
      <div className="col-sm-4">
        // <a href="https://google.com">
          <div className="box">
            <span className="glyphicon glyphicon-globe" />
          </div>
        </a>  
      </div>
      <div className="col-sm-4">
        <a href="https://google.com">
          <div className="box">
            <span className="glyphicon glyphicon-briefcase" />
          </div>
        </a>  
      </div>
      <div className="col-sm-4">
        <a href="https://google.com">
          <div className="box">
            <span className="glyphicon glyphicon-th" />
          </div>
        </a>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-4">
        <div className="box2">
          <h2>Website</h2>
          <hr />
          <span className="glyphicon glyphicon-globe" />
          <div className="link">
            <a href="https://google.com">
            Click Here...
            </a>
          </div>
        </div>  
      </div>
      <div className="col-sm-4">
        <div className="box2">
          <h2>HR</h2>
          <hr />
          <span className="glyphicon glyphicon-briefcase" />
          <div className="link">
            <a href="https://google.com">
            Click Here...
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="box2">
          <h2>Fee</h2>
          <hr />
          <span className="glyphicon glyphicon-th" />
          <div className="link">
            <a href="https://google.com">
            Click Here...
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> 
);
export default Dashboard;
