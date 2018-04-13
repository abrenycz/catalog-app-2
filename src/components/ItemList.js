import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({items}) => 
		items.map(item => 
			<div key={item.id}>
				<span>&nbsp;{item.id}</span>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</span>
			</div>
			
		)


ItemList.propTypes = {
	items: PropTypes.array.isRequired
}

export default ItemList;