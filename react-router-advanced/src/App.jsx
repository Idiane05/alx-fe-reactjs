import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./pages/BlogPost"; // ✅ Added import

export default function App() {
  return (
      <Router>
            <nav className="p-4 bg-gray-200 flex gap-4">
                    <Link to="/">Home</Link>
                            <Link to="/profile">Profile</Link>
                                    <Link to="/blog/1">Blog Example</Link> {/* ✅ Example link */}
                                          </nav>

                                                <Routes>
                                                        <Route path="/" element={<Home />} />
                                                                <Route path="/login" element={<Login />} />

                                                                        {/* ✅ Dynamic blog route */}
                                                                                <Route path="/blog/:id" element={<BlogPost />} />

                                                                                        <Route
                                                                                                  path="/profile/*"
                                                                                                            element={
                                                                                                                        <ProtectedRoute>
                                                                                                                                      <Profile />
                                                                                                                                                  </ProtectedRoute>
                                                                                                                                                            }
                                                                                                                                                                    >
                                                                                                                                                                              <Route path="details" element={<ProfileDetails />} />
                                                                                                                                                                                        <Route path="settings" element={<ProfileSettings />} />
                                                                                                                                                                                                </Route>
                                                                                                                                                                                                      </Routes>
                                                                                                                                                                                                          </Router>
                                                                                                                                                                                                            );
                                                                                                                                                                                                            }
                                                                                                                                                                                                            