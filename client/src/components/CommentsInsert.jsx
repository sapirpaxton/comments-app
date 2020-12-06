import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`;

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`;

class CommentsInsert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message: ''
        }
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value;
        this.setState({ email })
    };

    handleChangeInputMessage = async event => {
        const message = event.target.value;
        this.setState({ message })
    };

    handleIncludeComment = async () => {
        const { email, message } = this.state;
        const payload = { email, message };

        await api.insertComment(payload).then(res => {
            this.setState({
                email: '',
                message: ''
            });
            if(this.props.onSubmitSuccess) {
                this.props.onSubmitSuccess(payload);
            }
        })
    };

    render() {
        const { email, message } = this.state;
        return (
            <Wrapper>
                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <Label>Message: </Label>
                <InputText
                    type="text"
                    value={message}
                    onChange={this.handleChangeInputMessage}
                />

                <Button onClick={this.handleIncludeComment}>Submit</Button>
            </Wrapper>
        )
    }
}

export default CommentsInsert;