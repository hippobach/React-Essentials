import Header from './components/Header/Header';
import Example from './components/Examples/Example';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </div>
  );
}

export default App;
