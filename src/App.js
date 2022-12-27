import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardTitle from './components/CardTitle';
import CardContent from './components/CardContent';
import CardButton from './components/CardButton';
function App() {
  const urlImage = 'https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg';
  return (
    <div className="container">
      <Card urlImg={urlImage}>
        <CardTitle>Card title</CardTitle>
        <CardContent>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardContent>
        <CardButton>Go somewhere</CardButton>
      </Card>
      <div className="card">
        <CardTitle>Special title treatment</CardTitle>
        <CardContent>
          With supporting text below as a natural lead-in to additional content.
        </CardContent>
        <CardButton>Go somewhere</CardButton>
      </div>
    </div>
  );
}

export default App;
