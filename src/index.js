import React from 'react';

import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

ReactDom.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);