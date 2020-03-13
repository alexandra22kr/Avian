import React from 'react'
import {
    Paper,
    InputBase,
    Theme,
    Divider,
    IconButton,
    makeStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from "formik";
import { object, string } from "yup";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    divider: {
        height: 28,
        margin: 4
    }
})
)

const validationSchema = object().shape({
    SearchImages: string().trim()
})

const SearchInput = () => {
    const classes = useStyles();

    const handleSubmit = () => {

    }
    
    return (
        // <form noValidate autoComplete="off">
        //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        // </form>
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Images"
                inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchInput