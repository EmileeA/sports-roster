import './ComedianForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class ComedianForm extends React.Component {
  static propTypes = {
    addComedian: PropTypes.func,
    closeForm: PropTypes.func,
  }

  state = {
    comedianName: '',
    comedianPosition: '',
    comedianImg: '',
  }

  saveComedianEvent = (e) => {
    e.preventDefault();
    const { addComedian } = this.props;
    const newComedian = {
      name: this.state.comedianName,
      position: this.state.comedianPosition,
      imageUrl: this.state.comedianImg,
      uid: authData.getUid(),
    };
    addComedian(newComedian);
  }

nameChange = (e) => {
  e.preventDefault();
  this.setState({ comedianName: e.target.value });
}

positionChange = (e) => {
  e.preventDefault();
  this.setState({ comedianPosition: e.target.value });
}

imgChange = (e) => {
  e.preventDefault();
  this.setState({ comedianImg: e.target.value });
}

render() {
  return (
    <div className='popup'>
      <div className='inner'>
      <form className='col-12 offset-0 comedianForm'>
      <div className="form-group">
        <label htmlFor="comedian-name">Comedian Name:</label>
        <input
          type="text"
          className="form-control"
          id="comedian-name"
          placeholder="Enter comedian's name"
          value={this.state.comedianName}
          onChange={this.nameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="comedian-position">Comedian Position:</label>
        <input
          type="text"
          className="form-control"
          id="comedian-position"
          placeholder="Enter comedian's position"
          value={this.state.comedianPosition}
          onChange={this.positionChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="comedian-img">Comedian Image Url:</label>
        <input
          type="text"
          className="form-control"
          id="comedian-image"
          placeholder="Insert URL for the comedian's image"
          value={this.state.comedianImg}
          onChange={this.imgChange}
        />
      </div>
      </form>
        <div className="justify-content-around row d-flex"><button className="btn btn-dark" onClick=
        {this.saveComedianEvent}>Save</button>
        <button className="btn btn-dark" onClick={this.props.closeForm}>Close</button>
        </div>
      </div>
    </div>
  );
}
}

export default ComedianForm;
