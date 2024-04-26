<script setup>
import IconChevron from "@/components/icons/IconChevron.vue";
import Button from "@/components/button/Button.vue";
</script>

<template>
    <div class="section" id="courses">
        <div class="container">
            <div class="section-title-center">
                <h2>Check out our <u>top courses</u></h2>

                <p>
                    Explore the frontier of tech with our courses, tailored for
                    beginners and seasoned professionals alike. Master the
                    latest in software development, data science, cybersecurity,
                    and more.
                </p>

                <Button :arrow="true" href="/courses" :black="true">
                    View all courses
                </Button>
            </div>

            <div id="courses-list" class="slider">
                <div class="slider-list">
                    <div class="slider-inner">
                        <div class="courses-item">
                            <div class="courses-item-img">
                                <div class="courses-item-banner-container">
                                    <img
                                        src="/src/assets/courses/course-banner-cada.png"
                                        alt="CADA"
                                        class="courses-item-banner"
                                    />
                                </div>

                                <div class="courses-item-badge">
                                    <img
                                        src="/src/assets/courses/course-badge-cada.png"
                                        alt="Badge"
                                    />
                                </div>
                            </div>

                            <div class="courses-item-title">
                                <h4>Certified Associate in Data Analytics</h4>
                            </div>

                            <span
                                >Intermediate <b>·</b> Certified Associate</span
                            >

                            <div class="courses-item-provider">
                                <img
                                    src="/src/assets/courses/course-provider-tl.png"
                                    alt="Provider TL"
                                />

                                <span>TalentLabs</span>
                            </div>
                        </div>

                        <div class="courses-item">
                            <div class="courses-item-img">
                                <div class="courses-item-banner-container">
                                    <img
                                        src="/src/assets/courses/course-banner-cabed.png"
                                        alt="CADA"
                                        class="courses-item-banner"
                                    />
                                </div>

                                <div class="courses-item-badge">
                                    <img
                                        src="/src/assets/courses/course-badge-cada.png"
                                        alt="Badge"
                                    />
                                </div>
                            </div>

                            <div class="courses-item-title">
                                <h4>
                                    Certified Associate in Backend Development
                                </h4>
                            </div>

                            <span
                                >Intermediate <b>·</b> Certified Associate</span
                            >

                            <div class="courses-item-provider">
                                <img
                                    src="/src/assets/courses/course-provider-tl.png"
                                    alt="Provider TL"
                                />

                                <span>TalentLabs</span>
                            </div>
                        </div>

                        <div class="courses-item">
                            <div class="courses-item-img">
                                <div class="courses-item-banner-container">
                                    <img
                                        src="/src/assets/courses/course-banner-devops.png"
                                        alt="CADA"
                                        class="courses-item-banner"
                                    />
                                </div>

                                <div class="courses-item-badge">
                                    <img
                                        src="/src/assets/courses/course-badge-devops.png"
                                        alt="Badge"
                                    />
                                </div>
                            </div>

                            <div class="courses-item-title">
                                <h4>AWS DevOps Engineer</h4>
                            </div>

                            <span>Advanced <b>·</b> AWS Professional</span>

                            <div class="courses-item-provider">
                                <img
                                    src="/src/assets/courses/course-provider-aws.png"
                                    alt="Provider AWS"
                                />

                                <span>Amazon Web Services (AWS)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-btns">
                    <div class="slider-btns-btn btn-prev">
                        <IconChevron />
                    </div>
                    <div class="slider-btns-btn btn-next">
                        <IconChevron />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
