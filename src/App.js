import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import Auth from "./components/Auth";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { store } from "./store";

function AppContent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/header" element={<Header />}>
          <Route path="todolist" element={<TodoList />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
