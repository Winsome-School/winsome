import React from 'react';

export default class Juniors extends React.Component {
  render(){
    return(
      <div className="container">
       <div className="junior">
         <h2>Junior School</h2>
         <div className= "box"></div>
         <p>
           Kindergarten and Pre-primary education provides 
           an important foundation for both brain development
           and instilling a child's life long love of learning. 
           We have a holistic view of education and cater for the physical, 
           creative, intellectual, emotional, social and spiritual domains 
           of learning in our classrooms.
          </p>
          <div className="image" >
          <img src= '../image/junior1.jpg' height="450px" width="650px"/>
          </div>
         </div>
      <div className="creating">
         <h2>Creating Confident Learners</h2>
         <div className= "box"></div>
         <div className="textimage">
         <div className="pdivs">        
          <p>
            At Winsome we believe in providing a dual approach to education which
            supports every child to become condent learners. For us, the quality of
            relationship developed with the child has a direct link to the eective practice
            of teaching the children and guiding them to discover new things and think
            for themselves. We believe that if the teacher-child relationship is based on
            mutual respect, active listening and the sharing of knowledge and skills, the
            child’s capacity to learn and discover the world is enhanced.
            </p>
            <p>
            We aim to make strong genuine connections with families
            to support the children's learning. We foster a shared sense of
            achievement through regular communication and by providing
            opportunities for parent and caregiver involvement in the
            classroom. Throughout the year there will be a number of
            special events and opportunities in which parents and caregivers
            can become involved.
            </p>
            <p>
            Our goal is to capture the heart of a child through play-based learning,
            which develops a love and excitement for learning—the foundation on
            which social, emotional, psychological, spiritual and creative wellbeing
            is developed and ultimately sustained into adulthood.
            </p>
            </div>
            <div className="image">
            <img className='imglion' src= '../image/junior2.jpg'/>
            </div>
          </div>
         </div> 
         <div className="key">
         <h2>Key Features</h2>
         <div className= "box"></div>
         <p>
          Early Years programme promotes age-appropriate, holistic development
          focusing on children’s communication and language skills, creative expressions, as
          well as physical, social and personal competencies.
          </p>
          </div>
      </div>
    )
  }
};