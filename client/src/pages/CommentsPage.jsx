import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import CommentsInsert from '../components/CommentsInsert';
import CommentsList from '../components/CommentsList';

import api from "../api";

class CommentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    createNewComments(newComment) {
        let allData = this.state.comments;
        allData.push(newComment);
        return allData;
    }

    onSubmitSuccess(newComment) {
        this.setState({comments: this.createNewComments(newComment)});
    }

    componentDidMount = async () => {
        await api.getAllComments().then(comments => {
            this.setState({
                comments: comments.data.data
            })
        })
    };

    render() {
        return (
            <Grid container direction={"column"}>
                <Grid item>
                    <CommentsInsert onSubmitSuccess={this.onSubmitSuccess.bind(this)}></CommentsInsert>
                </Grid>
                <Grid item>
                    <CommentsList comments={this.state.comments}></CommentsList>
                </Grid>
            </Grid>
        );
    }
}

export default CommentsPage;