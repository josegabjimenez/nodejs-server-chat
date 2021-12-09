import React, { useEffect } from 'react';
import { state } from "../state";
// import { useSnapshot } from 'valtio';

const Home = () => {
    // const snap = useSnapshot(state);

    const getUsers = async () => {
        const users = await (await fetch("/api/user")).json();
        state.users = users.data;
    }

    useEffect(() => {
        getUsers();
    }, []);

    // bg-white flex flex-col items-center m-20 p-20 rounded shadow-md sm:m-0 sm:bg-red-500
    // grid grid-cols-8 items-center gap-3

    return (
        <main className="bg-base-100 w-full m-0 p-5 flex flex-col items-center rounded shadow-md">
            <p className="text-4xl font-bold m-4">WELCOME TO MY MESSAGE APP</p>
            <p className="text-1xl font-bold m-4">USERS:</p>
            <section className="grid gap-3 w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
                <Card title="Usuario 1" />
                <Card title="Usuario 1" />
                <Card title="Usuario 1" />
                <Card title="Usuario 1" />
                <Card title="Usuario 1" />
                <Card title="Usuario 1" />
                <Card title="Usuario 1" />

            </section>
        </main>
    )
}

const Card = ({ title, email }) => {
    return (
        <div className="bg-white h-32 w-full">
            <h1>{title}</h1>
        </div>
    )
}

export default Home;
