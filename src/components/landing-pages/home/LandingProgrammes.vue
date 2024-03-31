<script setup>
import IconChevron from "../icons/IconChevron.vue";
</script>

<template>
    <div class="section" id="special-programmes">
        <div class="container">
            <div class="section-title">
                <h2>
                    We have a <u>strong background</u><br />
                    in delivering successful<br />
                    career development initiatives
                </h2>
            </div>

            <div id="special-programmes-content">
                <div>
                    <div>
                        <div class="special-programmes-item">
                            <img src="" alt="" />
                            <span>K-Youth</span>
                            <IconChevron />
                        </div>

                        <div class="special-programmes-item">
                            <img src="" alt="" />
                            <span>Career Accelerator Programme</span>
                            <IconChevron />
                        </div>

                        <div class="special-programmes-item">
                            <img src="" alt="" />
                            <span>Google Career Certificates</span>
                            <IconChevron />
                        </div>

                        <div class="special-programmes-item">
                            <img src="" alt="" />
                            <span>
                                IVE x TalentLabs Train-To-Hire Programme
                            </span>
                            <IconChevron />
                        </div>

                        <div class="special-programmes-item">
                            <img src="" alt="" />
                            <span>MySTEP</span>
                            <IconChevron />
                        </div>

                        <div class="special-programmes-item">
                            <img src="" alt="" />
                            <span> Deep Tech & Future Skills Programme </span>
                            <IconChevron />
                        </div>
                    </div>
                </div>
            </div>

            <div id="special-programmes-banner">
                <h3>
                    Find out what <br />
                    we can do for you
                </h3>

                <div id="special-programmes-btns">
                    <a class="btn-primary btn-arrow">
                        For enterprise
                        <IconChevron />
                    </a>
                    <a class="btn-black btn-arrow">
                        For governments
                        <IconChevron />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#special-programmes {
    &-content {
        margin: 55px 0;
        display: grid;
        grid-template-columns: 40% 40%;
        justify-content: space-between;
        align-items: center;
    }

    &-banner {
        padding: 70px 80px;
        background-color: var(--bgMedium);
        border-radius: 20px;

        h3 {
            font-size: 2rem;
            line-height: 2.7rem;
        }
    }

    &-btns {
        margin-top: 30px;

        a {
            margin-right: 10px;
        }
    }
}

.special-programmes {
    &-item {
        font-weight: 500;
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        margin-bottom: 30px;

        img {
            $size: 50px;
            border: 1px solid red;
            height: $size;
            width: $size;
            border-radius: 50%;
            margin-right: 20px;
        }

        svg {
            $size: 13px;
            margin-left: 11px;
            height: $size;
            width: $size;
            fill: var(--black);
        }
    }

    &-item:hover {
        /* background-color: whitesmoke; */
    }
}
</style>
