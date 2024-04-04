<script setup>
import ArrowLink from "@/components/button/ArrowLink.vue";
import CoursesList from "@/components/courses/CoursesList.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import IconSolAi from "@/components/icons/landingPage/solutions/IconSolAI.vue";

const courses = [
    {
        id: 1,
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Data Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
    },
    {
        id: 2,
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Backend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
    },
    {
        id: 3,
        badge: "devops",
        banner: "devops",
        title: "AWS DevOps Engineer",
        type: "AWS Professional",
        level: "Advanced",
        provider: "Amazon Web Services (AWS)",
        providerLogo: "aws",
    },
];
</script>

<template>
    <div class="section" id="courses">
        <div class="container">
            <div class="section-title">
                <h2>
                    Chart your career path
                    <br />
                    with our <u>top courses</u>
                </h2>

                <p>
                    Explore the frontier of tech with our courses, tailored for
                    beginners and seasoned professionals alike.
                </p>
            </div>

            <div id="courses-content">
                <div id="courses-btns">
                    <div class="courses-btn clickable btn-active">
                        <IconSolAi />
                        Software Engineer
                    </div>
                    <div class="courses-btn clickable">
                        <IconSolAi />
                        Data Analyst
                    </div>
                    <div class="courses-btn clickable">
                        <IconSolAi />
                        Digital Marketer
                    </div>
                    <div class="courses-btn clickable">
                        <IconSolAi />
                        Cybersecurity
                    </div>
                    <div id="courses-btns-link">
                        <a href="/courses/careers" class="clickable">
                            More
                            <IconChevron />
                        </a>
                    </div>
                </div>

                <div id="courses-list">
                    <CoursesList :courses="courses" />

                    <div id="courses-list-more">
                        <ArrowLink title="More courses" href="/courses" />
                    </div>
                </div>
            </div>

            <!-- <a class="btn-primary btn-arrow" href="/courses">
                View more
                <IconArrow />
            </a> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
#courses {
    .section-title {
        text-align: center;

        p {
            width: 100%;
        }
    }

    &-content {
        margin-top: 70px;
        display: grid;
        grid-template-columns: 300px 1fr;
    }

    &-btns {
        padding-right: 80px;

        .courses-btn {
            margin-bottom: 5px;
            padding: 20px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            background-color: white;

            svg {
                $size: 18px;
                height: $size;
                width: $size;
                margin-right: 15px;
            }
        }

        .courses-btn:hover {
            background-color: var(--bgMedium);
        }

        .btn-active {
            background-color: var(--lightBlue);
            /* background-color: var(--black); */
            /* color: white; */
        }

        &-link {
            margin-top: 25px;
            /* text-align: center; */
            padding-left: 20px;

            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 0.92rem;
                font-weight: 500;
                color: var(--purple);
                transition: color 0.3s ease-out;

                svg {
                    $size: 15px;
                    height: $size;
                    width: $size;
                    transform: rotate(90deg);
                    margin-top: 2px;
                    fill: var(--purple);
                    margin-left: 7px;
                    transition: fill 0.3s ease-out;
                }
            }

            a:hover {
                color: var(--black);

                svg {
                    fill: var(--black);
                }
            }
        }
    }

    &-list {
        &-more {
            text-align: right;
            margin-top: 30px;
        }
    }
}
</style>
