import "./App.css";

import ClassCounter from "./components/state-examples/ClassCounter";
import ClassLifecycle from "./components/lifecycle-examples/ClassLifecycle";
import ClassTextInput from "./components/state-examples/ClassTextInput";
import ClassToggleButton from "./components/state-examples/ClassToggleButton";
import Counter from "./components/props-examples/Counter";
import FunctionalCounter from "./components/state-examples/FunctionalCounter";
import FunctionalLifecycle from "./components/lifecycle-examples/FunctionalLifecycle";
import Navbar from "./components/nav/Navbar";
import TextInput from "./components/state-examples/TextInput";
import ToggleButton from "./components/state-examples/ToggleButton";
import UserProfile from "./components/props-examples/UserProfile";
import Welcome from "./components/props-examples/Welcome";

function App() {
  //create a user object for UserProfile component
  const user = { name: "John Doe", email: "john.doe@example.com", age: 28 };

  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="props">
          <div className="section-heading">
            <h1>Props</h1>
          </div>

          <div className="example">
            <h2 className="example-heading">Example 1: Basic Props</h2>
            <Welcome name="John" />
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 2: Props in Functional Components
            </h2>
            <UserProfile user={user} />
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 3: Props in Class Components
            </h2>
            <Counter count={5} />
          </div>
        </section>
        <section id="state">
          <div className="section-heading">
            <h1>State</h1>
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 1: Functional Components with useState
            </h2>
            <FunctionalCounter />
          </div>
          <div className="example">
            <h2 className="example-heading">Example 2: Togglebutton</h2>
            <ToggleButton />
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 3: Text input with onChange handler
            </h2>
            <TextInput />
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 4: Class Components with this.state
            </h2>
            <ClassCounter />
          </div>
          <div className="example">
            <h2 className="example-heading">Example 5: Class ToggleButton</h2>
            <ClassToggleButton />
          </div>
          <div className="example">
            <h2 className="example-heading">Example 6: Class Text input</h2>
            <ClassTextInput />
          </div>
        </section>
        <section id="lifecycle">
          <div className="section-heading">
            <h1>Lifecycle</h1>
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 1: Function lifecycle using useEffect the Hook
            </h2>
            <FunctionalLifecycle />
          </div>
          <div className="example">
            <h2 className="example-heading">
              Example 1: Class lifecycle methods
            </h2>
            <ClassLifecycle />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
