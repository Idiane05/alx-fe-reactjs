import { Link, Routes, Route, Outlet } from "react-router-dom";

// Example subcomponents
function ProfileDetails() {
  return <div><h3>Profile Details</h3><p>This is your profile details page.</p></div>;
  }

  function ProfileSettings() {
    return <div><h3>Profile Settings</h3><p>Here you can change your settings.</p></div>;
    }

    export default function Profile() {
      return (
          <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>

                      <nav className="space-x-4 mb-4">
                              <Link to="details" className="text-blue-500 hover:underline">
                                        Details
                                                </Link>
                                                        |
                                                                <Link to="settings" className="text-blue-500 hover:underline">
                                                                          Settings
                                                                                  </Link>
                                                                                        </nav>

                                                                                              {/* Nested routes */}
                                                                                                    <Routes>
                                                                                                            <Route path="details" element={<ProfileDetails />} />
                                                                                                                    <Route path="settings" element={<ProfileSettings />} />
                                                                                                                          </Routes>

                                                                                                                                <Outlet />
                                                                                                                                    </div>
                                                                                                                                      );
                                                                                                                                      }
                                                                                                                                      