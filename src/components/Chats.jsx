import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from './index';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    }
}));

const Chats = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {props.chats.map((chat, index) => {
                return (
                    <Chat key={index.toString()} text={chat.text} type={chat.type} />
                );
            })}
        </List>
    );
};

export default Chats;
