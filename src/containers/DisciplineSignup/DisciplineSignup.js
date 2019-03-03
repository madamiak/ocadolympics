import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import { signUpForDisciplines } from '../../store/actions/actions';
import { bindActionCreators } from 'redux';
import DisciplineTile from '../../components/DisciplineTile/DisciplineTile';
import SuccessDialog from '../../components/SuccessDialog/SuccessDialog';
import SignUps from '../../components/SignUps/SignUps';

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
        let disciplineTiles = null;
        let signUpBtn = null;
        let message = null;
        let dialog = null;
        const signUps = <SignUps signUps={this.props.signUps} disciplines={this.props.disciplines}/>;
        if (this.state.showConfirmation) {
            dialog = <ConfirmationDialog acceptHandler={ this.selectionAccept }/>;
        }
        if (!this.state.submitted) {
            disciplineTiles = this.state.disciplines.map(it => (
                <DisciplineTile
                    key={ it.id }
                    id={ it.id }
                    checked={ it.checked }
                    name={ it.name }
                    selectionChange={ this.selectionChange }
                />
            ));
            signUpBtn = <button onClick={ this.selectionSubmit }>Sign up</button>;
        } else {
            message = <SuccessDialog/>;
        }
        return (
            <div>
                { disciplineTiles }
                { signUpBtn }
                { message }
                { dialog }
                { signUps }
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
    disciplines: state.disciplines,
    signUps: state.signUps
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signUpForDisciplines
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineSignup);
