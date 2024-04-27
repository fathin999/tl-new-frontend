<script setup>
import IconPhone from "../icons/contact/IconPhone.vue";
import IconMail from "../icons/contact/IconMail.vue";
import IconPin from "../icons/contact/IconPin.vue";
import {ref} from "vue";
import {sendMessage} from "@/composable/backend/contact";
import LandingLayout from "../layout/LandingLayout.vue";
import Button from "../button/Button.vue";

// REF
const name = ref("");
const email = ref("");
const message = ref("");

// ------------------------------
// BACKEND
// ------------------------------
const handleClick = () => {
    sendMessage(name.value, email.value, message.value);
};
</script>

<template>
    <LandingLayout>
        <div class="container">
            <div id="contacts-info">
                <h1>Drop us a line.</h1>

                <p>
                    Ready to work together?
                    <br />
                    Reach out to us, we'd love to hear from you!
                </p>

                <div class="contacts-address">
                    <IconPhone />
                    <p>
                        <a href="tel:+60126710102"> +6012 671 0102 </a>
                    </p>
                </div>

                <div class="contacts-address">
                    <IconMail />
                    <p>
                        <a href="mailto:learn@talentlabs.org">
                            learn@talentlabs.org
                        </a>
                    </p>
                </div>

                <div class="contacts-address">
                    <IconPin />

                    <div id="contacts-address-item">
                        <p>
                            <b>Hong Kong</b>
                            <br />
                            Level 5, Core F, Cyberport 3,
                            <br />
                            100 Cyberport Road,
                            <br />
                            Hong Kong
                        </p>

                        <p>
                            <b>Singapore</b>
                            <br />
                            OCBC Center East,
                            <br />
                            63 Chulia Street, #15-01,
                            <br />
                            Singapore 049514
                        </p>

                        <p>
                            <b>Malaysia</b>
                            <br />
                            19, Jalan USJ Heights 1/1B,
                            <br />
                            USJ Heights Avenue 47500,
                            <br />
                            Subang Jaya, Selangor,
                            <br />
                            Malaysia.
                        </p>
                    </div>
                </div>
            </div>

            <form>
                <div class="input">
                    <label>Name</label>
                    <input
                        name="name"
                        placeholder="Your name"
                        type="text"
                        v-model="name"
                    />
                </div>

                <div class="input">
                    <label>Email</label>
                    <input
                        name="email"
                        placeholder="Your@email.com"
                        type="email"
                        v-model="email"
                    />
                </div>

                <div class="input">
                    <label>How can we help you?</label>
                    <textarea
                        name="message"
                        placeholder="Write your message here..."
                        v-model="message"
                    />
                </div>

                <div id="form-btn">
                    <Button :black="true" @click="handleClick">
                        Send message
                    </Button>
                </div>
            </form>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
.container {
    display: grid;
    grid-template-columns: 1fr 500px;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
    padding: 70px 0 90px;
    position: relative;
    width: 1000px;
    margin: auto;
}

form {
    #form-btn {
        text-align: center;
    }
}

#contacts-info {
    h1 {
        font-size: 2.5rem;
    }

    p {
        margin: 20px 0 60px;
        font-size: 1.1rem;
    }

    a:hover {
        color: var(--purple);
    }

    .contacts-address {
        margin-bottom: 40px;
        display: flex;

        svg {
            $size: 25px;
            height: $size;
            width: $size;
            margin-right: 30px;
        }

        p {
            margin: 0;
            font-size: 1rem;
            padding-top: 3px;
        }
    }

    #contacts-address-item {
        display: grid;
        gap: 15px;
    }
}

@media (max-width: 1100px) {
    .container {
        display: flex;
        flex-direction: column;
        width: auto;
        gap: 0;
    }

    #contacts-info {
        border-bottom: 1px solid gainsboro;
        padding-bottom: 20px;
        margin-bottom: 60px;

        #contacts-address-item {
            display: flex;
            gap: 40px;
        }
    }

    form {
        margin: 0 auto;
        width: 500px;
    }
}

@media (max-width: 800px) {
    .container {
        padding-top: 50px;
        width: 450px;
        margin: 0 auto;
    }

    #contacts-info {
        width: 100%;
        padding-bottom: 10px;
        margin-bottom: 50px;

        h1 {
            font-size: 2rem;
            line-height: 2.5rem;
        }

        p {
            margin: 10px 0 60px;
            color: var(--textLight);
            font-size: 0.95rem;
        }

        .contacts-address {
            margin-bottom: 30px;

            svg {
                margin-right: 27px;
            }

            p {
                font-size: 1.1rem;
                line-height: 1.7rem;
                padding-top: 1px;
                color: var(--black);
            }
        }

        #contacts-address-item {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
        }
    }

    form {
        width: 100%;
    }
}

@media (max-width: 600px) {
    .container {
        width: auto;
        margin: 0 20px;
    }

    #contacts-info {
        h1 {
            font-size: 1.7rem;
            line-height: 2.2rem;
        }
    }
}
</style>
