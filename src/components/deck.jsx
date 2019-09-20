import React from "react";
import Card from './card';
import If from './if/if';

class Deck extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.deck.records.map( (card) =>

          <If condition={card.title}>
          <div className="card">
            <header><h3>{card.title}</h3></header>
            <div className="content">{card.copy}</div>
            <figure>
              <img src={card.media.href} alt={card.media.alt} />
              <figcaption>{card.media.title}</figcaption>
            </figure>
            <nav className="links">
              <ul>
                {card.links.map( (link,i) => (
                  <Card link = {link} i = {i} />
                ))}
              </ul>
            </nav>
          </div>
          </If>

        )}
      </React.Fragment>
    );
  }
}

export default Deck;