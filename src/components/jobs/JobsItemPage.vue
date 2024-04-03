<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import IconBookmark from "../icons/jobs/IconBookmark.vue";
import IconLocationOutline from "../icons/jobs/IconLocationOutline.vue";
import IconBriefcase from "../icons/jobs/IconBriefcase.vue";
import IconBuilding from "../icons/jobs/IconBuilding.vue";
import IconSpanner from "../icons/jobs/IconSpanner.vue";
import IconTime from "../icons/jobs/IconTime.vue";
import SimilarJobCard from "./SimilarJobCard.vue";
import IconPeople from "../icons/jobs/IconPeople.vue";
import IconArrow from "../icons/IconArrow.vue";
import JobsList from "./JobsList.vue";

const job = {
    title: "Network Infrastructure Engineer",
    employer: {
        title: "Fave",
        logo: "fave",
        industry: "Retail",
        size: "1000+ employees",
        location: "Eastern, Hong Kong",
    },
    location: "Eastern, Hong Kong",
    type: "Full-time",
    role: "Networking and Database",
    createdAt: "Wed Mar 27 2024 01:06:25 GMT+0800 (Malaysia Time)",
    level: "Associate",
    remote: "Remote",
};

const getTime = () => {
    const today = new Date();
    const created = new Date(job.createdAt);
    const ms = Math.abs(today - created); // difference in milliseconds
    const days = Math.floor(ms / (3600000 * 24)); // milliseconds to days
    return `${days} days ago`;
};

const getImageUrl = () => {
    return `/src/assets/jobs/employer-logo-${job.employer.logo}.png`;
};
</script>

<template>
    <Navbar />

    <main class="container" id="job">
        <div id="job-header">
            <div id="job-overview">
                <h1>{{ job.title }}</h1>

                <div id="job-overview-employer" class="clickable">
                    <img :src="getImageUrl()" :alt="job.employer.title" />

                    <span>{{ job.employer.title }}</span>
                </div>

                <div id="job-overview-summary">
                    <div
                        class="job-summary-item"
                        id="job-overview-summary-location"
                    >
                        <IconLocationOutline />
                        <span>{{ job.location }}</span>
                    </div>

                    <div class="job-summary-item">
                        <IconBriefcase />
                        <span>{{ job.type }}</span>
                    </div>

                    <div class="job-summary-item">
                        <IconBuilding />
                        <span>{{ job.remote }}</span>
                    </div>

                    <div class="job-summary-item">
                        <IconSpanner />
                        <span>{{ job.role }}</span>
                    </div>

                    <div class="job-summary-item">
                        <IconTime />
                        <span>{{ getTime() }}</span>
                    </div>
                </div>
            </div>

            <div id="job-header-btns">
                <a class="btn-black-outline btn-m">
                    <IconBookmark />
                    Save
                </a>

                <a class="btn-black btn-m"> Apply </a>
            </div>
        </div>

        <div id="job-content">
            <div id="job-content-description">
                <div>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>
                            Perform technical support, troubleshoot, and provide
                            Root Cause Analysis on complex issues effectively
                            and efficiently in line with the SLA required by the
                            business.
                        </li>

                        <li>
                            Provide emergency on-site support and coordination,
                            and on-call support as required.
                        </li>

                        <li>
                            Resolve and manage complex service requests in
                            adherence with service level agreements.
                        </li>

                        <li>
                            Assess and define operating procedures used for
                            day-to-day support, installation guides,
                            housekeeping procedures, etc.
                        </li>

                        <li>Perform complex ad-hoc requests.</li>

                        <li>
                            Provide expertise in complex database software
                            installation and configuration.
                        </li>

                        <li>
                            Provide expertise in complex database administration
                            and monitoring.
                        </li>

                        <li>
                            Provide expertise in tuning to improve efficiency
                            and to maximize the availability of databases and
                            process automation of software environments and the
                            like.
                        </li>

                        <li>
                            Create scripts for monitoring and to automate
                            administrative tasks.
                        </li>

                        <li>
                            Provide data protection and enforce security
                            standard procedures.
                        </li>

                        <li>
                            Ensure that information security policy is
                            considered and always followed,
                        </li>

                        <li>
                            Recommends any changes to policy and approved policy
                            changes are documented.
                        </li>

                        <li>
                            Assist superiors and other engineers on other tasks
                            and projects as needed.
                        </li>
                    </ul>

                    <br />

                    <h3>Requirements:</h3>
                    <ul>
                        <li>
                            Degree in Information Technology, Computer Science,
                            or other related fields.
                        </li>

                        <li>Minimum of 2 years' IT experience.</li>

                        <li>
                            Experience in MS SQL, Oracle, Postgres, NoSQL and
                            MYSQL
                        </li>

                        <li>
                            Highly experienced in Always On Availability Group,
                            Failover Clustering, Database Mirroring, Backup and
                            Restore, Optimizing Performance and T-SQL.
                        </li>

                        <li>
                            Experience in Azure Cloud, SQLMI and SQL Database
                        </li>

                        <li>
                            Good Communication and Team skills with the ability
                            to cooperate, present to and participate with
                            peers/team members.
                        </li>

                        <li>
                            Good problem solving, analytical and critical
                            thinking skills.
                        </li>
                    </ul>
                </div>

                <div id="job-content-description-btn">
                    <a class="btn-primary btn-l">Apply Now</a>
                </div>
            </div>

            <div id="job-content-similar">
                <h2>Similar jobs</h2>

                <SimilarJobCard
                    title="Junior Software Engineer (Frontend)"
                    logo="wristcheck"
                    employer="WRISTCHECK"
                    location="Eastern, Hong Kong"
                />

                <SimilarJobCard
                    title="Junior Software Engineer (Frontend)"
                    logo="dolphin"
                    employer="Dolphin Pharmaceuticals"
                    location="Western, Hong Kong"
                />

                <SimilarJobCard
                    title="Database Administrator"
                    logo="fave"
                    employer="Fave"
                    location="Central, Hong Kong"
                />

                <SimilarJobCard
                    title="Junior Software Engineer (Frontend)"
                    logo="dolphin"
                    employer="Dolphin Pharmaceuticals"
                    location="Western, Hong Kong"
                />
            </div>
        </div>

        <div id="job-company">
            <h2>More about {{ job.employer.title }}</h2>

            <a id="job-company-card" href="/employers">
                <div id="job-company-card-title">
                    <img :src="getImageUrl()" :alt="job.employer.title" />

                    <h1>{{ job.employer.title }}</h1>
                </div>

                <div class="job-company-detail">
                    <IconLocationOutline />
                    {{ job.employer.location }}
                </div>

                <div class="job-company-detail">
                    <IconPeople />
                    {{ job.employer.size }}
                </div>

                <div class="job-company-detail">
                    <IconBuilding />
                    {{ job.employer.industry }}
                </div>

                <div id="job-company-card-btn">
                    More
                    <IconArrow />
                </div>
            </a>

            <h2>Other jobs from {{ job.employer.title }}</h2>

            <JobsList :card="true" />
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#job {
    h2 {
        font-size: 0.95rem;
        color: var(--textMedium);
        margin-bottom: 20px;
    }

    width: 1000px;

    &-header {
        display: flex;
        margin: 50px 0 0;
        padding-bottom: 50px;
        border-bottom: 1px solid var(--borderMedium);

        &-btns {
            display: flex;
            gap: 10px;
            padding-top: 5px;

            .btn-m {
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .btn-black-outline:hover {
                border-color: var(--purple);
                background-color: transparent;
                color: var(--purple);

                svg {
                    fill: var(--purple);
                }
            }

            .btn-black:hover {
                background-color: var(--purple);
                color: white;
                border-color: var(--purple);
            }

            svg {
                $size: 15px;
                height: $size;
                width: $size;
                margin: auto;
                margin-right: 10px;
            }
        }
    }

    &-overview {
        flex: 1;

        &-employer {
            display: inline-flex;
            margin-top: 15px;
            align-items: center;

            img {
                $size: 40px;
                height: $size;
                width: $size;
                border-radius: 50%;
                margin-right: 10px;
                border: 1px solid whitesmoke;
            }

            span {
                font-size: 1.1rem;
                transition: color 0.3s ease-out;
            }
        }

        &-employer:hover {
            span {
                color: var(--purple);
            }
        }

        &-summary {
            margin-top: 25px;
            display: flex;
            flex-wrap: wrap;
            row-gap: 15px;
            column-gap: 35px;

            .job-summary-item {
                display: flex;
                align-items: center;
                font-size: 0.95rem;

                svg {
                    $size: 14px;
                    height: $size;
                    width: $size;
                    margin-right: 12px;
                    fill: var(--textMedium);
                }
            }

            &-location {
                width: 100%;
            }
        }
    }

    &-content {
        display: grid;
        grid-template-columns: 1fr 310px;
        gap: 100px;
        padding: 40px 0 50px;

        &-description {
            font-size: 1rem;
            line-height: 1.5rem;

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-size: 1.2rem;
                margin: 0 0 15px;
            }

            li {
                margin-left: 14px;
                padding-left: 10px;
                margin-bottom: 10px;
            }

            &-btn {
                margin: 50px auto 0;
                text-align: center;
            }
        }
    }

    &-company {
        border-top: 1px solid var(--borderMedium);
        padding: 50px 0;
        width: 70%;

        &-card {
            $padding: 30px;

            border: 1px solid var(--borderMedium);
            border-radius: 20px;
            margin-bottom: 50px;
            padding: $padding;
            display: flex;
            flex-wrap: wrap;
            column-gap: 50px;
            row-gap: 30px;
            transition: border 0.3s ease-out;
            position: relative;

            &-title {
                display: flex;
                align-items: center;
                width: 100%;

                img {
                    $size: 60px;
                    height: $size;
                    width: $size;
                    border-radius: 25%;
                }

                h1 {
                    margin-left: 20px;
                    font-size: 1.5rem;
                }
            }

            .job-company-detail {
                display: flex;
                align-items: center;

                svg {
                    $size: 18px;
                    height: $size;
                    width: $size;
                    fill: var(--textMedium);
                    margin-right: 10px;
                }
            }

            &-btn {
                $margin: calc($padding + 5px);
                position: absolute;
                top: $margin;
                right: $margin;
                display: flex;
                align-items: center;
                color: var(--purple);
                font-weight: 500;
                transition: color 0.3s ease-out;

                svg {
                    $size: 15px;
                    height: $size;
                    width: $size;
                    fill: var(--purple);
                    margin-left: 10px;
                    transition: fill 0.3s ease-out, transform 0.3s ease-out;
                }
            }
        }

        &-card:hover {
            border-color: var(--purple);

            #job-company-card-btn {
                color: var(--black);

                svg {
                    fill: var(--black);
                    transform: translateX(5px);
                }
            }
        }
    }
}
</style>
