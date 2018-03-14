let dataArray = [
				// data for login section
		{ 		loginData: [
                            'SIGN OUT',
                            'SIGN IN'
                            ]
    	}

    	,// for seperation of objects 
    					// data for navbar section
		{                   data: [
								    'CONTACT',
								    'CARREER'	,
								    'NEWS/EVENTS',
								    'ADMISSIONS',
								    'OURSCHOOL',	
								    'HOME'
								  ] ,
		                      //just give one space only in the options
							 dataDropDown: [
								    'CONTACT link1 link2 link3',
								    'CARREER link1 link2 link3',	
								    'NEWS/EVENTS link2 link3',
								    'ADMISSIONS link1 link2 link3 link4',
								    'OURSCHOOL link1 link2 link3',	
								    'HOME link1 link3',
								  ] , 
							 //don't forget to use comma after array is ended ........

							 styles : [
							 // if any style is omitted it will give styles accordingly and if one is left empty 
							 // it will give the styles which were given previously  
									   'last','last2','','','',''
		    						]
		}
]

export default dataArray