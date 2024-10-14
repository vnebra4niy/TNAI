import React from 'react';

function Title() {
    return (
        <article>
            <h2>This is the Title</h2>
        </article>
    );
}

function Body() {
    return (
        <section>
            <p>This is the body content of the card.</p>
        </section>
    );
}

function Card() {
    return (
        <div>
            <Title />
            <Body />
        </div>
    );
}

export default Card;