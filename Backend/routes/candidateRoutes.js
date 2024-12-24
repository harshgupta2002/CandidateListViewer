const express = require('express');
const router = express.Router();

const candidates = [
    {
        Name: "Harsh Gupta",
        Skills: ["JavaScript", "React", "Node.js"],
        YearsOfExperience: 5,
    },
    {
        Name: "Payal Aggarwal",
        Skills: ["Python", "Django", "Machine Learning"],
        YearsOfExperience: 4,
    },
    {
        Name: "Sonal Jaiswal",
        Skills: ["Java", "Spring Boot", "Hibernate"],
        YearsOfExperience: 6,
    },
    {
        Name: "Rohit Pandey",
        Skills: ["HTML", "CSS", "Tailwind CSS"],
        YearsOfExperience: 3,
    },
    {
        Name: "Sneha Aggarwal",
        Skills: ["PHP", "Laravel", "MySQL"],
        YearsOfExperience: 5,
    },
    {
        Name: "Shilpa Singh",
        Skills: ["C#", ".NET", "Azure"],
        YearsOfExperience: 7,
    },
    {
        Name: "Sahil Kumar",
        Skills: ["Ruby", "Rails", "PostgreSQL"],
        YearsOfExperience: 4,
    },
    {
        Name: "Gaurav Pathak",
        Skills: ["JavaScript", "Vue.js", "GraphQL"],
        YearsOfExperience: 5,
    },
    {
        Name: "Kuheli Sen",
        Skills: ["Go", "Kubernetes", "Docker"],
        YearsOfExperience: 6,
    },
    {
        Name: "Mohit Supolia",
        Skills: ["Swift", "iOS Development", "Core Data"],
        YearsOfExperience: 3,
    },
];

router.get('/candidates', async (req, res) => {
    try{
        if(!candidates||candidates.length===0){
            return res.status(404).send({result:"Candidates detail not found!"})
        }
        res.status(200).send({result:"Candidates found", candidates});

    }catch(e){
        console.log("Error: ", e.message)
        res.status(500).send({ result: "An error occurred while fetching data", error: e.message });
    }
})

module.exports = router;