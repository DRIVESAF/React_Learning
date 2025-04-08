import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterZustand from "./components/CounterZustand";
import CounterUseState from "./components/CounterUseState";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <CounterUseState />
      <TodoList />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <CounterZustand />

    </div>
  );
};

export default App;
