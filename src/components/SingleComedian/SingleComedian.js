import React from 'react';
// import PropTypes from 'prop-types';
import comedianShape from '../../helpers/propz/comedianShape';
import './SingleComedian.scss';

class SingleComedian extends React.Component {
  static propTypes = {
    comedian: comedianShape.comedianShape,
  }


  render() {
    const { comedian } = this.props;

    return (
    <div className="card text-black bg-light comedianCard">
      <img className="card-img-top" src={comedian.imageUrl} alt={comedian.name} />
      <div className="card-body">
        <h5 className="card-title">{comedian.name}</h5>
        <p className="card-text">Position: {comedian.position}</p>
      </div>
    </div>
    );
  }
}

export default SingleComedian;
