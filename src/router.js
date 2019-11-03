import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/NotFound';
import Detail from './components/Detail';
const routes = [
    {
        path:'/about',
        exact : true,
        main : ()=><About />
    },
    {
        path:'/contact',
        exact : true,
        main : ()=><Contact />
    },
    {
        path:'',
        exact : true,
        main : ()=><NotFound />
    }
    
];
export default routes;