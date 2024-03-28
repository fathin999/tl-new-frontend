<script></script>

<template>
    <div id="about-content">
        <div id="about-content-btns">
            <div class="about-item active">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">A</div>
                    <div class="about-btn-title">Learn skills</div>
                </div>

                <div class="about-item-description">
                    <p>Hello there</p>
                </div>
            </div>

            <div class="about-item">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">A</div>
                    <div class="about-btn-title">Build portfolio</div>
                </div>
            </div>

            <div class="about-item">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">A</div>
                    <div class="about-btn-title">Get hired</div>
                </div>
            </div>

            <div class="about-item">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">A</div>
                    <div class="about-btn-title">Network</div>
                </div>
            </div>
        </div>

        <div id="about-content-screen"></div>
    </div>
</template>

<style scoped lang="scss">
#about-content {
    display: grid;
    grid-template-columns: 350px 1fr;
    margin-top: 50px;
    gap: 70px;

    &-btns {
        padding-top: 40px;
    }

    .about-item {
        margin-bottom: 20px;

        &-description {
            padding-top: 20px;
            padding-left: 80px;

            p {
                color: var(--textMedium);
            }
        }
    }

    .about-btn {
        transition: background 0.4s ease-out;
        background-color: whitesmoke;
        padding: 10px;
        border-radius: 40px;
        display: flex;
        align-items: center;

        &-icon {
            $size: 50px;
            height: $size;
            width: $size;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-content: center;
            justify-content: center;
            color: var(--black);
        }

        &-title {
            padding-left: 25px;
            font-weight: 500;
            font-size: 1.05rem;
        }
    }

    .active {
        margin-bottom: 80px;

        .about-btn {
            background-color: var(--black);
            color: white;
        }
    }

    .about-btn:hover {
        background-color: gainsboro;
    }

    .active:hover {
        .about-btn {
            background-color: var(--black);
        }
    }

    &-screen {
        border: 1px solid whitesmoke;
    }
}
</style>
