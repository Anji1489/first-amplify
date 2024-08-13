import React from 'react';
import './App.css';

import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Quiz from './Quiz';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut }) => (
          <main>
            <header className='App-header'>
              <Quiz />
              <button 
                onClick={signOut} 
                style={{ 
                  margin: '20px', 
                  fontSize: '0.8rem', 
                  padding: '5px 10px',
                  cursor:'pointer', 
                  marginTop: '20px'
                }}
              >
                Sign Out
              </button>
            </header>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);



























// import './App.css';
// import React from 'react';
// import {Amplify} from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';


// Amplify.configure(awsconfig);
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>My content</h2>
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App);
