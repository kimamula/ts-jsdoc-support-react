import * as React from 'react';

/**
 * @type {{ new(props: any): {
     props: { a: string, b: number },
     state: any,
     context: any,
     refs: any,
     render: any,
     setState: any,
     forceUpdate: any
   } }}
 */
const Foo = class Foo extends React.Component {
  render() {
    return <div className={this.props.a}>{this.props.b}</div>;
  }
};
export default Foo;