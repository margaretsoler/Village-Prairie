import * as React from 'react';
import './App.css'

interface Props {
}

interface State {
}

class HelloWorld extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <h1 className="title">Space</h1>;
  }
}

export default HelloWorld;
