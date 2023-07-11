import image from './logo.png'
import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
   <div className='App'>
      <div className="Back">
          <div className='App-logo'>
              <img className='logo' src={ image } alt="icon"/>
          </div>
         
            <h1>TO-DO LIST</h1>
         
          
          <ToDoList/>
      </div>
    </div>
  );
}

export default App;
