import React from 'react';
import reactDom from 'react-dom';
it('renders without crashing',()=>{
    const div =document.createElement('div');
    reactDom.render("<h1>Application Testing</h1>",div);
    reactDom.unmountComponentAtNode(div);
});