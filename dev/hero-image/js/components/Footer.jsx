import React, {Component} from 'react';
export default class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="wrapper">
              <div className="footer-info">
                <h4 className="footer-heading">Come Visit Us</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eum rem ducimus dolorum velit sint nostrum ea consectetur ipsa totam aut quibusdam quidem, incidunt cumque consequuntur, ex autem, quas perspiciatis?</p>
                    <p><strong>Phone: </strong>0092 42 34567890</p>
                    <p><strong>Email: </strong>info@email.com</p>
                    <p><strong>Address: </strong>123 Street, Lahore, Pakistan</p>
              </div>
              <div className="footer-description">
                <h4 className="footer-heading">Who We Are</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem ipsa quisquam reprehenderit eaque, vitae quibusdam commodi sunt, amet illo quis sit aliquam cumque, autem nesciunt libero maiores harum corrupti.</p>
              </div>
              <div className="follow-us">
                <h4 className="footer-heading">Follow us</h4>
                <div className="followus-images-container">
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                  <img className="followus-images" src="http://via.placeholder.com/69x69" alt="photo" width={69} height={69} />
                </div>
              </div>
            </div>
          </footer>

        )

    }


}



