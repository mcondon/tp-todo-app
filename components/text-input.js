import PropTypes from '/react/prop-types.js'
import { Component } from '/react/react.js'
import ReactDOM from '/react/react-dom.js'
const h = React.createElement

class TextInput extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.value || '' }
    }

    componentDidMount() {
        if(this.props.focused) {
            ReactDOM.findDOMNode(this).focus()
        }
    }

    render() {

        const {
            className,
            onEnter,
            onEscape,
            placeholder

        } = this.props;

        const { value } = this.state
    
        return h(
            'input',
            {
                className,
                type: 'text',
                onChange: (e) => this.setState({ value: e.target.value }),
                onKeyUp: (e) => {
                    if(e.key === 'Escape') {
                        onEscape && onEscape(e)
                        this.setState({ value: '' })
                    } else if(
                        e.key === 'Enter'
                    ) {
                        onEnter && onEnter(e)
                        this.setState({ value: '' })
                    }
                },
                value,
                placeholder
            }
        )
    }
}

TextInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    placeholder: PropTypes.string
}

export default TextInput
