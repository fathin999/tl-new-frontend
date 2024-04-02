<script setup>
import IconCheck from "../icons/IconCheck.vue";
import IconChevron from "../icons/IconChevron.vue";
</script>

<template>
    <div id="filter">
        <div class="filter-item open">
            <div class="filter-item-btn">
                <h2>Topic</h2>
                <IconChevron />
            </div>

            <div class="filter-item-list">
                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Data analysis</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Artificial intelligence</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox checked">
                        <IconCheck />
                    </div>

                    <span>Software engineering</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Frontend development</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>UI / UX Design</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox checked">
                        <IconCheck />
                    </div>

                    <span>Backend development</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Database</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>DevOps</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox checked">
                        <IconCheck />
                    </div>

                    <span>Digital marketing</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Cybersecurity</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Blockchain</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Technology Management</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Business</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Finance</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Python</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Javascript</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>HTML & CSS</span>
                </div>
            </div>
        </div>

        <div class="filter-item">
            <div class="filter-item-btn">
                <h2>Level</h2>
                <IconChevron />
            </div>

            <div class="filter-item-list">
                <div class="filter-item-input">
                    <div class="filter-item-input-form radio clicked"></div>

                    <span>Beginner</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form radio"></div>

                    <span>Intermediate</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form radio"></div>

                    <span>Advanced</span>
                </div>
            </div>
        </div>

        <div class="filter-item">
            <div class="filter-item-btn">
                <h2>Provider</h2>
                <IconChevron />
            </div>

            <div class="filter-item-list">
                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox checked">
                        <IconCheck />
                    </div>

                    <span>TalentLabs</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>AWS</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form checkbox">
                        <IconCheck />
                    </div>

                    <span>Google Certificates</span>
                </div>
            </div>
        </div>

        <div class="filter-item">
            <div class="filter-item-btn">
                <h2>Programme</h2>
                <IconChevron />
            </div>

            <div class="filter-item-list">
                <div class="filter-item-input">
                    <div class="filter-item-input-form radio clicked"></div>

                    <span>K-Youth</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form radio"></div>

                    <span>MySTEP</span>
                </div>

                <div class="filter-item-input">
                    <div class="filter-item-input-form radio"></div>

                    <span>Future Skills</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#filter {
    border-top: 1px solid var(--borderLight);
}

.filter-item {
    border-bottom: 1px solid var(--borderLight);
    user-select: none;

    &-btn {
        cursor: pointer;
        padding: 20px 0;
        padding-right: 5px;
        display: flex;
        align-items: center;

        h2 {
            font-size: 0.95rem;
            transition: color 0.3s ease-out;
            flex: 1;
        }

        svg {
            $size: 11px;
            transform: rotate(90deg);
            height: $size;
            width: $size;
            transition: fill 0.3s ease-out, rotate 0.3s ease-out;
            fill: var(--black);
            margin-left: 8px;
            margin-top: 2px;
        }
    }

    &-btn:hover {
        h2 {
            color: var(--purple);
        }

        svg {
            fill: var(--purple);
        }
    }

    &-list {
        overflow: hidden;
        opacity: 0;
        height: 0;
        padding: 0;
        transition: opacity 0.3s ease-out, height 0.3s ease-out,
            padding 0.3s ease-out;
    }

    &-input {
        display: flex;
        margin-bottom: 10px;
        line-height: 1.4rem;
        user-select: none;
        cursor: pointer;
        transition: color 0.2s ease-out;

        $size: 16px;

        &-form {
            height: $size;
            width: $size;
            border: 1px solid rgb(190, 190, 190);
            background-color: white;
            margin-right: 18px;
            margin-top: 2px;
            transition: border 0.3s ease-out, background 0.3s ease-out;
        }

        .radio {
            border-radius: 50%;
            position: relative;
        }

        .radio::before {
            $radioSize: 60%;
            position: absolute;
            content: "";
            height: $radioSize;
            width: $radioSize;
            border-radius: 50%;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            transition: background 0.3s ease-out;
        }

        .checkbox {
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                $checkSize: 12px;
                margin: auto;
                height: $checkSize;
                width: $checkSize;
                fill: white;
            }
        }

        .checked {
            background-color: var(--green);
            border-color: var(--green);
        }

        .clicked::before {
            background-color: var(--green);
        }
    }

    &-input:hover {
        color: var(--purple);
    }
}

.open {
    .filter-item {
        &-btn {
            svg {
                transform: rotate(270deg);
            }
        }

        &-list {
            opacity: 1;
            height: auto;
            padding: 10px 0 20px;
        }
    }
}
</style>
