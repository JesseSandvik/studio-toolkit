import Button from './components/atoms/button/Button';
import Footer from './components/organisms/footer/Footer';
import Header from './components/organisms/header/Header';

const App = () => {
  return (
    <div className="App">
      <Header><Button>login</Button></Header>
      <Footer>&copy; body designs {new Date().getFullYear()}</Footer>
    </div>
  );
}

export default App;
