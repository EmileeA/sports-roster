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
        { this.state.showComedianForm && <ComedianForm addComedian={this.addComedian} closeForm={this.closeForm} />}
        <div className="comedianContainer row m-2 d-flex justify-content-around">{this.state.comedians.map((comedian) => <SingleComedian key={comedian.id} comedian={comedian} />)}</div>
        </div>
    );
  }
}

export default ComedianLineup;
