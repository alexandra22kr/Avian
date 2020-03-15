import React from 'react'
import { useSelector } from 'react-redux';
import {
    Dialog,
    Button,
    Typography,
    IconButton,
    Toolbar,
    AppBar,
    Slide
} from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import { useDispatch } from "react-redux";

import HistoryTable from '../HistoryTable/HistoryTable';
import IRootState from '../../reducers/interfaces/IRootState';
import deleteAllRecords from '../../actions/deleteAllRecords';

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
})
);


const HistoryModal = () => {
    const classes = useStyles();
    const records = useSelector((state: IRootState) => state.history)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClear = () => {
        useDispatch(deleteAllRecords());
    };

    const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                History
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Search History
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClear}>
                            Clear
                        </Button>
                    </Toolbar>
                </AppBar>
                <HistoryTable records={records} />
            </Dialog>
        </div>
    )
}

export default HistoryModal
