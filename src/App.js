import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="container">
      <Card className="card">
        <CardTitle>Card title</CardTitle>
        <CardContent>Some quick example text to build on the card title and make up the bulk of the card's content.</CardContent>
        <CardButton>Go somewhere</CardButton>
        </Card>
    </div>
  );
}

export default App;
