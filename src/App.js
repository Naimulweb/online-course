import React from 'react';
import './App.css';
import courses from './images/course';
import Course from './components/Course/Course';
import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [purchased, setPurchased] = useState([])

  const handlePurchase = (course) => {
    setPurchased([...purchased, course])
  }

  let totalPrice = 0;
  for (let i = 0; i < purchased.length; i++) {
    totalPrice += purchased[i].price;
  }

  return (
    <div className="App">
      <header className="container">
        <Navigation length={purchased.length} totalPrice={totalPrice} />
      </header>

      <main>
        <div className="container">
          <div className="row">
            {
              courses.map(course => <Course course={course} handlePurchase={handlePurchase} key={course.name} />)
            }
          </div>
        </div>
      </main>

      <footer style={{ padding: '10px' }}>&copy; Sadman Sakib Mugdho</footer>
    </div>
  );
}

export default App;
