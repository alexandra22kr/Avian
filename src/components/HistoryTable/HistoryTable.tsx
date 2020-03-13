import React from 'react'
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';

import IHistoryTable from './IHistoryTable';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const HistoryTable = (props: IHistoryTable) => {
    const classes = useStyles();


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Search request</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.records.map(record => (
                        <TableRow >
                            <TableCell component="th" scope="row">
                                {record.record}
                            </TableCell>
                            <TableCell>{new Date((record.timestamp as number) * 1000).getDate()}</TableCell>
                            
                            <TableCell>{new Date((record.timestamp as number) * 1000).getTime()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default HistoryTable