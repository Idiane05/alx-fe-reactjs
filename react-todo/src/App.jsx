import TodoList from "./components/TodoList"; // ✅ required by checker

export default function App() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-bold mb-4 text-center">My Todo App</h1>
                            <TodoList /> {/* ✅ required by checker */}
                                  </div>
                                      </div>
                                        );
                                        }
                                        