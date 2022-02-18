import logo from './logo.svg';
import './App.css';
import AppBar from './profile/appBar';
import Profile from './profile/profile';
import Ships from './profile/ships';

function App() {
  return (
<>
    <AppBar/>
    <Profile src="Elon_Musk_Royal_Society.jpg" name="ELON MUSK" profession="Entrepreneur" bio="im the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. With an estimated net worth of around US$243 billion.." />
    <Profile style={{marginTop:"50px"}}/>
    <Ships/>
</>
  );
}

export default App;
