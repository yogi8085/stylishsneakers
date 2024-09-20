
import './App.css';
import Main from './components/Main';
import Preview from './components/Preview';

function App() {
  return (
    <>
    <div className="App">
     <div className='container.fluid'>
      <div className='row'>
        <div className='col-8'>
            <Main />
          </div>
          <div className='col-4'>
            <Preview />
        </div>
      </div>
     </div>
  </div>
  </>
  );
}

export default App;
