// =========================================================
// NAVBAR
// =========================================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger.classList.remove("active");
        });

    });

}


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(".scroll-reveal");

if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -30px 0px"
        });


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}


// =========================================================
// ACTIVE NAV LINK ON SCROLL
// =========================================================

const sections =
    document.querySelectorAll("section[id]");

const navLinksAll =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinksAll.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// =========================================================
// TYPING EFFECT
// =========================================================

const typingText =
    document.getElementById("typingText");

const words = [
    "Web Experiences.",
    "Front-End Developer.",
    "Software Engineer.",
    "UI/UX Enthusiast.",
    "Creative Coder."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;


function typeEffect() {

    if (!typingText) return;

    const currentWord =
        words[wordIndex];


    if (isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        speed = 70;

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        speed = 130;

    }


    if (
        !isDeleting &&
        charIndex === currentWord.length
    ) {

        speed = 1500;
        isDeleting = true;

    }


    if (
        isDeleting &&
        charIndex === 0
    ) {

        isDeleting = false;

        wordIndex =
            (wordIndex + 1) % words.length;

        speed = 300;

    }


    setTimeout(typeEffect, speed);
}


typeEffect();



// =========================================================
// BACK TO TOP
// =========================================================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================================================
// EMAILJS
// =========================================================

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "n0dEbxfI7aiCdlIti"
    });

}


// =========================================================
// CONTACT FORM
// =========================================================

const contactForm =
    document.getElementById("contactForm");


const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");


const submitButton =
    document.getElementById("ticketSubmit");


// =========================================================
// ONLY RUN FORM CODE IF FORM EXISTS
// =========================================================

if (
    contactForm &&
    nameInput &&
    emailInput &&
    messageInput
) {


    // =====================================================
    // REGEX
    // =====================================================

    const nameRegex =
        /^[A-Za-z\u0600-\u06FF\s]+$/;


    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // =====================================================
    // CLEAN TEXT
    // =====================================================

    function cleanText(value) {

        return value
            .replace(/\s+/g, " ")
            .trim();

    }


    // =====================================================
    // SHOW ERROR
    // =====================================================

    function showError(
        input,
        errorElement,
        message
    ) {

        input.classList.remove(
            "input-valid"
        );

        input.classList.add(
            "input-error"
        );


        if (errorElement) {
            errorElement.textContent =
                message;
        }

    }


    // =====================================================
    // SHOW VALID
    // =====================================================

    function showValid(
        input,
        errorElement
    ) {

        input.classList.remove(
            "input-error"
        );

        input.classList.add(
            "input-valid"
        );


        if (errorElement) {
            errorElement.textContent =
                "";
        }

    }


    // =====================================================
    // VALIDATE NAME
    // =====================================================

    function validateName() {

        const value =
            cleanText(nameInput.value);


        if (value === "") {

            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            return false;
        }


        if (value.length < 3) {

            showError(
                nameInput,
                nameError,
                "Name must be at least 3 characters."
            );

            return false;
        }


        if (value.length > 50) {

            showError(
                nameInput,
                nameError,
                "Name must be less than 50 characters."
            );

            return false;
        }


        if (!nameRegex.test(value)) {

            showError(
                nameInput,
                nameError,
                "Name can contain letters and spaces only."
            );

            return false;
        }


        showValid(
            nameInput,
            nameError
        );

        return true;

    }


    // =====================================================
    // VALIDATE EMAIL
    // =====================================================

    function validateEmail() {

        const value =
            emailInput.value.trim();


        if (value === "") {

            showError(
                emailInput,
                emailError,
                "Please enter your email."
            );

            return false;
        }


        if (value.length > 100) {

            showError(
                emailInput,
                emailError,
                "Email is too long."
            );

            return false;
        }


        if (!emailRegex.test(value)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            return false;
        }


        showValid(
            emailInput,
            emailError
        );

        return true;

    }


    // =====================================================
    // VALIDATE MESSAGE
    // =====================================================

    function validateMessage() {

        const value =
            cleanText(messageInput.value);


        if (value === "") {

            showError(
                messageInput,
                messageError,
                "Please tell me about your project."
            );

            return false;
        }


        if (value.length < 10) {

            showError(
                messageInput,
                messageError,
                "Please write at least 10 characters."
            );

            return false;
        }


        if (value.length > 1000) {

            showError(
                messageInput,
                messageError,
                "Message must be less than 1000 characters."
            );

            return false;
        }


        showValid(
            messageInput,
            messageError
        );

        return true;

    }


    // =====================================================
    // LIVE VALIDATION
    // =====================================================

    nameInput.addEventListener(
        "input",
        () => {

            if (
                nameInput.value.length > 0
            ) {

                validateName();

            }

        }
    );


    emailInput.addEventListener(
        "input",
        () => {

            if (
                emailInput.value.length > 0
            ) {

                validateEmail();

            }

        }
    );


    messageInput.addEventListener(
        "input",
        () => {

            if (
                messageInput.value.length > 0
            ) {

                validateMessage();

            }

        }
    );


    // =====================================================
    // BLUR VALIDATION
    // =====================================================

    nameInput.addEventListener(
        "blur",
        validateName
    );

    emailInput.addEventListener(
        "blur",
        validateEmail
    );

    messageInput.addEventListener(
        "blur",
        validateMessage
    );


    // =====================================================
    // FORM SUBMIT
    // =====================================================

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            // ---------------------------------------------
            // VALIDATE
            // ---------------------------------------------

            const nameValid =
                validateName();

            const emailValid =
                validateEmail();

            const messageValid =
                validateMessage();


            // ---------------------------------------------
            // STOP IF INVALID
            // ---------------------------------------------

            if (
                !nameValid ||
                !emailValid ||
                !messageValid
            ) {

                if (!nameValid) {

                    nameInput.focus();

                } else if (!emailValid) {

                    emailInput.focus();

                } else {

                    messageInput.focus();

                }

                return;

            }


            // ---------------------------------------------
            // CHECK EMAILJS
            // ---------------------------------------------

            if (
                typeof emailjs === "undefined"
            ) {

                console.error(
                    "EmailJS library is not loaded."
                );

                alert(
                    "Email service is not available. Please try again later."
                );

                return;

            }


            // ---------------------------------------------
            // BUTTON LOADING
            // ---------------------------------------------

            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML = `
                    SENDING...
                    <i class="fa-solid fa-spinner fa-spin"></i>
                `;

            }


            try {

                // -----------------------------------------
                // SEND EMAIL
                // -----------------------------------------

                await emailjs.sendForm(
                    "service_iuvwqjz",
                    "template_lvplveo",
                    contactForm
                );


                // -----------------------------------------
                // RESET FORM
                // -----------------------------------------

                contactForm.reset();


                nameInput.classList.remove(
                    "input-valid",
                    "input-error"
                );

                emailInput.classList.remove(
                    "input-valid",
                    "input-error"
                );

                messageInput.classList.remove(
                    "input-valid",
                    "input-error"
                );


                if (nameError) {
                    nameError.textContent = "";
                }

                if (emailError) {
                    emailError.textContent = "";
                }

                if (messageError) {
                    messageError.textContent = "";
                }


                // -----------------------------------------
                // SUCCESS MESSAGE
                // -----------------------------------------

                const successMessage =
                    document.createElement("div");


                successMessage.className =
                    "form-success";


                successMessage.textContent =
                    "✓ Message sent successfully!";


                contactForm.appendChild(
                    successMessage
                );


                setTimeout(() => {

                    successMessage.remove();

                }, 5000);


            } catch (error) {

                // -----------------------------------------
                // ERROR
                // -----------------------------------------

                console.error(
                    "EmailJS Error:",
                    error
                );


                const errorMessage =
                    document.createElement("div");


                errorMessage.className =
                    "form-error";


                errorMessage.textContent =
                    "✕ Failed to send message. Please try again.";


                contactForm.appendChild(
                    errorMessage
                );


                setTimeout(() => {

                    errorMessage.remove();

                }, 5000);

            }


            // ---------------------------------------------
            // RESET BUTTON
            // ---------------------------------------------

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.innerHTML = `
                    SEND MESSAGE
                    <i class="fa-solid fa-arrow-right"></i>
                `;

            }

        }
    );

}