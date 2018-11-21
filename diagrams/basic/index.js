import React, { Component } from 'react'
import ReactSnap from '../Snap'

class Basic extends Component {
  render() {
    return (
    <ReactSnap width={500} height={100}>
        {(s)=>{
          //user icon and label
          s.image('assets/images/user.svg', 0, 0, 80, 80);
          s.text(25, 90, 'User')
            .attr({
              'font-size': 16
            });
          //resource icon and label
          s.image('assets/images/web-app.svg', 420, 0, 80, 80);
          s.text(425, 90, 'Resource')
            .attr({
              'font-size': 16
            });
          //animated dashed line
          s.line(80, 40, 85, 40)
            .attr({
            id: 'squiggle',
            fill: 'none',
            strokeWidth: '4',
            stroke: '#000000',
            strokeMiterLimit: '10',
            strokeDasharray: '9 9',
            strokeDashOffset: '988.01'
            })
            .animate({x2: 420}, 1000);
        }}
    </ReactSnap>
    );
  }
}

export default Basic;
