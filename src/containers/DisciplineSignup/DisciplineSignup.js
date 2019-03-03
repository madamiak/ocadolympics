import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpForDisciplines } from '../../store/actions/actions';
import { getSignUps } from '../signUpsRepository';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import SuccessDialog from '../../components/SuccessDialog/SuccessDialog';
import SignUps from '../../components/SignUps/SignUps';
import DisciplineTiles from '../../components/DisciplineTiles/DisciplineTiles';

export class DisciplineSignup extends Component {

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
        const signUps = getSignUps();
        return (
            <div>
                <DisciplineTiles
                    show={ !this.state.submitted }
                    disciplines={ this.state.disciplines }
                    selectionChange={ this.selectionChange }
                />
                <button hidden={ this.state.submitted } onClick={ this.selectionSubmit }>Sign up</button>
                <SuccessDialog show={ this.state.submitted }/>
                <ConfirmationDialog show={ this.state.showConfirmation } acceptHandler={ this.selectionAccept }/>
                <SignUps signUps={ signUps } disciplines={ this.props.disciplines }/>
            </div>
        );
    }

    selectionChange = (event) => {
        const disciplines = this.state.disciplines.slice();
        const discipline = disciplines.filter(it => it.id === event.target.id)[0];
        discipline.checked = event.target.checked;
        this.setState({ disciplines: disciplines });
    };

    selectionSubmit = () => {
        this.setState({ showConfirmation: true });
    };

    selectionAccept = () => {
        this.disciplinesSignUp();
        this.setState({
            showConfirmation: false,
            submitted: true
        });
    };

    disciplinesSignUp = () => {
        if (this.props.signUpForDisciplines) {
            const selectedDisciplines = this.state.disciplines
                .filter(it => it.checked)
                .map(it => it.id);
            this.props.signUpForDisciplines(selectedDisciplines);
        }
    }
}

const mapStateToProps = state => ({
    disciplines: state.disciplines
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signUpForDisciplines
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineSignup);
