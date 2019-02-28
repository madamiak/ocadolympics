import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import { signUpForDisciplines } from '../../store/actions/actions';
import { bindActionCreators } from 'redux';

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
        let disciplines = null;
        let signUpBtn = null;
        let message = <p className='success'>You have successfully signed up for selected disciplines</p>;
        let dialog = null;
        let signUps = [];
        Object.keys(this.props.signUps || {}).forEach(user => {
            signUps.push(
                <div key={user}>
                    {user + '\'s sign ups:'}
                    {this.props.signUps[user].map(it => (
                        <div key={it} className='signup'>
                            {this.state.disciplines.filter(d => d.id === it)[0].name}
                        </div>
                    ))}
                </div>
            )
        });
        if (this.state.showConfirmation) {
            dialog = <ConfirmationDialog acceptHandler={this.selectionAccept}/>;
        }
        if (!this.state.submitted) {
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
                {signUps}
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
