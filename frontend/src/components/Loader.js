// import React from 'react'
// import { Spinner } from 'react-bootstrap'

// const Loader = () => {
//     return (
//         <Spinner animation="border" variant="info" size="lg"/>
//     )
// }

// export default Loader

import React from "react";
// import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (

        <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loader;