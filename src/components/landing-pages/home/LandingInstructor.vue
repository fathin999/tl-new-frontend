<template>
    <div class="section blue" id="instructor">
        <div class="container">
            <div class="section-title">
                <h2>
                    Interested in shaping
                    <br />
                    future digital innovators?
                </h2>
                <h2>Be an <u>instructor.</u></h2>

                <p>
                    Teach with TalentLabs and make a global impact. Unleash your
                    expertise and join our vibrant community of instructors
                    dedicated to making a difference.
                </p>

                <a class="btn-primary btn-m" href="/be-an-instructor">
                    Apply now
                </a>
            </div>

            <img
                src="/src/assets/landing-page/instructor.png"
                alt="Be an instructor"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
#instructor {
    .container {
        display: grid;
        grid-template-columns: 1fr 40%;
        align-items: center;
        justify-content: space-between;

        img {
            height: 470px;
            width: 350px;
            object-fit: cover;
            border-radius: 20px;
            margin: auto;
        }
    }

    .section-title {
        h2 {
            margin-bottom: 30px;
        }

        p {
            margin: 40px 0;
        }
    }
}
</style>
