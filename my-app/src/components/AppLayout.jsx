import React from 'react';

function Header() {
    return (
        <h2>Header</h2>
    );
}

function MainContent() {
    return (
        <p>main content</p>
    );
}

function Footer() {
    return (
        <small>Footer</small>
    );
}

function AppLayout() {
    return (
        <article>
            <Header/>
            <MainContent/>
            <Footer/>
        </article>
    );
}

export default AppLayout;