import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import CoinDetail from "./components/CoinDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Table /> <Pagination /> </>} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
