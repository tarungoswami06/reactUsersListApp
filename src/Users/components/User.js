import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        key: 'id'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    }

];


export default class FileListing extends Component {
    render() {
        let data = this.props.userList;
        return (
            <>
                <Table
                    rowKey={data => data._id}
                    columns={columns}
                    dataSource={data}
                    size="small"
                    className="task-table"
                    pagination={{ position: 'top', pageSize: 10, size: "small" }}
                />
            </>
        )
    }
}


