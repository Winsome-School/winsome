import React,{ Component } from 'react'

export default class  career extends Component {
	constructor () {
		super();

	}

	render() {
		
		let {} = this.props;
		
		

		return(
			<div className="career">
				<div className="wrapper">
					<div className="content-1">
						<div className="content-box">
							<h3>Working at Winsome </h3>
							<div className="yellow-icon">
							</div>
							<p>
								We pride ourselves on the best support and care 
								of our academics and Administration -a School is 
								only as strong as those working within it.
								<br/>
								<br/>
								If you wish to apply for an academic vacancy 
								please fill in the details below and our HR 
								department will get in touch with you.
							</p>

						</div>
						<div className="content-box box-2">
							<h3>Apply For a Job</h3>
							<div className="yellow-icon">
							</div>
							<p>Please select the type of position you are 
							applying for:
							</p>

							<div className="dropDown">
								<select>
								  <option value="volvo">Junior-Nursery to Class 1</option>
								  <option value="saab">Saab</option>
								  <option value="mercedes">Mercedes</option>
								  <option value="audi">Audi</option>
								</select>
							</div>
							<br/>
							<p>How did you hear about this teaching position?</p>
							<div className="dropDown">
								<select>
								  <option value="volvo">Search Engine</option>
								  <option value="saab">Google</option>
								  <option value="mercedes">Bingo</option>
								  <option value="audi">Yahoo</option>
								</select>
							</div>

							<div className="resume-box">
								<p>Upload Your Resume</p>
								<p>Drag & Drop file here, or click button below.</p>
								<div className="upload-btn">
									<button>Upload File</button>
								</div>
							</div>

							<p>Personal Information</p>

							<form className="user-info">
								<input type="text" placeholder="First Name"/>
								<input type="text" placeholder="Last Name"/>
								<input type="text" placeholder="Date Of Birth"/>
								<input type="text" placeholder="Address"/>
								<input type="text" placeholder="City"/>
								<input type="text" placeholder="Provivce/Religion"/>
								<input type="text" placeholder="Country"/>
								<input type="text" placeholder="Phone Landline"/>
								<input type="text" placeholder="Phone Mobile"/>
								<input type="text" placeholder="Email"/>
								<button>Submit</button>
							</form>


						</div>
					</div>

				</div>
			</div>
		       
		);
	}
}
