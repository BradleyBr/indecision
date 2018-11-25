const appRoot = document.querySelector('#app')

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggleDetails = this.toggleDetails.bind(this)
        this.state = {
            detailsSwitch: true
        }
    }

    toggleDetails() {
        this.setState((prevState) => {
            return {
                detailsSwitch: !prevState.detailsSwitch
            }
        })
    }
    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleDetails}>{this.state.detailsSwitch ? 'Show Details' : 'Hide Details'}</button>
            {!this.state.detailsSwitch && <p>Here are some details!</p>}
        </div>
        )  
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot)