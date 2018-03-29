import React from 'react';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Hero
          style={'header-image'}
        />
        <div className="head">
          <div className="school">
            <h2>Our School</h2>
            <div className="box">
            </div>
            <p>
              We would like to extend a warm welcome to Winsome School System and take a few moments to share our vision with you.
              We are a healthy, thriving educational community catering to students in Childcare through to Year 10.
              The school has enjoyed a strong academic achievement record, and an engaging, varied curriculum.
              The school’s co-curricular activities and unique programs all reinforce our desire to develop the whole child.
						<br />
              <br />
              Winsome’s most noticeable strength is its community, where each student is connected and valued.
              Staff members make a conscious effort to model healthy, authentic relationhips with each other, with students,
              and their families. Our teachers are selected from a solid academic base and are 100% committed to delivering
              quality education in a dynamic, engaging learning environment. They all have a genuine embody compassion and
              service in the school and wider community. We are very much about shaping content and character as we normalize
              striving for exellence in life at shool and beyond. We want to assist students to reach their ﬁrst-choice
              University or apprenticeship aspirations when they graduate.The earlier that process Starts, the better.
						<br />
              <br />
              So,if you are wanting to have every opportunity a private education offers, to explore and shone your child’s
              unique gifts, chances are, Winsome is a good for you. We invite you to visit us on campus. Please call the ofﬁce
              or email enrolments@winsome.edu.pk and we would be delighted to arrange a time for you.
					</p>
          </div>
          <div className="col1">
            <div className="aims">
              <h2>Our Aims</h2>
              <div className="box">
              </div>
              <p>
                To develop the individual's full potential through the pursuit of exellence.
							<br />
                To develop independent thought and a sense of responsibility in preparation for adult life.
							<br />
                To nurture positive relationships within a caring and supportive environment.
						</p>
            </div>
            <div className="mission">
              <h2>Our Mission</h2>
              <div className="box">
              </div>
              <p>
                We aim develop individual potential and self-worth through stimulating and positive relationships
                and through an understanding of Islamic values, so that our students are prepared for the challenges
                that they will face in life and beyond school.
						</p>
            </div>
          </div>
          <div className="col2 board">
            <h2>School Board</h2>
            <div className="box">
            </div>

            <h5>AMMAR ALVI</h5>
            <p>
              Principal / Head of Senior Classes Mechanical Engineering <br />
              <p className="honor">Honors:</p>
              UET,Lahore <br />
              MBA HR - IBA Punjab University, Lahore <br />
              Leadership Roles at SNGPL, ICI, Packages (PVT.)
					</p>


            <h5>FREEHA ALVI</h5>
            <p>
              Head of Middle Classes Mechanical Engineering <br />
              <p className="honor">Honors:</p>
              UET,Lahore <br />
              MBA HR - IBA Punjab University, Lahore <br />
              Leadership Roles at SNGPL, ICI, Packages (PVT.)
					</p>


            <h5>SANA ALVI</h5>
            <p>
              Head of Junior Classes <br />
              <p className="honor">Honors:</p>
              MS. Engish Literature - Punjab University, Lahore <br />
              Education preparation Institute, Seminole State College <br />
              of Florida, USA
					</p>
          </div>
        </div>
        <Discover />
      </div>
    )
  }
}