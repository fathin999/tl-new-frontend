<template>
    <div id="courses-list">
        <div class="courses-item">
            <div class="courses-item-img">
                <img
                    src="/src/assets/courses/course-cada.png"
                    alt="CADA"
                    class="courses-item-banner"
                />

                <div class="courses-item-badge">
                    <img src="/src/assets/courses/badge.png" alt="Badge" />
                </div>
            </div>

            <div class="courses-item-title">
                <h4>Certified Associate in Data Analytics</h4>
            </div>

            <span> Intermediate <b>·</b> Certified Associate </span>

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
                <img
                    src="/src/assets/courses/course-cabed.png"
                    alt="CADA"
                    class="courses-item-banner"
                />

                <div class="courses-item-badge">
                    <img src="/src/assets/courses/badge.png" alt="Badge" />
                </div>
            </div>

            <div class="courses-item-title">
                <h4>Certified Associate in Backend Development</h4>
            </div>

            <span>Intermediate <b>·</b> Certified Associate</span>

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
                <img
                    src="/src/assets/courses/course-case.png"
                    alt="CADA"
                    class="courses-item-banner"
                />

                <div class="courses-item-badge">
                    <img src="/src/assets/courses/badge-aws.png" alt="Badge" />
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

        <div class="courses-item">
            <div class="courses-item-img">
                <img
                    src="/src/assets/courses/course-cada.png"
                    alt="CADA"
                    class="courses-item-banner"
                />

                <div class="courses-item-badge">
                    <img src="/src/assets/courses/badge.png" alt="Badge" />
                </div>
            </div>

            <div class="courses-item-title">
                <h4>Certified Associate in Data Analytics</h4>
            </div>

            <span> Intermediate <b>·</b> Certified Associate </span>

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
                <img
                    src="/src/assets/courses/course-cabed.png"
                    alt="CADA"
                    class="courses-item-banner"
                />

                <div class="courses-item-badge">
                    <img src="/src/assets/courses/badge.png" alt="Badge" />
                </div>
            </div>

            <div class="courses-item-title">
                <h4>Certified Associate in Backend Development</h4>
            </div>

            <span>Intermediate <b>·</b> Certified Associate</span>

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
                <img
                    src="/src/assets/courses/course-case.png"
                    alt="CADA"
                    class="courses-item-banner"
                />

                <div class="courses-item-badge">
                    <img src="/src/assets/courses/badge-aws.png" alt="Badge" />
                </div>
            </div>

            <div class="courses-item-title">
                <h4>
                    AWS DevOps Engineering, Continuous Integration & Continuous
                    Deployment
                </h4>
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
</template>

<style scoped lang="scss">
#courses-list {
    $gap: 20px;

    display: flex;
    flex-wrap: wrap;
    gap: $gap;
    row-gap: 40px;

    .courses-item {
        width: calc((100% - $gap * 2) / 3);
    }
}

.courses-item {
    $padding: 20px;
    $imgMargin: calc(-1 * $padding);
    padding: $padding;
    padding-bottom: 110px;
    border-radius: 15px;
    transition: boxShadow 0.3s ease-out;

    h4 {
        font-size: 1.1rem;
        line-height: 1.6rem;
        min-height: 1.2rem;
        max-height: 3.3rem;
    }

    span {
        font-size: 0.9rem;

        b {
            padding: 0 7px;
        }
    }

    &-img {
        height: 80px;
        margin: $imgMargin $imgMargin 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        overflow: visible;
    }

    &-badge {
        left: $padding;
        bottom: -30px;
        border-color: rgb(229, 229, 229);
    }

    &-title {
        margin: 45px 0 10px;
    }

    &-provider {
        $size: 30px;
        height: $size;
        left: $padding;
        bottom: $padding;
        right: $padding;
        font-size: 0.9rem;

        img {
            height: $size;
            width: $size;
            border-radius: 7px;
        }
    }
}

// ---------------
// HOVER
// ---------------

@media (hover: hover) {
    .courses-item:hover {
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

        .courses-item-banner {
            transform: scale(1);
        }
    }
}
</style>
