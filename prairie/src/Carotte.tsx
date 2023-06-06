import * as React from 'react';

interface Props {
}

interface State {
}

class HelloWorld extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <h1>Village prairie</h1>;
  }
}

export default HelloWorld;
