/* eslint-disable max-len */
import React from 'react';
import './ComedianLineup.scss';
import comedianData from '../../helpers/data/comedianData';
import authData from '../../helpers/data/authData';
import SingleComedian from '../SingleComedian/SingleComedian';
import ComedianForm from '../ComedianForm/ComedianForm';

class ComedianLineup extends React.Component {
  state = {
    comedians: [],
    showComedianForm: false,
    comedianToEdit: {},
    editMode: false,
  }

  componentDidMount() {
    this.getComedians();
  }

  getComedians = () => {
    comedianData.getComediansByUid(authData.getUid())
      .then((comedians) => {
        this.setState({ comedians });
      })
      .catch((error) => console.error(error));
  }

  addComedian = (newComedian) => {
    comedianData.saveComedian(newComedian)
      .then(() => {
        this.getComedians();
        this.setState({ showComedianForm: false });
      })
      .catch((error) => console.error(error));
  }

  updateComedian = (comedianId, updatedComedian) => {
    comedianData.updateComedian(comedianId, updatedComedian)
      .then(() => {
        this.getComedians();
        this.setState({ editMode: false, showComedianForm: false });
      })
      .catch((error) => console.error(error));
  }

  deleteComedian = (comedianId) => {
    comedianData.deleteComedian(comedianId)
      .then(() => {
        this.getComedians();
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showComedianForm: true });
  }

  setComedianToEdit = (comedian) => {
    this.setState({ comedianToEdit: comedian });
  }


  setShowComedianForm = (e) => {
    e.preventDefault();
    this.setState({ showComedianForm: true });
  }

  closeForm = (e) => {
    e.preventDefault();
    this.setState({ showComedianForm: false });
  }

  render() {
    return (
      <div>
        <button className="btn btn-info m-2" onClick={this.setShowComedianForm}>Add New Comedian</button>
        { this.state.showComedianForm && <ComedianForm addComedian={this.addComedian} closeForm={this.closeForm} editMode={this.state.editMode} comedianToEdit={this.state.comedianToEdit} updateComedian={this.updateComedian} />}
      <div className="comedianContainer row m-2 d-flex justify-content-around">{this.state.comedians.map((comedian) => <SingleComedian key={comedian.id} comedian={comedian} setEditMode={this.setEditMode} setComedianToEdit={this.setComedianToEdit} deleteComedian={this.deleteComedian} />)}</div>
        </div>
    );
  }
}

export default ComedianLineup;
