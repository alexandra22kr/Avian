import React, { useState } from 'react'
import {
    Paper,
    InputBase,
    Theme,
    Divider,
    IconButton,
    TextField,
    Grid,
    makeStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";

import addRecord from '../../actions/addRecord'


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: "0 auto",
        padding: theme.spacing(1),
        width: '60%'
    },
    input: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(2),
        flexGrow: 1
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
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const record = {
            record: inputValue,
            timestamp: Number(new Date().toISOString())
        }
        dispatch(addRecord(record));
    }

    return (
        <Paper className={classes.root}>
            <Formik
                initialValues={{}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {props => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Grid container wrap="wrap" >
                                <TextField
                                    className={classes.input}
                                    placeholder="Search Images"
                                    onChange={handleChange}
                                />
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton
                                    type="submit"
                                    className={classes.iconButton}
                                    aria-label="search"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </Grid>
                        </form>
                    )
                }
                }
            </Formik>
        </Paper>
    )
}

export default SearchInput