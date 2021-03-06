import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToast, fetchSignUps, signUpForDisciplines } from '../../store/actions/actions';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import DisciplineTiles from '../../components/DisciplineTiles/DisciplineTiles';
import DisciplineSignupActions from '../../components/DisciplineSignupActions/DisciplineSignupActions';
import DisciplineSignupLayout from '../../components/DisciplineSignupLayout/DisciplineSignupLayout';
import SuccessDialog from '../../components/SuccessDialog/SuccessDialog';

export class DisciplineSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showConfirmation: false,
      disciplines: props.disciplines
    }
  }

  componentDidMount() {
    this.props.fetchSignUps();
  }

  render() {
    return (
      <DisciplineSignupLayout>
        <DisciplineTiles
          disciplines={ this.state.disciplines }
          selectionChange={ this.selectionChange }
        />
        <DisciplineSignupActions
          disabled={ (this.selectedDisciplines().length === 0) }
          acceptHandler={ this.selectionSubmit }
        />
        <ConfirmationDialog
          show={ this.state.showConfirmation }
          signUps={ this.userWithDisciplines() }
          disciplines={ this.state.disciplines }
          acceptHandler={ this.selectionAccept }
          cancelHandler={ this.selectionRefuse }
        />
      </DisciplineSignupLayout>
    );
  }

  selectionChange = (event) => {
    const disciplines = this.state.disciplines.slice();
    const discipline = disciplines.filter(it => it.id === event.target.id)[0];
    discipline.checked = !discipline.checked;
    this.setState({ disciplines: disciplines });
  };

  selectionSubmit = () => {
    this.setState({ showConfirmation: true });
  };

  selectionAccept = () => {
    this.disciplinesSignUp();
    this.setState({ showConfirmation: false });
    this.props.addToast(<SuccessDialog/>);
  };

  selectionRefuse = () => {
    this.setState({ showConfirmation: false });
  };

  disciplinesSignUp = () => {
    if (this.props.signUpForDisciplines) {
      this.props.signUpForDisciplines(this.userWithDisciplines());
    }
  };

  userWithDisciplines = () => {
    return {
      [this.props.login]: this.selectedDisciplines()
    };
  };

  selectedDisciplines() {
    return this.state.disciplines
      .filter(it => it.checked)
      .map(it => it.id)
  }
}

const mapStateToProps = state => ({
  login: state.login,
  disciplines: state.disciplines.map(it => ({
    id: it.id,
    name: it.name,
    checked: false
  })),
  signUps: state.signUps,
  submitted: state.submitted
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToast,
  fetchSignUps,
  signUpForDisciplines
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineSignup);
