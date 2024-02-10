import  Next from '../assets/img/nextjs-project.jpg';
import React from '../assets/img/react.jpg';
import JS from '../assets/img/javascript.jpg';
import Node from '../assets/img/nodejs.jpg';
import Mern from '../assets/img/mern-project.jpg';
import HTML from '../assets/img/html.jpg';
import DataAnalytics from '../assets/img/data-analytics-with-python.jpg';
import Adobe from '../assets/img/adobe-tools.jpg';


export const courseData=[
    {
        id:1,
        title:'NextJs and OpenAI',
        description:'A course giving introductory knowledge about nextjs and openAI',
        duration:'7',
        category:'programming',
        technologies:['NextJS','OpenAI'],
        img:Next,
        experience:'Intermediate',
        type:'course'
    },
    {
        id:2,
        title:'Javascript Course',
        description:'A course giving introductory knowledge about javascript',
        duration:'7',
        technologies:['Javascript'],
        img:JS,
        experience:'Beginner',
        category:'programming',
        type:'course'
    },
    {
        id:3,
        title:'React Course',
        description:'A course giving introductory knowledge about react and javascript',
        duration:'7',
        technologies:['React','Javascript'],
        img:React,
        experience:'Beginner',
        category:'programming',
        type:'course'
    },
    {
        id:4,
        title:'NodeJS Course',
        description:'A course giving introductory knowledge about NodeJS',
        duration:'7',
        technologies:['NodeJS','Javascript'],
        img:Node,
        experience:'Intermediate',
        category:'programming',
        type:'course'
    },
    {
        id:5,
        title:'Mern Course',
        description:'A course giving msstergy knowledge about Mern Stack',
        duration:'12',
        technologies:['NodeJS','Javascript','MongoDB','React'],
        img:Mern,
        experience:'Advance',
        type:'course',
        category:'programming'
    },
    {
        id:6,
        title:'HTML5 Course',
        description:'A course giving introductory knowledge about HTML5, CSS3, and javascript',
        duration:'12',
        technologies:['HTML5','Javascript','CSS3'],
        img:HTML,
        experience:'Beginner',
        category:'programming',
        type:'course'
    },
    {
        id:7,
        title:'Adobe tools Course',
        description:'A course giving introductory knowledge about photoshop, illustrator',
        duration:'12',
        technologies:['Adobe Phototshop','Adobe Illustrator'],
        img:Adobe,
        experience:'Beginner',
        category:'Graphic Design',
        type:'course'
    },
    {
        id:8,
        title:'Data analytics Course',
        description:'A course giving introductory knowledge about data analytics using python',
        duration:'12',
        technologies:['python'],
        img:DataAnalytics,
        experience:'Beginner',
        category:'Data Analytics',
        type:'course'
    }
]