<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import IconPhone from "../icons/contact/IconPhone.vue";
import IconMail from "../icons/contact/IconMail.vue";
import IconPin from "../icons/contact/IconPin.vue";
</script>

<template>
    <Navbar />

    <main class="container">
        <div id="contacts-info">
            <h1>Let's work together.</h1>

            <p>
                Reach out to us,
                <br />
                we'd love to hear from you!
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
                <p>
                    <b>Hong Kong</b>
                    <br />
                    Level 5, Core F, Cyberport 3,
                    <br />
                    100 Cyberport Road, Hong Kong
                    <br />
                    <br />
                    <b>Singapore</b>
                    <br />
                    OCBC Center East,
                    <br />
                    63 Chulia Street, #15-01,
                    <br />
                    Singapore 049514
                    <br />
                    <br />
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

        <form>
            <div class="input">
                <label>Name</label>
                <input placeholder="Your name" type="text" />
            </div>

            <div class="input">
                <label>Email</label>
                <input placeholder="Your@email.com" type="email" />
            </div>

            <div class="input">
                <label>How can we help you?</label>
                <textarea placeholder="Write your message here..." />
            </div>

            <div id="form-btn">
                <a class="btn-black btn-m">Send message</a>
            </div>
        </form>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
.container {
    display: grid;
    grid-template-columns: 1fr 50%;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
    padding: 160px 0 90px;
    position: relative;
    width: 1100px;
}

form {
    /* position: sticky;
    top: 140px;
    right: 0; */
    border: 1px solid whitesmoke;
    background-color: var(--bgLight);
    padding: 50px;
    border-radius: 20px;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */

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
}
</style>
