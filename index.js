import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchUsers, UserProfile } from "./components/SearchUsers";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1 className="p-4">🎉 مرحبًا بك في جدار الذكريات</h1>} />
        <Route path="/search" element={<SearchUsers />} />
        <Route path="/user/:uid" element={<UserProfile />} />
        {/* يمكنك إضافة المزيد من الصفحات هنا */}
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
