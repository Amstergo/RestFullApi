import React, {useEffect, useState} from "react";
import {Container} from 'semantic-ui-react';

import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {IActivity} from "../models/activity";
import axios from "axios";

const App = () => {

    const [activities, setActivities] = useState<IActivity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null)
    const [editMode, setEditMode] = useState(false);
    
    const handleSelectedACtivity = (id: string) => {
        setSelectedActivity(activities.filter(a => a.id === id)[0])
    }
    
    useEffect(() => {
        axios.get<IActivity[]>("http://localhost:5000/api/activities")
            .then((res) => {
                setActivities(res.data)
            });
    }, []);

    return (
        <>
            <NavBar/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard 
                    activities={activities}
                    selectActivity={handleSelectedACtivity}
                    selectedActivity={selectedActivity}
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            </Container>
        </>
    );
}

export default App;
