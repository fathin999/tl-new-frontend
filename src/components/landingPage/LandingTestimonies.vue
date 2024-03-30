<script setup>
import IconArrow from "../icons/IconArrow.vue";
import IconChevron from "../icons/IconChevron.vue";
</script>

<template>
    <div class="section blue" id="testimonies">
        <div class="container">
            <div id="testimonies-top">
                <div class="section-title">
                    <h2>
                        Our students <u>love</u> <br />
                        what we do
                    </h2>

                    <p>
                        Build digital skills with our online courses and
                        certificates. Developed with the guidance of our leading
                        practitioners from world-class universities and
                        companies, our curriculum is primed for industry
                        relevance.
                    </p>
                </div>

                <div id="testimonies-images">
                    <img
                        src="/src/assets/landing-page/testimonies/landing-tesimony-1.png"
                        alt=""
                        id="testimonies-img-1"
                    />

                    <img
                        src="/src/assets/landing-page/testimonies/landing-tesimony-2.png"
                        alt=""
                        id="testimonies-img-2"
                    />

                    <img
                        src="/src/assets/landing-page/testimonies/landing-tesimony-3.png"
                        alt=""
                        id="testimonies-img-3"
                    />
                </div>
            </div>

            <div class="slider">
                <div class="slider-list">
                    <div class="slider-inner">
                        <div class="testimony-item">
                            <h3>
                                “I can whole-heartedly say that this programme
                                met all my expectations”
                            </h3>

                            <p>
                                Through this programme, I managed to gain new
                                knowledge and experience that aided my journey
                                to work in a multinational company. TalentLabs'
                                career support, courses, and CV workshop played
                                a significant role in helping me secure my
                                placement in Lenovo. Thus, I can wholeheartedly
                                say that this programme met all my expectations.
                            </p>

                            <div class="testimony-item-profile">
                                <img
                                    src="/src/assets/landing-page/testimonies/testimony-profile-ke.png"
                                    alt=""
                                />
                                <div>
                                    <h4>Khairul Ezzadi</h4>
                                    <span>Lenovo</span>
                                </div>
                            </div>

                            <div class="testimony-item-course">
                                <span>
                                    Foundation Certificate in Technology
                                    Management
                                    <IconArrow />
                                </span>
                            </div>
                        </div>

                        <div class="testimony-item">
                            <h3>
                                “TalentLabs is invaluable in helping me venture
                                to a new field”
                            </h3>

                            <p>
                                Coming from a biochemistry background, I had a
                                very limited knowledge in tech. TalentLabs is
                                invaluable in helping me venture to a new field!
                                This career change is not easy, but the learning
                                and experience gained was so rewarding and
                                enjoyable.
                                <br />
                                <br />
                                Thanks to all mentors and classmated who have
                                been helpful throughout the programme.
                            </p>

                            <div class="testimony-item-profile">
                                <img
                                    src="/src/assets/landing-page/testimonies/testimony-profile-na.png"
                                    alt=""
                                />
                                <div>
                                    <h4>Noor Aisyah</h4>
                                    <span>Telus International</span>
                                </div>
                            </div>

                            <div class="testimony-item-course">
                                <span>
                                    Foundation Certificate in Business Analytics
                                </span>
                                <IconArrow />
                            </div>
                        </div>

                        <div class="testimony-item">
                            <h3>
                                “TalentLabs was a great help in launching my
                                career and landing my dream job”
                            </h3>

                            <p>
                                TalentLabs' programme taught me all the
                                necessary knowledge and skills I need to enter
                                and thrive in the Tech industry, as well as the
                                opportunity to networ with new and like-minded
                                friends.
                                <br />
                                <br />
                                The career support from TalentLabs was a great
                                help in launching my career in Tech and landing
                                my dream job in CIMB.
                            </p>

                            <div class="testimony-item-profile">
                                <img
                                    src="/src/assets/landing-page/testimonies/testimony-profile-lwh.png"
                                    alt=""
                                />
                                <div>
                                    <h4>Lee Wynn Hann</h4>
                                    <span>CIMB</span>
                                </div>
                            </div>

                            <div class="testimony-item-course">
                                <span>
                                    Foundation Certificate in Data Analytics
                                </span>
                                <IconArrow />
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

<style scoped lang="scss">
#testimonies {
    &-top {
        display: grid;
        grid-template-columns: 1fr 45%;
        align-items: center;
        margin-bottom: 90px;
    }

    $imgGap: 20px;

    &-img-1 {
        height: calc(50% - $imgGap);
        width: 40%;
        right: 50%;
        top: 0;
    }

    &-img-2 {
        height: calc(50% - imgGap);
        width: 50%;
        bottom: 0;
    }

    &-img-3 {
        top: 0;
        right: 0;
        height: 90%;
        width: calc(50% - $imgGap);
    }

    &-images {
        height: 400px;
        position: relative;

        img {
            position: absolute;
            border-radius: 20px;
            object-fit: cover;
        }
    }

    .slider {
        &-btns-btn {
            background-color: white;
        }

        &-btns-btn:hover {
            background-color: var(--lightBlue);
        }
    }
}

.testimony-item {
    background-color: white;
    width: calc((100% - 20px * 2) / 3);
    padding: 40px 35px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    p {
        flex: 1;
        font-size: 0.9rem;
        color: var(--textLight);
        line-height: 1.3rem;
        margin: 25px 0 35px;
    }

    &-profile {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--borderMedium);
        padding-bottom: 25px;
        margin-bottom: 25px;

        img {
            $size: 50px;
            height: $size;
            width: $size;
            border-radius: 50%;
            margin-right: 20px;
        }

        h4 {
            font-size: 0.95rem;
            margin-bottom: 3px;
        }

        span {
            font-size: 0.9rem;
            color: var(--textMedium);
        }
    }

    &-course {
        /* display: flex; */
        /* align-content: center !important; */
        user-select: none;
        cursor: pointer;

        span {
            color: var(--purple);
            font-weight: 500;
            font-size: 0.92rem;
            line-height: 1.35rem;
            transition: color 0.4s ease-out;
        }

        svg {
            $size: 10px;
            height: $size;
            width: $size;
            fill: var(--purple);
            margin-left: 7px;
            transition: transform 0.4s ease-out, fill 0.4s ease-out;
        }
    }

    &-course:hover {
        span {
            color: var(--black);
        }

        svg {
            transform: translateX(5px);
            fill: var(--black);
        }
    }
}
</style>
