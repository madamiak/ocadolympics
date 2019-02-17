import React, { Component } from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';

class DisciplineSignup extends Component {

  constructor(props) {
    super(props);
    const disciplines = props.disciplines || [];
    this.state = {
      showConfirmation: false,
      submitted: false,
      disciplines: disciplines.map(it => ({
        id: it.id,
        name: it.name,
        checked: false
      }))
    }
  }

  render() {
    let disciplines = null;
    let signUpBtn = null;
    let message = <p className='success'>You have successfully signed up for selected disciplines</p>;
    let dialog = null;
    if(this.state.showConfirmation) {
        dialog = <ConfirmationDialog acceptHandler={this.selectionAccept}/>;
    }
    if(!this.state.submitted) {
      disciplines = this.state.disciplines.map(it => (
        <div key={it.id} className='discipline'>
           <input type="checkbox" checked={it.checked} id={it.id} onChange={this.selectionChange}/>
           <label>{it.name}</label>
        </div>
      ));
      signUpBtn = <button onClick={this.selectionSubmit}>Sign up</button>;
      message = null;
    }

    return (
      <div>
        {disciplines}
        {signUpBtn}
        {message}
        {dialog}
      </div>
    );
  }

  selectionChange = (event) => {
    const disciplines = this.state.disciplines.slice();
    const discipline = disciplines.filter(it => it.id === event.target.id)[0];
    discipline.checked = event.target.checked;
    this.setState({disciplines: disciplines});
  }

  selectionSubmit = () => {
    this.setState({showConfirmation: true});
  }

  selectionAccept = () => {
    this.setState({
        showConfirmation: false,
        submitted: true
    });
  }
}

export default DisciplineSignup;
