import React from "react";
import PropTypes from 'prop-types';

/**
 * This is the card component
 */
class Card extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li key={this.props.i}><a className={this.props.link.type} href={this.props.link.href} title={this.props.link.title}>{this.props.link.title}</a></li>
      </React.Fragment>
    );
  }
}

Card.propTypes = {
  link: PropTypes.string,
};

export default Card;
