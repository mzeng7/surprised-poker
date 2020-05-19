
class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			table_id: 0,
			numPlayers: 0,
			players: {
				1: null,
				2: null,
				3: null,
				4: null,
				5: null,
				6: null,
				7: null,
				8: null,
				9: null,
			},
			pot: 0,
		};
	}

	potInfo() {
		return (
			<p><b>Pot:</b> {this.state.pot}</p>
		);
	}

	render() {
		return (
			<div className="outer-board">
				<div className="inner-board">
					<div className="community-cards">
						<img src="/static/poker/card-assets/ace_of_spades.png" height="120" width="74" />
						<img src="/static/poker/card-assets/king_of_spades.png" height="120" width="74" />
						<img src="/static/poker/card-assets/queen_of_spades.png" height="120" width="74" />
						<img src="/static/poker/card-assets/jack_of_spades.png" height="120" width="74" />
						<img src="/static/poker/card-assets/10_of_spades.png" height="120" width="74" />
					</div>
					<div className="pot-info">
						{this.potInfo()}
					</div>
				</div>
			</div>
		);
	}
}

const domContainer = document.querySelector('#poker-container');
ReactDOM.render(React.createElement(Table), domContainer);
