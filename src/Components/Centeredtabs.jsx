import { Paper, Tab, Tabs } from '@mui/material';
import React from 'react';

const Centeredtabs = () => {
    return (
        <Paper className='root'>
            <Tabs
            className='tabss'
            textColor='primary'
            indicatorColor='primary'
            centered
            >
                <Tab label="Question" className='tabs'>
                </Tab>
                <Tab label="Responses" className='tabs'>

                </Tab>
            </Tabs>
        </Paper>
    );
}

export default Centeredtabs;
