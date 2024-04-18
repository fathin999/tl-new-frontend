<script setup>
import IconSocialsFb from "../icons/footer/IconSocialsFb.vue";
import IconSocialsX from "../icons/footer/IconSocialsX.vue";
import IconSocialsLi from "../icons/footer/IconSocialsLi.vue";
import IconSocialsIg from "../icons/footer/IconSocialsIg.vue";
import IconSocialsWs from "../icons/footer/IconSocialsWs.vue";
</script>

<template>
    <footer>
        <div class="container">
            <div id="footer-top">
                <div>
                    <a href="/">
                        <img
                            src="/src/assets/talentlabs-logo-white.png"
                            alt="TalentLabs logo"
                        />
                    </a>

                    <div id="footer-socials">
                        <IconSocialsFb />
                        <IconSocialsX />
                        <IconSocialsIg />
                        <IconSocialsLi />
                        <IconSocialsWs />
                    </div>

                    <p>
                        Level 5, <br />
                        Core F, Cyberport 3, <br />
                        100 Cyberport Road, <br />
                        Hong Kong
                        <br />
                        <br />
                    </p>
                </div>

                <div class="footer-links">
                    <h4>LINKS</h4>

                    <a href="/about">About us</a>
                    <a href="/teams">Our team</a>
                    <a href="/contact">Contact</a>
                    <a href="/be-an-instructor">Be an instructor</a>
                </div>

                <div class="footer-links">
                    <h4>SERVICES</h4>

                    <a href="/courses">Courses</a>
                    <a href="/jobs">Jobs</a>
                    <a href="/special-programmes">Special programmes</a>
                    <!-- <a href="/for-enterprise">For enterprise</a> -->
                    <!-- <a href="/for-government">For government</a> -->
                </div>

                <div class="footer-links">
                    <h4>COMPANIES</h4>

                    <a href="https://www.talentlabs.org" target="_blank">
                        TalentLabs
                    </a>
                    <a href="https://www.techjobasia.com" target="_blank">
                        TechJobAsia
                    </a>
                    <a href="https://www.bridgespace.com" target="_blank">
                        Bridgespace
                    </a>
                </div>
            </div>
            <div id="footer-bottom">
                <span>© 2024 TalentLabs</span>

                <div>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <b>|</b>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    $fontColor: rgba(255, 255, 255, 0.9);
    margin: 10px;
    border-radius: 25px;
    background-color: var(--black);
    color: $fontColor;
    padding: 90px 0;
    font-size: 0.95rem;

    a {
        color: $fontColor;
        user-select: none;
        cursor: pointer;
        transition: opacity 0.4s ease-out;
    }

    a:hover {
        opacity: 0.8;
    }

    img {
        width: 300px;
        height: 28px;
        object-fit: contain;
        object-position: center left;
    }

    #footer {
        &-socials {
            margin: 30px 0 60px;

            svg {
                $size: 35px;
                height: $size;
                width: $size;
                margin-right: 7px;
                user-select: none;
                cursor: pointer;
                transition: transform 0.3s ease-out, opacity 0.3s ease-out;
            }

            svg:hover {
                transform: scale(0.9);
                opacity: 0.8;
            }
        }

        &-top {
            display: flex;
            justify-content: space-between;
        }

        &-bottom {
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            font-size: 0.9rem;
            justify-content: space-between;

            b {
                display: inline-block;
                padding: 0 20px;
            }
        }
    }

    .footer {
        &-links {
            padding-right: 30px;

            h4 {
                opacity: 0.5;
                margin-bottom: 40px;
            }

            a {
                display: block;
                margin-bottom: 20px;
            }
        }
    }
}
</style>
