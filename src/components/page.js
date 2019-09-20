import React from 'react';
import Deck from './deck';

const Page = (props) => {
  const content = props.content || [];

  return (
    <>
      {content.map((deck, i) => (

        <section className="deck">
           <header><h2>{deck.title}</h2></header>

        <Deck
          deck = {deck}
        />

        </section>

      ))}
    </>
  );
};

export default Page;
