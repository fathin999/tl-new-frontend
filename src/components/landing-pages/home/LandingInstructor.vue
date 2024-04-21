<script setup>
import IconArrow from "../../icons/IconArrow.vue";
</script>

<template>
    <div class="section blue" id="instructor">
        <div class="container">
            <div class="section-title">
                <h2>
                    Interested in <u>shaping</u>
                    <br />
                    future digital innovators?
                </h2>

                <p>
                    Teach with TalentLabs and make a global impact. Unleash your
                    expertise and join our vibrant community of instructors
                    dedicated to making a difference.
                </p>

                <a class="btn-primary btn-arrow" href="/be-an-instructor">
                    Be an instructor

                    <IconArrow />
                </a>
            </div>

            <img
                src="/src/assets/landing-page/instructor/landing-instructor.png"
                alt="Be an instructor"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
#instructor {
    padding: 100px 0 80px;
    position: relative;

    $width: 500px;

    .container {
        display: grid;
        grid-template-columns: 1fr $width;
        align-items: center;
        justify-content: space-between;
        gap: 100px;
        min-height: 350px;

        img {
            width: $width;
            object-fit: contain;
            position: absolute;
            bottom: 0;
            right: calc((100vw - 1200px) / 2);
            top: 0;
            height: 100%;
            object-position: center bottom;
        }
    }

    .section-title {
        h2 {
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 40px;
            width: 100%;
        }

        .btn-arrow {
            position: relative;
        }
    }
}
</style>
