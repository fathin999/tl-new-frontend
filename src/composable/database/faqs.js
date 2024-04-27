const faqs = [
    {
        question: "What course topics are in demand?",
        answer: `
        <p>
            TalentLabs is dedicated into providing the courses that are job-relevant and meet the demands of the future workforce. All the courses are designed in a role-based manner. For now, we are focusing on
        </p>
        <ul>
            <li>Software Engineering</li>
            <li>Data Science</li>
            <li>Cybersecurity</li>
            <li>Digital Marketing</li>
            <li>Technology Management</li>
        </ul>`,
    },
    {
        question: "Do I need to have teaching experience?",
        answer: "Although some teaching experience would be great, we're looking for subject matter experts with expertise. We are open to discuss how to turn your valuable knowledge into educational content.",
    },
    {
        question:
            "Do I have other responsibilities besides creating videos and course materials?",
        answer: "TalentLabs will take care of other students' support responsibilities like technical support, mentoring and assignment gradings. However, we are open to discuss if you would like to contribute to other areas too.",
    },
    {
        question: "What are the requirements for my course?",
        answer: "The requirements for each course varies, our academic team will communicate with you before you start creating videos and contents.",
    },
    {
        question: "How would I get paid?",
        answer: `All our instructors are being paid in our revenue-sharing scheme. We offer two revenue-sharing models:
        <ul>
            <li>Small upfront course building fee with a lower revenue sharing percentage</li>
            <li>Higher revenue sharing percentage with no upfront course building fee</li>
            <li>Your dedicated instructor account manager would discuss this with you before onboarding, to help you in picking the right model.</li>
        </ul>`,
    },
];

export const getCourseFaqs = () => {
    return faqs;
};
