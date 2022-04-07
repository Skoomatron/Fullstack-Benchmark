import React from 'react';

const BodyData = (props) => {


  let expand = false;

  let longData = props.data.data[props.index1].body;
  let shortData = longData.split('').slice(0, 144).join('');
  console.log(shortData)
  let longFormattedPost = longData.split('\n');
  let shortFormattedPost = shortData.split('\n');

  console.log(longFormattedPost, shortFormattedPost, 'this is data')

  return (
    <div>
    </div>
  )
}

export default BodyData;