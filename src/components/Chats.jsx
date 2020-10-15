import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from './index';

const useStyles = makeStyles((theme) => (
    createStyles({
        "chats": {
            height: 400,
            padding: 0,
            overflow: 'auto'
        }
    })
));

const Chats = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.chats}>
            {props.chats.map((chat, index) => {
                return (
                    <Chat key={index.toString()} text={chat.text} type={chat.type} />
                );
            })}
        </List>
    );
};

export default Chats;
