import PropTypes from '/react/prop-types.js'
import { Component } from '/react/react.js'
const h = React.createElement

class TextInput extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.value }
    }

    render() {

        const {
            className,
            onEnter,
            onEscape
        } = this.props;

        const { value } = this.state
    
        return h(
            'input',
            {
                className,
                type: 'text',
                onChange: (e) => this.setState({ value: e.target.value }),
                onKeyUp: (e) => {
                    if(e.key === 'Escape' && onEscape) {
                        onEscape(e)
                        this.setState({ value: '' })
                    } else if(
                        e.key === 'Enter' &&
                        onEnter &&
                        e.target.value.trim()
                    ) {
                        onEnter(e)
                        this.setState({ value: '' })
                    }
                },
                value
            }
        )
    }
}

TextInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func
}

export default TextInput
