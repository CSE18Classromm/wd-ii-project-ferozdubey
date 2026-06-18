import "./App.css";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarCard";
import cars from "./data/cars";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Welcome To Toyota Motors</h1>
        <p>Explore Toyota's Best SUVs & Sedans</p>
      </section>

      <div className="container">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}

export default App;