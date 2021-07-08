import logo from './logo.svg';
import './App.css';
import ProjectHeader from './Components/ProjectHeader/ProjectHeader';
import { createContext, useState } from 'react';

export const TaskContext = createContext();

function App() {

  const [newTaskDataN, setNewTaskDataN] = useState([])

  return (
    <div >
      <TaskContext.Provider value={[newTaskDataN, setNewTaskDataN]}>
        <ProjectHeader></ProjectHeader>
      </TaskContext.Provider>

    </div>
  );
}

export default App;
