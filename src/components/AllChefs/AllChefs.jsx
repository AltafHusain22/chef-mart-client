/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const AllChefs = () => {
	const [chefsData, setChefsData] = useState([])

	useEffect(()=>{
			fetch('http://localhost:5000/chefsRecips')
			.then(res=> res.json())
			.then(data=>setChefsData(data))
	},[])

	return (
		<div>
			
		</div>
	);
};

export default AllChefs;