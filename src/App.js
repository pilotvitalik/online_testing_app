import { questTitle } from './data/node_data.js';

import Main from './Components/Main.js';

function App() {
  return (
    <div className="App">
      <Main questions={ questTitle }/>
    </div>
  );
}

export default App;
