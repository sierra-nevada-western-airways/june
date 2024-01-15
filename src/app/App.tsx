import { Outlet } from "react-router-dom";
import useCreateStore from "../hooks/use-create-store/UseCreateStore";
import {
  ApplicationContext,
  applicationReducer,
  defaultApplicationState,
} from "../stores";

const App: React.FC = () => {
  const store = useCreateStore(defaultApplicationState(), applicationReducer);

  return (
    <ApplicationContext.Provider value={store}>
      <header>
        <nav>
          <h1>Sierra Nevada Western Airways</h1>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ApplicationContext.Provider>
  );
};

export default App;
