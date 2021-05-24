import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const chats = [
    {
        name: 'Chat_1',
        id: 'chat_001',
    },
    {
        name: 'Chat_2',
        id: 'chat_002'
    },
    {
        name: 'Chat_3',
        id: 'chat_003'
    },
]

const Chatlist = () => {
    //     return (
    //         <div>
    // <ul>
    //     {chats.map(chat => {
    //         <li key={chat.id}>
    //             <Link to={`chats/${chat.id}`}>{chat.name}</Link>
    //         </li>
    //     })}
    // </ul>
    //         </div>
    //     )
    // }
    const classes = useStyles();

    const xxx = chats.map((chat) => {
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <Link to={`/${chat.id}`}>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary={chat.name} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        )
    })

    return (
        <div className="ChatList">
            <div className={classes.root}>
                {xxx}
            </div>
        </div>
    )
}
export default Chatlist;