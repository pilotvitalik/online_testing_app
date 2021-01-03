import { questTitle, answers } from './data/node_data.js';

import Common from './Components/Common.js';

function App() {
  console.log(questTitle);
  console.log(answers);
  return (
    <div className="App">
      <Common/>
    </div>
  );
}

export default App;
