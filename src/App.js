import { nodeQuest } from './data/node_data.js';
import { oopQuest } from './data/oop_data.js';
import { tableContents } from './data/tableContents.js';
import Main from './Components/Main.js';

function App() {
  return (
    <div className="App">
      <Main tableContents={ tableContents } nodeQuestions={ nodeQuest } oopQuestions={ oopQuest }/>
    </div>
  );
}

export default App;
