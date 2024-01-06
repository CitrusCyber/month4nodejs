import React from 'react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import ModelsSection from "./components/ModelsSection";
import Footer from './components/Footer';
import Contacts from "./components/Contacts";
import './index.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ModelsSection/>
            <Section />
            <Footer />
            <Contacts/>
        </div>
    );
}

export default App;
