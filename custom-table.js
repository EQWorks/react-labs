import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableBody, TableContainer, TableCell} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    head: {
        display: 'flex',
        flexGrow: 1
    },
    cell: {
        flexGrow: 1
    }
}))

const CustomTable = ({data}) => {
    const [dynamicData, setDynamicData] = useState(data);
    const tableHead = Object.getOwnPropertyNames(data[0]);
    const classes = useStyles();


    const dynamicSort = name => {
        const sorted = dynamicData
        .sort((a, b) => {
            console.log(a[name],b[name]);
            if(a[name] < b[name]) {
                return -1;
            }
            if(a[name] > b[name]) {
                return 1;
            }
            return 0;
        });
        setDynamicData(sorted);
    }
    
    return (
        <TableContainer className={classes.root}>
            <Table stickyHeader>
                <TableHead >
                    <TableRow>
                    {tableHead.map(name => <TableCell onClick={()=>dynamicSort(name)}>{name}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dynamicData.map(row => (
                        <TableRow>
                            {Object.values(row).map(column => <TableCell>{column}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;