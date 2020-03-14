

import React from 'react';
import Rellax from 'rellax';

class ChildrenWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // We can keep a reference to Rellax in case we need it later
        this.rellax = new Rellax('.rellax', {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
          });
      }
    render() {
        return (
        <>{this.props.children}</>
            )}  
        }
        
export default ChildrenWrapper