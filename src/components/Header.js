import React, { useState} from 'react';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if(currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const pageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} pageChange={pageChange} />
            {renderPage()}
        </div>
    );
}

