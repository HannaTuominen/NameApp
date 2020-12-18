import React from 'react';

const layout = ( props ) => (
  <aux>
    <div>Toolbar etc</div>
    <main>
      {props.children}
    </main>
  </aux>
);

export default layout;
