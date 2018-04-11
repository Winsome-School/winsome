import React from 'react';
import News from '../../../News/News';

const Middle= ()=>(
  <div id='middle'>
    <div className='middleSection'>
      <div>
      	<h2 className='middleH2'>Middle School</h2>
        <div className='yellowBox' />
      	<p className='middleP'>
          At Winsome, middle years education focuses on educating 
      		the whole child, supporting our students to become 
          creative and conﬁdent learner.
      	</p>
        <p className='middleP'>
          We know that learning is enhanced when students feel 
          positively about their school environment , 
          sowe work hard to inspire a lifelong love of learning, 
          building happy , full led and con dent students . 
          Year 2 - 5 classes o er well balanc edacademic programs 
          which enable students to explor etheir interests 
          and develop their personal strengths. 
          There is a focus on developing each childs numeracy 
          and literacy skills through consistent learning programs. 
        </p>
      </div>
      <div className='middleImg' />
      <div>
        <h2 className='middleH2'>Your Child as an Individual</h2>
        <div className='yellowBox' />
        <p className='middleP'>
          Recognizing individual dierences and establishing 
          clear learning pathways for all children is the key 
          to optimizing educational opportunities and outcomes. 
          Differentiation in the classroom promotes critical 
          and creative thinking processing skills, while programs 
          in spelling, reading, grammar and mathematics 
          curriculum are well sequenced to ensure active student 
          transition between year groups. Learning support is 
          oe red in the form of Extension or Remediation to 
          those students who require additional intervention.
        </p>
        <p className='middleP'>
          Above all , our goal is to educate and grow students
          who re ect the school values in their everyday work, 
          demeanor, and interactions with others, both within 
          the school and in the wider community. 
        </p>
      </div>
    </div>
    <News />
  </div> 
);
export default Middle;
