import React, { Component } from 'react';
import ReactTable from 'react-table';
import md5 from 'md5';

import styled from 'styled-components';

import 'react-table/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: []
        }
    }

    render() {
        let data = this.props.comments;
        data = data.map((row) => {
            row.gravatarPath = "https://www.gravatar.com/avatar/";
            return row;
        });
        const columns = [
            {
                Header: 'Gravatar',
                Cell: (row) => {
                    return <div><img src={row.original.gravatarPath + md5(row.original.email.toLowerCase())}/></div>
                }
            },
            {
                Header: 'Email',
                accessor: 'email',
                filterable: true,
            },
            {
                Header: 'Message',
                accessor: 'message',
            },
        ];

        let showTable = true;
        if (!this.props.comments.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={data}
                        columns={columns}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>

        )
    }
}

export default CommentsList;
