// src/App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <h1>User Profiles</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Software engineer who enjoys cooking and traveling" 
      />
      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Passionate about music and outdoor adventures" 
      />

      <Footer />
    </div>
  );
}

export default App;
