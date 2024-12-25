import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicForm from "./components/TopicForm";
import MessagesViewer from "./components/MessagesViewer";
import TopicManager from "./components/TopicManager";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/topics" element={<TopicManager/>}/>
          <Route path="/producer" element={<TopicForm/>}/>
          <Route path="/consumer" element={<MessagesViewer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
