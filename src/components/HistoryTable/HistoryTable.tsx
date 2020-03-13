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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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