import SetRoutes from "./routes/routes";
import ListaDeNotas from "./components/listadenotas";
import { Dashboard } from "./public/client/admin/dashboard/dasboard";

import { CustonProvider } from "./shared/contexts";

export const App = () => {

  return (

    <div className="App">
      <CustonProvider>
        <Dashboard />
        <SetRoutes />
        <ListaDeNotas />
      </CustonProvider>
    </div>
  );
}

//https://www.youtube.com/watch?v=c5qsGc5p38I


