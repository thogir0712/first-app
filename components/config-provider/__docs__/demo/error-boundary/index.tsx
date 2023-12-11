import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConfigProvider, Button } from '@alifd/next';

const { ErrorBoundary, config } = ConfigProvider;

class Demo extends React.Component {
    render() {
        if (this.props.throwError) {
            throw Error('There is something going wrong!');
        } else {
            return <span>normal</span>;
        }
    }
}

const NewDemo = config(Demo);

const fallbackUI = props => {
    const { error, errorInfo } = props;
    return <span style={{ color: 'red' }}>{error.toString()}</span>;
};

class App extends React.Component {
    state = {
        throwError: false,
    };

    onClick = () => {
        this.setState({
            throwError: true,
        });
    };

    render() {
        return (
            <div>
                Click to throw an error{' '}
                <Button type="primary" onClick={this.onClick}>
                    trigger error
                </Button>
                <br />
                <br />
                Default fallback UI:
                <hr />
                <ConfigProvider errorBoundary>
                    <NewDemo throwError={this.state.throwError} />
                </ConfigProvider>
                <br />
                <br />
                Customize fallback UI of configed Component(Basic Components / Biz Components):
                <hr />
                <ConfigProvider
                    errorBoundary={{
                        fallbackUI: props => {
                            const { error, errorInfo } = props;
                            return <span style={{ color: 'red' }}>Error: {error.toString()}</span>;
                        },
                        afterCatch: () => {
                            console.log('catching');
                        },
                    }}
                >
                    <NewDemo throwError={this.state.throwError} />
                </ConfigProvider>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
