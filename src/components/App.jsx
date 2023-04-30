import { Navigate, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Tweets from "pages/Tweets";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
