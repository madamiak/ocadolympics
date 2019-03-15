import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toast from '../Toast/Toast';
import { removeToast } from '../../store/actions/actions';

const StyledToasts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Toasts = (props) => {
  const toasts = props.toasts ? props.toasts : [];
  return (
    <StyledToasts>
      { toasts.map(it =>
        <Toast key={ it.id } dismissHandler={ () => props.actions.removeToast(it.id) }>
          {it.content}
        </Toast>
      ) }
    </StyledToasts>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeToast }, dispatch)
});

const mapStateToProps = state => ({
  toasts: state.toasts
});

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);
