import React from 'react';

import CounterOutput from './CounterOutput';

interface IAppProps {

}

interface IAppState {
  counterValue: number;
}

// you can also define this with an empty props object like this:
// class App extends React.Component<IAppProps, IAppState>
class App extends React.Component<IAppProps, IAppState> {
  public state = { counterValue: 0 };

  public render() {
    return (
      <div style={{textAlign: 'center'}}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.incHandler}>Increment</button>
        <button onClick={this.decHandler}>Decrement</button>
      </div>
    );
  }

  private incHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + 1 }
    });
  }

  private decHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue - 1 }
    });
  }
}

export default App;
