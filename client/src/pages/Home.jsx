import React, { useEffect } from 'react';
//Components
import { Hero, Card, CardGrid } from '../components';

// State
import { state } from "../state";
import { useSnapshot } from 'valtio';

const Home = () => {
    const snap = useSnapshot(state);

    const getUsers = async () => {
        const users = await (await fetch("/api/user")).json();
        state.users = users.data;
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Hero title="WELCOME TO MY MESSAGE APP" subtitle="USERS:">
            <CardGrid>
                { snap.users.length && snap.users.map(user => {
                    return <Card key={user._id} id={user._id} title={user.name} email={user.email} button="Select User" />
                }) }
            </CardGrid>
        </Hero>
        // <main className="bg-base-100 w-full m-0 p-12 flex flex-col items-center rounded shadow-md">
        //     <p className="text-4xl font-bold m-4">WELCOME TO MY MESSAGE APP</p>
        //     <p className="text-1xl font-bold m-4">USERS:</p>
            // <section className="grid gap-3 xl:gap-5 w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            //     { snap.users.length && snap.users.map(user => {
            //         return <Card key={user._id} id={user._id} title={user.name} email={user.email} />
            //     }) }

            // </section>
        // </main>
    )
}

export default Home;
