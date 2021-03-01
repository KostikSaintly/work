import React, { View } from 'react-native';
import { Text } from 'react-native';

class Counter extends React.Component {

    state = {
        count: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            doubleCount: props.count
        }
    }

    componentDidMount() {
        console.log('Mount');

    }

    componentWillUnmount() {
        console.log('UNMOUNT')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE', prevProps, this.props);
        /*if (this.props.count > this.state.doubleCount) {
            this.setState({ doubleCount: this.props.count * 2 });
        }*/
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.count < 20;
    }
    render() {
        return (
            <Text>{this.state.count}</ Text>
        )
    }
}
export default Counter;