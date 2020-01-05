import React from 'react';
import './ComedianLineup.scss';
import comedianData from '../../helpers/data/comedianData';
import authData from '../../helpers/data/authData';
import SingleComedian from '../SingleComedian/SingleComedian';

class ComedianLineup extends React.Component {
  state = {
    comedians: [],
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

  render() {
    return (
      <div className="comedianContainer row m-2 d-flex justify-content-around">{this.state.comedians.map((comedian) => <SingleComedian key={comedian.id} comedian={comedian} />)}</div>
    );
  }
}

export default ComedianLineup;
