import React, {useEffect, useState} from "react";
import {Container} from 'semantic-ui-react';

import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {IActivity} from "../models/activity";
import axios from "axios";

const App = () => {

    const [activities, setActivities] = useState<IActivity[]>([])

    useEffect(() => {
        axios.get<IActivity[]>("http://localhost:5000/api/activities")
            .then((res) => {
                setActivities(res.data)
            });
    }, []);

    return (
        <>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
               <ActivityDashboard activities={activities} /> 
            </Container>
        </>
    );
}

export default App;
