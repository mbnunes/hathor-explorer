/**
 * Copyright (c) Hathor Labs and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';
import colors from '../index.scss';

const Loading = (props) => {

  const slowDelay = props.slowDelay || 3000;

  const [slowLoad, setSlowLoad] = useState(false);

  useEffect(() => {
    const updateSlowLoad = setTimeout(() => setSlowLoad(true), slowDelay);

    return () => { clearTimeout(updateSlowLoad) }
  })

  return (
    <div className="loading-wrapper">
      <ReactLoading {...props} />
      { slowLoad ? <span>Still loading... Please, be patient.</span> : null }
    </div>
  ) 
} 

Loading.defaultProps =  {
  type: 'spin',
  color: colors.purpleHathor,
  delay: 500
}

export default Loading;
