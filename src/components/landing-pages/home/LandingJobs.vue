<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import IconLocation from "@/components/icons/jobs/IconLocation.vue";
import IconWork from "@/components/icons/jobs/IconWork.vue";
</script>

<template>
    <div class="section" id="courses">
        <div class="container">
            <div class="section-title">
                <h2>
                    <u>Get hired</u> now and advance<br />
                    your tech career
                </h2>

                <p>
                    We provide exclusive access to various tech job
                    opportunities across the region. Our hiring partners hire
                    for proven skills, not just pedigree.
                </p>

                <a class="btn-black btn-arrow">
                    View more jobs
                    <IconArrow />
                </a>
            </div>

            <div class="slider">
                <div class="slider-list">
                    <div class="slider-inner">
                        <div class="job-item">
                            <img
                                src="/src/assets/jobs/employer-logo-wristcheck.png"
                                alt="Wristcheck"
                                class="job-item-logo"
                            />

                            <div class="job-item-title">
                                <h4>Junior Software Engineer (Frontend)</h4>
                            </div>

                            <p>WRISTCHECK</p>

                            <div class="job-item-details">
                                <div class="job-item-details-item">
                                    <IconLocation />
                                    <span> Hong Kong </span>
                                </div>

                                <div class="job-item-details-item">
                                    <IconWork />
                                    <span> Full-time </span>
                                    <div
                                        class="job-item-details-style style-blue"
                                    >
                                        In office
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="job-item">
                            <img
                                src="/src/assets/jobs/employer-logo-dolphin.png"
                                alt="Dolphin Pharmaceuticals"
                                class="job-item-logo"
                            />

                            <div class="job-item-title">
                                <h4>eCommerce Data Operations Specialist</h4>
                            </div>

                            <p>Dolphin Pharmaceuticals</p>

                            <div class="job-item-details">
                                <div class="job-item-details-item">
                                    <IconLocation />
                                    <span>Hong Kong (Central)</span>
                                </div>

                                <div class="job-item-details-item">
                                    <IconWork />
                                    <span> Full-time </span>
                                    <div
                                        class="job-item-details-style style-blue"
                                    >
                                        In office
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="job-item">
                            <img
                                src="/src/assets/jobs/employer-logo-fave.png"
                                alt="Fave"
                                class="job-item-logo"
                            />

                            <div class="job-item-title">
                                <h4>Software Engineer (Backend)</h4>
                            </div>

                            <p>Fave</p>

                            <div class="job-item-details">
                                <div class="job-item-details-item">
                                    <IconLocation />
                                    <span>Kuala Lumpur, Malaysia</span>
                                </div>

                                <div class="job-item-details-item">
                                    <IconWork />
                                    <span>Contract</span>
                                    <div
                                        class="job-item-details-style style-red"
                                    >
                                        Remote
                                    </div>
                                </div>
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

<style scoped lang="scss"></style>
