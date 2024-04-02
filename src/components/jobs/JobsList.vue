<script setup>
import IconArrow from "../icons/IconArrow.vue";
</script>

<template>
    <div id="jobs-list">
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
                <span> Hong Kong <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>
            </div>

            <a class="btn-primary-outline btn-s">
                Apply

                <IconArrow />
            </a>
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
                <span> Hong Kong (Central) <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>
            </div>

            <a class="btn-primary-outline btn-s">
                Apply

                <IconArrow />
            </a>
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
                <span> Kuala Lumpur, Malaysia <b>·</b> Contract </span>

                <div class="job-item-details-style style-red">Remote</div>
            </div>

            <a class="btn-primary-outline btn-s">Apply <IconArrow /> </a>
        </div>

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
                <span> Hong Kong <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>
            </div>

            <a class="btn-primary-outline btn-s">Apply <IconArrow /> </a>
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
                <span> Hong Kong (Central) <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>
            </div>

            <a class="btn-primary-outline btn-s">Apply <IconArrow /> </a>
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
                <span> Kuala Lumpur, Malaysia <b>·</b> Contract </span>

                <div class="job-item-details-style style-red">Remote</div>
            </div>

            <a class="btn-primary-outline btn-s">Apply <IconArrow /> </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
#jobs-list {
    border-top: 1px solid var(--borderMedium);
}

.job-item {
    $padding: 25px;
    $imgSize: 60px;
    $leftPadding: calc($imgSize + 30px);

    width: 100%;
    padding: $padding 100px $padding $leftPadding;
    border-radius: 0;
    border-right: none;
    border-left: none;
    border-top: none;

    img {
        height: $imgSize;
        width: $imgSize;
        position: absolute;
        top: $padding;
        left: 0;
    }

    &-title {
        margin: 5px 0 3px;

        h4 {
            font-size: 1.1rem;
            transition: color 0.3s ease-out;
        }
    }

    p {
        font-size: 0.9rem;
    }

    &-details {
        position: static;
        margin: 5px 0 0;

        span {
            font-size: 0.9rem;
        }

        &-style {
            display: inline-block;
        }
    }

    .btn-s {
        position: absolute;
        /* top: $padding; */
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 38px;
        padding-right: 17px;

        svg {
            $size: 11px;
            height: $size;
            width: $size;
            margin: auto;
            margin-left: 5px;
        }
    }
}

.job-item:hover {
    border-color: var(--borderMedium);

    .job-item-title h4 {
        color: var(--purple);
    }
}
</style>
