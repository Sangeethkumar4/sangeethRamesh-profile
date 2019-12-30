export const Technology = [{
    label: 'Languages/Libraries',
    items: [
        { name: 'React', score: 4 },
        { name: 'JavaScript', score: 4 },
        { name: 'Java', score: 3.5 }
    ]
},
{
    label: 'FrameWorks',
    items: [
        { name: 'NodeJs', score: 4.5 },
        { name: 'SpringBoot', score: 3 },
        { name: 'DotNetCore', score: 3 }
    ]
}];

export const skillsHeader = ['Area', 'Skills'];
export const projectsHeader = ['Project', 'Description'];

export const skills = [
    { name: 'DataBase', description: 'MSSQL-Server, Cosmos' },
    { name: 'Tools', description: 'Git, Visual Studio Code' },
    { name: 'Message Broker', description: 'Azure Service Bus' },
    { name: 'Containerization', description: 'Docker' },
    { name: 'PerformanceTesting', description: 'Jmeter' },
    { name: 'Methodologies followed', description: 'Agile Sofware Development, Extreme Programming (XP), Test-driven Development' }
];

export const projects = [
    { name: 'Pulse', description: 'Scheduler job that runs to check the health of all apis in the organization and calculate the number of messages in queue and send an email to the authorities whose attention is needed' },
    { name: 'DatabaseValidator', description: 'Automated a database validation job using node and node-mssql instead of manual validation using excel' }
];

export const education = [{
    key: '2017',
    'details': [
        { name: 'Degree', description: 'Bachelor Of Engineering' },
        { name: 'College', description: 'Sri Venkateswara College Of Engineering' },
        { name: 'CGPA', description: '8.2' }
    ]
},
{
    key: '2013',
    'details': [
        { name: 'Degree', description: 'Higher Secondary' },
        { name: 'School', description: 'Jaya Matriculation Higher Secondary School' },
        { name: 'Percentage', description: '95.6' }
    ]
},{
    key: '2011',
    'details': [
        { name: 'Degree', description: 'Secondary' },
        { name: 'School', description: 'Raja National Matriculation Higher Secondary School' },
        { name: 'Percentage', description: '95.9' }
    ]
}
];

export const experience = [{
    'name': 'Mr.Cooper (India)',
    'role': 'Software Engineer- Intern',
    'duration': 'Dec 2016 - May 2017',
}, {
    'name': 'Mr.Cooper (India)',
    'role': 'Software Engineer',
    'duration': 'June 2017 - present'
}];

export const projectsWorked = [
    {
        'name': 'FLASH ',
        'duration': 'Jan 2019 - Till Date',
        'description': 'A workflow engine for originating a loan that involves automating the manual process during various stages thereby reducing the time taken to fund a loan with lesser cost.',
        'tools': 'NodeJs , ReactJs, Jest, Docker, Azure Cosmos Database, Dot net Core.',
        'isExpanded': true,
    },
    {
        'name': 'INTEGRATED E-SIGN',
        'duration': 'June 2018 – Jan 2019',
        'description': 'An application that allows customers to sign documents electronically through a web portal instead of signing in paper',
        'tools': 'Dot net Core, Docker, Azure Service Bus, NService Bus, Spring Boot',
        'isExpanded': false,
    },
    {
        'name': 'BACK OFFICE SUPPORT SYSTEM',
        'duration': 'May 2017 – June 2018',
        'description': 'Worked on the automation of loan origination process and help the customers track the Loan status in the Loan Tracker',
        'tools': 'ReactJs, Jest, Docker, Azure Service Bus, Dot net Core, Spring Boot, Azure Tables',
        'isExpanded': false,
    }
];