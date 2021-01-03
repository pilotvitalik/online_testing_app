import { questTitle } from './data/node_data.js';

import Common from './Components/Common.js';

function App() {
  return (
    <div className="App">
      <Common questions={ questTitle }/>
    </div>
  );
}

export default App;
