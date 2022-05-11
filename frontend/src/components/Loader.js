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
        // <Spinner
        //     animation="border"
        //     role="status"

        //     style={{
        //         width: "100px",
        //         height: "100px",
        //         margin: "auto",
        //         display: "block",
        //     }}
        // >
        //     <span className='sr-only'>loading...</span>
        // </Spinner>
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loader;