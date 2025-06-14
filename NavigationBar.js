import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100 dark:bg-gray-900 shadow text-sm">
      <Link to="/" className="hover:underline">🏠 الرئيسية</Link>
      <Link to="/friends" className="hover:underline">👥 الأصدقاء</Link>
      <Link to="/settings" className="hover:underline">⚙️ الخصوصية</Link>
      <Link to="/search" className="hover:underline">🔍 البحث</Link>
    </nav>
  );
}
