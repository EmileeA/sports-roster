import React from 'react';
import PropTypes from 'prop-types';
import comedianShape from '../../helpers/propz/comedianShape';
import './SingleComedian.scss';

class SingleComedian extends React.Component {
  static propTypes = {
    comedian: comedianShape.comedianShape,
    setEditMode: PropTypes.func,
    setComedianToEdit: PropTypes.func,
    deleteComedian: PropTypes.func,
  }

  setEditMode = (e) => {
    const { setEditMode, setComedianToEdit, comedian } = this.props;
    e.preventDefault();
    setEditMode(true);
    setComedianToEdit(comedian);
  }

  deleteComedianEvent = (e) => {
    e.preventDefault();
    const { deleteComedian, comedian } = this.props;
    deleteComedian(comedian.id);
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
        <div className="card-footer d-flex justify-content-around">
        <button className="btn btn-outline-info" onClick={this.deleteComedianEvent}>Delete</button>
        <button className="btn btn-outline-info" onClick={this.setEditMode}>Edit</button>
      </div>
    </div>
    </div>
    </div>
    );
  }
}

export default SingleComedian;
