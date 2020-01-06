import React from 'react';
import PropTypes from 'prop-types';
import comedianShape from '../../helpers/propz/comedianShape';
import './SingleComedian.scss';

class SingleComedian extends React.Component {
  static propTypes = {
    comedian: comedianShape.comedianShape,
    setEditMode: PropTypes.func,
    setComedianToEdit: PropTypes.func,
  }

  setEditMode = (e) => {
    const { setEditMode, setComedianToEdit, comedian } = this.props;
    e.preventDefault();
    setEditMode(true);
    setComedianToEdit(comedian);
  }

  render() {
    const { comedian } = this.props;

    return (
      <div>
    <div className="card text-black bg-light comedianCard">
      <img className="card-img-top" src={comedian.imageUrl} alt={comedian.name} />
      <div className="card-body">
        <h5 className="card-title">{comedian.name}</h5>
        <p className="card-text">Position: {comedian.position}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-info" onClick={this.setEditMode}>Edit</button>
      </div>
    </div>
    </div>
    );
  }
}

export default SingleComedian;
