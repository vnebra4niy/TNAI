import React from 'react';

function Header() {
    return (
        <header>
            <h1>Header</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <p>Footer</p>
        </footer>
    );
}

function Container() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default Container;