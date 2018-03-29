import React from 'react';
import Discover from '../discover/Discover';
import Hero from '../hero/HeroImage';

export default class Senior extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Hero
            style={'header-image'}
          />
          <div className="head">
            <div className="school">
              <h2>Senior School</h2>
              <div className="box">
              </div>
              <p>
                Supporthing our teenagers as they become young adults.our teenagers grow towards
                adulhood,our secondary school aims to develop students of ne character who are
                intrinsically motivated to learn and make a positive di erence in our community,nation
                and world.
            <br />
                <br />
                The teenage years can be a challenging time can be a challenging time for many for many students. but by adopting a zero.
                tolerance approach to builying.dangerous behavior and illegal substance.
                Winsome School System ensures they are able to thrive in a safe and positive environment.
            <br />
              </p>
              <img src='./images/IMG_9554.jpg' width='90%' />
            </div>
            <div className="col1">
              <div className="aims">
                <h2>Besearch-based Best Practice</h2>
                <div className="box">
                </div>
                <p>

                  Teachers apply research-bash best pravtice to deliver a curriculum that is engaging.
                  relevant and e ective at helping studengts reach their post-secondary goals.
              <br />

                </p>
                <div className="mission">
                  <p>
                    With a strong focus on numeracy and literacy,our curricumlum also provids opportunities for
                    students is performing arts.technology,outdoor educatio and sporting
                    endeavors.We pride ourselves on providing a dynamic learning environment that is
                    constantly under review so that we can ensure we continue to educate according to
                    world class standards and best practice.Guiding and assisting students through senior
                    classesl while providing and excellent eduction is a partnership between staff,students and
                    parents.We welcome open communication and feedback to optimize learning outcomes for all students
            </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Discover />
      </div>
    )
  }
};