const ShowText = props => <h1
        className="text_style">
            {props.text}
    </h1>

class Select extends React.Component {
    state = {isVisible: true}
    onClick = () => {
        this.setState(({isVisible}) => ({isVisible: !isVisible}))
    }
    render() {
        const {isVisible} = this.state
        return (
            <div>
                {isVisible && <ShowText text='TEST!!!' />}
                <button
                    className="button_style"
                    onClick={this.onClick}>
                        {isVisible ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
ReactDOM.render(<Select />, document.getElementById('root'))