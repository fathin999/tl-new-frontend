import IconInsImpact from "../../components/icons/be-instructor/IconInsImpact.vue";
import IconInsGrow from "../../components/icons/be-instructor/IconInsGrow.vue";
import IconInsIncome from "../../components/icons/be-instructor/IconInsIncome.vue";
import IconInsFuture from "../../components/icons/be-instructor/IconInsFuture.vue";
import IconSupportStudent from "../../components/icons/be-instructor/IconSupportStudent.vue";
import IconSupportIns from "../../components/icons/be-instructor/IconSupportIns.vue";

// ---------------------------
// WHY US
// ---------------------------

const whyUs = [
    {
        icon: IconInsImpact,
        title: "Make an impact",
        description:
            "Share your expertises and help learners gain new skills for a better career.",
    },
    {
        icon: IconInsGrow,
        title: "Grow your career",
        description:
            "Build your brand and grow your career by creating courses and sharing your expertise.",
    },
    {
        icon: IconInsFuture,
        title: "Shape the future",
        description:
            "Being an educator is one of the best ways to create a better future for the world.",
    },
    {
        icon: IconInsIncome,
        title: "Earn an income",
        description:
            "With our revenue-sharing model, you will make continuous income after creating a course.",
    },
];

export const getBeInsWhyUs = () => {
    return whyUs;
};

// ---------------------------
// DUTIES
// ---------------------------

const duties = [
    {
        title: "Design a curriculum",
        description:
            "Start organising your knowledge and put it together as an educational framework. Our instructional design team will work with you and provide you necessary guidance.",
        card: "s",
    },
    {
        title: "Record your teaching videos",
        description:
            "Use a good microphone and a camera with clear resolution, then you're ready to start. Our instructional design team will review your first video and give you feedback.",
        card: "m",
    },
    {
        title: "Create tests & exercises",
        description:
            "Hands-on practices and assessments are important for learners. Our experienced team would work with you on designing hands-on assessments for students, ensuring successful outcomes.",
        card: "m",
    },
    {
        title: "Launch your course",
        description:
            "We will launch your course on TalentLabs Platform. We will sell your course through our B2C and B2B network, saving you the efforts of promoting your course.",
        card: "s",
    },
    {
        title: "Students support",
        description:
            "TalentLabs is different from other online training platforms where we are not only selling courses, but also providing comprehensive student services. These included mentoring, assignment reviews and career coaching. These are all on us.",
        card: "l",
    },
];

export const getBeInsDuties = () => {
    return duties;
};

// ---------------------------
// SUPPORTS
// ---------------------------

const supports = [
    {
        title: "Instructor support",
        description:
            "Our team would work with you in making your course impactful for your students and monetary rewarding for you.",
        points: [
            "Courseware consultation",
            "Course materials design",
            "Assessment design",
            "Marketing",
            "Student recruitment",
        ],
        icon: IconSupportIns,
    },
    {
        title: "Student support",
        description:
            "TalentLabs is not only about selling courses, but also about ensuring students' success in their career. For all the courses on our platform, we would be offering a series of students’ support, ensuring best results for your students.",
        points: [
            "Learners' Discord community",
            "1-to-1 mentoring sessions",
            "Students' projects and assignment review",
            "Career coaching",
            "Online & offline events",
            "Featured seminars",
        ],
        icon: IconSupportStudent,
    },
];

export const getBeInsSupports = () => {
    return supports;
};
