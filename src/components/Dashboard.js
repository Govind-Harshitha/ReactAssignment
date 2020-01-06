import React from 'react';
import authors from '../../src/shared/authors';
import categories from '../../src/shared/categories';
import Instructors from './Topics and Instructors/Instructors'
import Topics from './Topics and Instructors/Topics';

const Dashboard = () => {
    return (
        <div>
       <Topics authorTopics={categories} />
       <Instructors authorDetails={authors} />
        </div>
    )
}

export default Dashboard;