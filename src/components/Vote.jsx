import React, { Component } from 'react';

class Vote extends Component {
	
	getPair() {
		return this.props.pair || [];
	}

	isDisabled() {
		// !! means: If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true
		return !!this.props.hasVoted;
	}

	hasVotedFor(entry) {
		return this.props.hasVoted === entry;
	}

	render() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}
                disabled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
          {this.hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null}
        </button>
      )}
    </div>;
  }
}

export default Vote;