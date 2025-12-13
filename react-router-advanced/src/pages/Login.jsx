export default function Login() {
      const handleLogin = () => {
          localStorage.setItem("user", "loggedIn");
              window.location.href = "/profile";
                };
                  return <button onClick={handleLogin}>Login</button>;
                  }

