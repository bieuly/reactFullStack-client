import React, { Component } from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component {

	render() {
		return <div>
			{this.props.winner ? 
				<Winner ref="winner" winner={this.props.winner} /> : 
				// ... means to just pass the props as they are (spread operator)
				<Vote {...this.props}/>
			}
		</div>
	}
}

export default Voting;