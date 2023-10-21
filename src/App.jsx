
import travelLogo from './assets/world100.png'
import './App.css'

import Navbar from './components/Navbar';
import Card from './components/Card';
import trips from './trips.json';

function App() {
  const tripData = trips.map(trip => <Card key={trip.id} trip={trip} />)
  return (
    <>
      <Navbar />
      <main>
        {tripData}
      </main>
    </>
  )
}

export default App
