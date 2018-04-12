import React from 'react';

import Hero from '../hero/HeroImage';

const HR = () => (
    <div>
      <Hero
        style={'header-image'}
      />
      <div id="hr">
        <div className="wrapper">
          <div className="hr-form">
            <div className="candidate-section">
              <h3 className="section-heading">Candidate details</h3>
              <form className="form">
                <label className="form-entry">
                  Candidate Name: <input className="form-entry-item" type="text" name="candidate-name" />
                </label>
                <label className="form-entry">
                  B Form #: <input className="form-entry-item" type="text" name="b-form" />
                </label>
                <label className="form-entry">
                  Date of Birth: <input className="form-entry-item" type="text" name="date-of-birth" />
                </label>
                <label className="form-entry">
                  Identification Mark: <input className="form-entry-item" type="text" name="identification-mark" />
                </label>
                <div className="form-entry">
                  Hafiz?
                  <input className="form-entry-item" type="checkbox" name="yes" value="yes" />Yes
                  <input className="form-entry-item" type="checkbox" name="no" value="no" />No
                </div>
              </form>
            </div>
            <div className="father-section">
              <h3 className="section-heading">Father details</h3>
              <form className="form">
                <label className="form-entry">
                  Father Name: <input className="form-entry-item" type="text" name="father-name" />
                </label>
                <label className="form-entry">
                  CNIC #: <input className="form-entry-item" type="number" name="father-cnic" />
                </label>
                <label className="form-entry">
                  Father Cell: <input className="form-entry-item" type="number" name="father-cell" />
                </label>
                <label className="form-entry">
                  Address: <textarea className="form-entry-item text-area" name="address" />
                </label>
              </form>
            </div>
            <div className="class-section">
              <h3 className="section-heading">Class Information</h3>
              <form className="form">
                <label className="form-entry">
                  Admission #: <input className="form-entry-item" type="number" name="admission-number" />
                </label>
                <label className="form-entry">
                  Class Roll #: <input className="form-entry-item" type="number" name="class-roll-number" />
                </label>
                <label className="form-entry">
                  Subjects: <input className="form-entry-item" type="text" name="subjects" />
                </label>
              </form>
            </div>
            <div className="emergency-section">
              <h3 className="section-heading">Emergency Details</h3>
              <form className="form">
                <label className="form-entry">
                  In Case of Emergency Name: <input className="form-entry-item" type="text" name="emergency-name" />
                </label>
                <label className="form-entry">
                  In Case of Emergency Number: <input className="form-entry-item" type="number" name="emergency-number" />
                </label>
                <label className="form-entry">
                  Medical Notes: <textarea className="form-entry-text text-area" name="address" />
                </label>
              </form>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  );

export default HR;