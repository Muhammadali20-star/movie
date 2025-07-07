import MainRouter from "./pages";
import { Suspense } from "./utils";

const App = () => {

  return (
    <div className="dark:bg-black min-h-screen dark:text-white  bg-slate-100">
      <Suspense>
        <MainRouter />
      </Suspense>
    </div>
  );
};

export default App;
