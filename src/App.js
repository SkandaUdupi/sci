import "./App.css";
import Header from "./Components/Header/Header";
import University from "./Components/University/University";
import MentorList from "./Components/MentorList/MentorList";
import AdvisorList from "./Components/Advisor/AdvisorList";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <University />
      <MentorList />
      <AdvisorList />
      <Footer />
    </div>
  );
}

export default App;
