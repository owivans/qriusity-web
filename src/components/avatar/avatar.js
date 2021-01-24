import React from 'react';

import './style.scss';

const Avatar = ({ src, size }) => {
	return (
		<div className='avatar fade-in'>
			<div className='avatar__content'>
				<img
					src={src}
					alt='avatar'
					width={size}
					height={size}
				/>
			</div>
		</div>

	)
};

export default Avatar;