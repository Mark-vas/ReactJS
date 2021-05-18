import React, { useState } from 'react';
import { TextField } from 'material-ui';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AUTHORS from '../Utilits/constatnst';
import '../../style.css';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Form = ({ onAddMessage }) => {
    const classes = useStyles();
    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text)
        if (text !== '') {
            onAddMessage({ author: AUTHORS.HUMAN, text: text });
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={text}
                name="input"
                fullWidth={true}
                hintText="Введите сообщение"
                style={{ fontSize: '22px' }}
                onChange={handleChange}>
            </TextField>
            <br></br>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}>
                Send
            </Button>
        </form >
    )
};

export default Form

    //            {/* <input type="submit" value="Отправить сообщение"></input> */}

