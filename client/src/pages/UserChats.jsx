import React, { useEffect } from 'react';
// Components
import { Hero, Card, CardGrid } from '../components';

// State
import { state } from "../state";
import { useSnapshot } from 'valtio';

const UserChats = () => {
    const snap = useSnapshot(state);

    const getChats = async (id) => {
        state.userChats = [];
        const chats = await (await fetch(`/api/chat/${id}`)).json();
        state.userChats = chats.data;
    }

    useEffect(() => {
        const id = snap.currentUserId;
        console.log(id);
        getChats(id);
    }, [snap.currentUserId]);

    return (
        <Hero>
            <CardGrid>
                {snap.userChats && snap.userChats.map(chat => {
                    return <Card key={chat._id} button="Let's chat" title={`Chat con ${chat.users[0]._id === snap.currentUserId ? chat.users[1].name : chat.users[0].name }`}  />
                })}
            </CardGrid>
        </Hero>
    )
}

export default UserChats
