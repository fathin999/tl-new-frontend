<script setup>
import IconArrow from "../icons/IconArrow.vue";
import IconStar from "../icons/IconStar.vue";
import IconBookmark from "../icons/jobs/IconBookmark.vue";
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
                <a href="/jobs/1">
                    <h4>Junior Software Engineer (Frontend)</h4>
                </a>
            </div>

            <a href="/employers">
                <p>WRISTCHECK</p>
            </a>

            <div class="job-item-details">
                <span> Hong Kong <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>

                <br />
            </div>

            <div class="job-item-featured">
                <IconStar />
                <span> Featured </span>
            </div>

            <div class="job-item-btns">
                <a class="btn-primary-outline btn-s">
                    <IconBookmark />
                </a>

                <a class="btn-primary-outline btn-s"> Apply </a>
            </div>
        </div>

        <div class="job-item">
            <img
                src="/src/assets/jobs/employer-logo-dolphin.png"
                alt="Dolphin Pharmaceuticals"
                class="job-item-logo"
            />

            <div class="job-item-title">
                <a href="/jobs/1">
                    <h4>eCommerce Data Operations Specialist</h4>
                </a>
            </div>

            <a href="/employers">
                <p>Dolphin Pharmaceuticals</p>
            </a>

            <div class="job-item-details">
                <span> Hong Kong (Central) <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>
            </div>

            <div class="job-item-featured">
                <IconStar />
                <span> Featured </span>
            </div>

            <div class="job-item-btns">
                <a class="btn-primary-outline btn-s">
                    <IconBookmark />
                </a>

                <a class="btn-primary-outline btn-s"> Apply </a>
            </div>
        </div>

        <div class="job-item">
            <img
                src="/src/assets/jobs/employer-logo-fave.png"
                alt="Fave"
                class="job-item-logo"
            />

            <div class="job-item-title">
                <a href="/jobs/1">
                    <h4>Software Engineer (Backend)</h4>
                </a>
            </div>

            <a href="/employers">
                <p>Fave</p>
            </a>

            <div class="job-item-details">
                <span> Kuala Lumpur, Malaysia <b>·</b> Contract </span>

                <div class="job-item-details-style style-red">Remote</div>
            </div>

            <div class="job-item-btns">
                <a class="btn-primary-outline btn-s">
                    <IconBookmark />
                </a>

                <a class="btn-primary-outline btn-s"> Apply </a>
            </div>
        </div>

        <div class="job-item">
            <img
                src="/src/assets/jobs/employer-logo-wristcheck.png"
                alt="Wristcheck"
                class="job-item-logo"
            />

            <div class="job-item-title">
                <a href="/jobs/1">
                    <h4>Junior Software Engineer (Frontend)</h4>
                </a>
            </div>

            <a href="/employers">
                <p>WRISTCHECK</p>
            </a>

            <div class="job-item-details">
                <span> Hong Kong <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>

                <br />
            </div>

            <div class="job-item-btns">
                <a class="btn-primary-outline btn-s">
                    <IconBookmark />
                </a>

                <a class="btn-primary-outline btn-s"> Apply </a>
            </div>
        </div>

        <div class="job-item">
            <img
                src="/src/assets/jobs/employer-logo-dolphin.png"
                alt="Dolphin Pharmaceuticals"
                class="job-item-logo"
            />

            <div class="job-item-title">
                <a href="/jobs/1">
                    <h4>eCommerce Data Operations Specialist</h4>
                </a>
            </div>

            <a href="/employers">
                <p>Dolphin Pharmaceuticals</p>
            </a>

            <div class="job-item-details">
                <span> Hong Kong (Central) <b>·</b> Full-time </span>

                <div class="job-item-details-style style-blue">In office</div>
            </div>

            <div class="job-item-btns">
                <a class="btn-primary-outline btn-s">
                    <IconBookmark />
                </a>

                <a class="btn-primary-outline btn-s"> Apply </a>
            </div>
        </div>

        <div class="job-item">
            <img
                src="/src/assets/jobs/employer-logo-fave.png"
                alt="Fave"
                class="job-item-logo"
            />

            <div class="job-item-title">
                <a href="/jobs/1">
                    <h4>Software Engineer (Backend)</h4>
                </a>
            </div>

            <a href="/employers">
                <p>Fave</p>
            </a>

            <div class="job-item-details">
                <span> Kuala Lumpur, Malaysia <b>·</b> Contract </span>

                <div class="job-item-details-style style-red">Remote</div>
            </div>

            <div class="job-item-btns">
                <a class="btn-primary-outline btn-s">
                    <IconBookmark />
                </a>

                <a class="btn-primary-outline btn-s"> Apply </a>
            </div>
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
    $btnsWidth: 160px;

    width: 100%;
    padding: $padding $btnsWidth $padding $leftPadding;
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
        margin: 3px 0 0;

        h4 {
            font-size: 1.1rem;
            line-height: 1.6rem;
            min-height: 1.7rem;
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

    &-featured {
        display: flex;
        margin-top: 4px;
        align-items: center;

        span {
            font-size: 0.85rem;
            margin-top: 2px;
        }

        svg {
            $size: 13px;
            height: $size;
            width: $size;
            fill: rgb(189, 189, 189);
            margin-right: 10px;
        }
    }

    &-btns {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: $btnsWidth;
        display: flex;
        justify-content: flex-end;
        /* align-items: center; */
        padding-top: 30px;
        gap: 10px;
    }

    .btn-s {
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            $size: 16px;
            height: $size;
            width: $size;
            margin: auto;
        }
    }
}
</style>
