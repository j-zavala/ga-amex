import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Dentist Website</h1>
                <p>Welcome to my dentist website</p>
                <div className="croc-teeth">
                    <img src='/images/david-clode--z9RjfUAI-8-unsplash.jpg' alt="crocodile teeth" width="200px" height="200px" />
                </div>
            </div>
        );
    }
}

export default Home;

// import React, { Component } from 'react';

// class Home extends Component {
//     render() {
//         return (
//             <main>
//                 <div className="tooth">
//                     <div className="image-container">
//                         <img src='/toothLogo.png' alt="tooth" /></div>
//                     <p className="firstSentence">
//                         Welcome to my dentist website.
//                     </p>
//                 </div>
//             </main>
//         );
//     }
// }

// export default Home;