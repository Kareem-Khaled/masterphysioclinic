import { RouterProvider, useRouter } from './context/RouterContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Techniques from './pages/Techniques';
import Contact from './pages/Contact';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/team':
      case '/ourteam':
        return <Team />;
      case '/techniques':
        return <Techniques />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
