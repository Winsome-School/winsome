import React from 'react';

const Arrow=({onClickLeftArrow,onClickRightArrow})=>{
	return (
		<div>
			<div className="arrowRight"
			onClick={onClickRightArrow}
			>
			
			</div>
			<div className="arrowLeft"
			onClick={onClickLeftArrow}
			>
			</div>
		</div>
	)
}

export default Arrow;