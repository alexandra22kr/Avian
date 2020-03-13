import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
    DialogActions,
    Typography,
    IconButton,
    Toolbar,
    ListItemText,
    ListItem,
    Divider,
    AppBar,
    List,
    Slide
} from "@material-ui/core";
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';

import HistoryTable from '../HistoryTable/HistoryTable';

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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClear = () => { };

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
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Clear
                        </Button>
                    </Toolbar>
                </AppBar>
                <HistoryTable />
            </Dialog>
        </div>
    )
}

export default HistoryModal
