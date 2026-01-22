// ============================================================================
// PORTFOLIO WEBSITE - COMPLETE SCRIPTS.JS
// ============================================================================
// Wrapped in DOMContentLoaded for proper initialization
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // ========================================================================
    // 1. PROJECT DATA (REORDERED STRATEGICALLY)
    // ========================================================================
    const projects = [
        {
            id: 3, // PIMA (MOVED TO #1)
            title: "Pima Diabetes Data Optimization",
            description: "Statistical Preprocessing & Data Cleaning (Excel/JASP)",
            fullDescription: "Addressed a critical research bottleneck where 48.7% of Insulin data was missing. Engineered a rigorous Audit & Repair pipeline using Median Imputation and IQR Outlier Detection in Excel to salvage 100% of the sample size. Standardized variables via Z-Scores, satisfying statistical assumptions for robust Logistic Regression analysis in JASP.",
            icon: "line-chart",
            image: "images/PIMA_INDIANS.png", 
            documents: [
                { title: "View Methodology PDF", url: "docs/Pima Diabetes Data Optimization.pdf" }
            ]
        },
        {
            id: 1, // TMDB (MOVED TO #2)
            title: "TMDb Data Engineering",
            description: "End-to-End Pipeline & Risk Analysis (Python/Excel)",
            fullDescription: "Engineered a hybrid Python/Excel pipeline to transform raw, nested JSON data into a relational decision-support system. Automated the parsing of 100k+ personnel records, validated 4,412 films with 100% financial density.",
            icon: "database", 
            image: "images/tmdb-architecture.png",
            documents: [
                { title: "Read Executive Summary", url: "docs/EXECUTIVE SUMMARY TMDb.pdf" },
                { title: "Read Full Master Doc", url: "docs/TMDb Data Engineering Master Documentation.pdf" }
            ]
        },
        {
            id: 2, // 360 SALES (MOVED TO #3)
            title: "360° Sales Performance Hub", 
            description: "Sales Performance Analytics Dashboard (Excel)",
            fullDescription: "Engineered a data pipeline for 25,355 raw transaction records to create a single-view interactive dashboard. Identified $770k in revenue leakage due to inefficient discounting and validated a 51/49 Retail-Online split, directly supporting a strategic pricing review.",
            icon: "bar-chart-3",
            image: "images/360_dashboard.png",
            documents: [
                { title: "View Case Study PDF", url: "docs/360_Sales_Performance_Hub.pdf" } 
            ]
        },
        {
            id: 4,
            title: "Data Structuring",
            description: "Speech Segmentation & Genealogical Data Cleaning",
            fullDescription: "Structured multilingual genealogical records and segmented audio using Praat, significantly increasing dataset usability and reducing downstream processing time.",
            icon: "package",
            image: "images/card-2-cleaning.png",
        },
        {
            id: 5,
            title: "Future SQL Project",
            description: "Advanced database analytics",
            fullDescription: "A planned project showcasing advanced SQL queries to extract valuable insights from large, complex relational databases using joins, aggregation, and window functions.",
            icon: "database",
            image: "images/card-4-sql.png",
        },
        {
            id: 6,
            title: "Future Visualization Project",
            description: "Interactive business dashboard",
            fullDescription: "A future project to present business metrics and user-driven filters in an interactive dashboard built with tools like Tableau or Power BI.",
            icon: "trending-down",
            image: "images/card-5-visualization.png",
        }
    ];

    // ========================================================================
    // 2. DOM CACHE & STATE MANAGEMENT
    // ========================================================================
    const projectsGrid = document.getElementById('projectsGrid');
    const scrollTopBtn = document.getElementById('scrollTop');
    const profileImage = document.getElementById('profileImage');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.floating-nav .nav-item');
    const floatingNav = document.getElementById('floatingNav');
    const contactForm = document.getElementById('contact-form');

    let lastSubmitTime = 0;
    const SUBMIT_COOLDOWN = 5000; // 5 seconds
    let scrollTimeout; // For debounced scroll handler

    // ========================================================================
    // 3. VANTA.JS HERO ANIMATION (Auto System Sync)
    // ========================================================================
    function initializeVantaWaves() {
        try {
            if (typeof VANTA !== 'undefined') {
                let vantaEffect = null;

                // --- COLORS ---
                const darkColor = 0x092434;  // Deep Blue (Dark Mode)
                const lightColor = 0x5c87e6; // Soft Royal Blue (Light Mode)

                // --- FUNCTION TO START/RESTART ANIMATION ---
                const setVantaMode = (mode) => {
                    // 1. Destroy old instance to prevent glitches
                    if (vantaEffect) vantaEffect.destroy();

                    // 2. Pick color
                    const targetColor = (mode === 'dark') ? darkColor : lightColor;

                    // 3. Create new instance
                    vantaEffect = VANTA.WAVES({
                        el: "#hero",
                        mouseControls: true,
                        touchControls: true,
                        color: targetColor,
                        waveHeight: 15.0,
                        waveSpeed: 0.8,
                        zoom: 0.75,
                    });

                    // 4. Force Canvas Position (Fixes layout bugs)
                    setTimeout(() => {
                        const canvas = document.querySelector("#hero canvas");
                        if (canvas) {
                            canvas.style.position = "absolute";
                            canvas.style.top = "0";
                            canvas.style.left = "0";
                            canvas.style.width = "100%";
                            canvas.style.height = "100%";
                            canvas.style.zIndex = "0";
                        }
                    }, 50);
                };

                // --- SYSTEM THEME LISTENER ---
                const handleSystemChange = (e) => {
                    const newMode = e.matches ? 'dark' : 'light';
                    
                    // A. Update the HTML tag so your CSS (Text/Cards) updates too
                    document.documentElement.setAttribute('data-color-scheme', newMode);
                    
                    // B. Restart Vanta with the new color
                    setVantaMode(newMode);
                };

                // --- INITIALIZATION ---
                // 1. Check System Preference right now
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
                const initialMode = systemDark.matches ? 'dark' : 'light';

                // 2. Force the HTML tag to match System Preference (Overrides your hardcoded "light")
                document.documentElement.setAttribute('data-color-scheme', initialMode);

                // 3. Start Vanta
                setVantaMode(initialMode);

                // 4. Listen for future changes (Live switching)
                systemDark.addEventListener('change', handleSystemChange);
            }
        } catch (error) {
            console.warn("Vanta.js failed to initialize:", error);
        }
    }

    // ========================================================================
    // 4. RENDER PROJECTS DYNAMICALLY
    // ========================================================================
    function renderProjects() {
        if (!projectsGrid) return;

        projects.forEach(project => {
            const card = document.createElement('article');
            card.className = 'card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            
            card.innerHTML = `
                ${project.image ? `<img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy">` : `<div class="card-visual"><i data-lucide="${project.icon}"></i></div>`}
                <h3 class="p-title">${project.title}</h3>
                <p class="p-desc">${project.description}</p>
                <div class="card-summary">
                    <div class="card-visual-hover"><i data-lucide="${project.icon}"></i></div>
                    <h3 class="summary-title">${project.title}</h3>
                    <p class="summary-desc">${project.fullDescription}</p>
                    <button class="view-project-btn">View Project</button>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        // Re-render Lucide icons after projects are added
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // ========================================================================
    // 6. SCROLL HANDLER WITH DEBOUNCING
    // ========================================================================
    function handleScroll() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            // Trigger animations when section comes into view
            if (rect.top < window.innerHeight * 0.75 && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }

            // Update active navigation item
            if (rect.top <= 150 && rect.bottom >= 150) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeNav = document.querySelector(`.nav-item[data-section="${section.id}"]`);
                if (activeNav) activeNav.classList.add('active');
            }
        });

        // Show scroll-to-top button when scrolled past 180px
        if (scrollTopBtn) {
            if (scrollPosition > 180) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    }

    // Debounced scroll handler for better performance
    function debouncedHandleScroll() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleScroll);
    }

    // ========================================================================
    // 7. MODAL FUNCTIONS
    // ========================================================================
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.classList.add('body-no-scroll');
            // Focus first interactive element in modal
            const firstButton = modal.querySelector('button, input, textarea, a');
            if (firstButton) firstButton.focus();
        }
    }

    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.classList.remove('body-no-scroll');
    }

    function openProjectModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            document.getElementById('modalProjectTitle').textContent = project.title;
            document.getElementById('modalProjectDescription').textContent = project.fullDescription;
            
            // --- NEW CODE: Handle Multiple Buttons ---
            // 1. Clear any existing buttons from previous opens
            const existingContainer = document.getElementById('modalBtnContainer');
            if (existingContainer) existingContainer.remove();

            // 2. Check if this project has a 'documents' list
            if (project.documents && project.documents.length > 0) {
                // Create a container to hold the buttons side-by-side
                const btnContainer = document.createElement('div');
                btnContainer.id = 'modalBtnContainer';
                btnContainer.style.marginTop = "20px";
                btnContainer.style.display = "flex";
                btnContainer.style.gap = "15px"; // Space between buttons
                btnContainer.style.flexWrap = "wrap"; // Wrap on mobile

                // 3. Loop through the list and create a button for each
                project.documents.forEach(doc => {
                    const btn = document.createElement('a');
                    btn.href = doc.url;
                    btn.target = "_blank"; // Open in new tab
                    btn.className = "btn btn--primary";
                    // Add a nice file icon
                    btn.innerHTML = `<i data-lucide="file-text"></i> ${doc.title}`;
                    
                    // Add to the container
                    btnContainer.appendChild(btn);
                });

                // 4. Insert the container after the description text
                document.getElementById('modalProjectDescription').after(btnContainer);

                // 5. Refresh icons so the file icon shows up
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
            // ------------------------------------------

            openModal('projectModal');
        }
    }

    // ========================================================================
    // 8. PROJECT CARD EVENT LISTENERS
    // ========================================================================
    if (projectsGrid) {
        projectsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            if (card) {
                const projectIndex = Array.from(projectsGrid.children).indexOf(card);
                const project = projects[projectIndex];
                if (project) {
                    openProjectModal(project.id);
                }
            }
        });

        // Keyboard accessibility for project cards
        projectsGrid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const card = e.target.closest('.card');
                if (card) {
                    const projectIndex = Array.from(projectsGrid.children).indexOf(card);
                    const project = projects[projectIndex];
                    if (project) {
                        openProjectModal(project.id);
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // ========================================================================
    // 9. FLOATING NAVIGATION
    // ========================================================================
    if (floatingNav) {
        floatingNav.addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem) {
                e.preventDefault();
                const sectionId = navItem.getAttribute('href');
                const targetSection = document.querySelector(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // ========================================================================
    // 10. SCROLL-TO-TOP BUTTON
    // ========================================================================
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========================================================================
    // 11. PROFILE IMAGE MODAL
    // ========================================================================
    if (profileImage) {
        profileImage.addEventListener('click', () => openModal('profileModal'));
        // Keyboard accessibility
        profileImage.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                openModal('profileModal');
                e.preventDefault();
            }
        });
    }

    // ========================================================================
    // 12. MODAL CLOSE HANDLERS
    // ========================================================================
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    // ========================================================================
    // 13. FORM VALIDATION FUNCTIONS
    // ========================================================================
    function validateField(input, errorId, validationFn) {
        const errorElement = document.getElementById(errorId);
        const value = input.value.trim();

        if (!value) {
            input.classList.add('error');
            input.classList.remove('success');
            input.setAttribute('aria-invalid', 'true');
            if (errorElement) errorElement.textContent = 'Please fill out this field.';
            return false;
        }

        const errorMsg = validationFn ? validationFn(value) : null;
        if (errorMsg) {
            input.classList.add('error');
            input.classList.remove('success');
            input.setAttribute('aria-invalid', 'true');
            if (errorElement) errorElement.textContent = errorMsg;
            return false;
        }

        input.classList.remove('error');
        input.classList.add('success');
        input.setAttribute('aria-invalid', 'false');
        if (errorElement) errorElement.textContent = '';
        return true;
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return null;
    }

    function validateMessage(message) {
        if (message.length < 10) {
            return 'Message must be at least 10 characters';
        }
        return null;
    }

    // ========================================================================
    // 14. CONTACT FORM SETUP
    // ========================================================================
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Real-time validation on blur
        if (nameInput) {
            nameInput.addEventListener('blur', () => {
                validateField(nameInput, 'name-error', null);
            });
            nameInput.addEventListener('input', () => {
                if (nameInput.classList.contains('error')) {
                    validateField(nameInput, 'name-error', null);
                }
            });
        }

        if (emailInput) {
            emailInput.addEventListener('blur', () => {
                validateField(emailInput, 'email-error', validateEmail);
            });
            emailInput.addEventListener('input', () => {
                if (emailInput.classList.contains('error')) {
                    validateField(emailInput, 'email-error', validateEmail);
                }
            });
        }

        if (messageInput) {
            messageInput.addEventListener('blur', () => {
                validateField(messageInput, 'message-error', validateMessage);
            });
            messageInput.addEventListener('input', () => {
                if (messageInput.classList.contains('error')) {
                    validateField(messageInput, 'message-error', validateMessage);
                }
            });
        }

        // ====================================================================
        // 15. FORM SUBMISSION HANDLER
        // ====================================================================
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formStatus = document.getElementById('formStatus');
            const submitBtn = document.getElementById('formSubmitBtn');
            const btnSpinner = submitBtn.querySelector('.btn-spinner');

            // Rate limiting - prevent spam
            const now = Date.now();
            if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
                formStatus.textContent = 'Please wait before submitting again.';
                formStatus.className = 'form-status error';
                return;
            }
            lastSubmitTime = now;

            // Clear previous status
            formStatus.textContent = '';
            formStatus.className = 'form-status';

            // Validate all fields
            const isNameValid = validateField(nameInput, 'name-error', null);
            const isEmailValid = validateField(emailInput, 'email-error', validateEmail);
            const isMessageValid = validateField(messageInput, 'message-error', validateMessage);

            if (!isNameValid || !isEmailValid || !isMessageValid) {
                formStatus.textContent = 'Please complete all required fields';
                formStatus.className = 'form-status error';

                // Scroll to first error field for better UX
                const firstErrorField = document.querySelector('.form-group .error');
                if (firstErrorField) {
                    firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstErrorField.focus({ preventScroll: true });
                }
                return;
            }

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Check if EmailJS is loaded
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS is not loaded');
                formStatus.textContent = 'The email service is currently unavailable. Please try again later.';
                formStatus.className = 'form-status error';
                return;
            }

            try {
                submitBtn.disabled = true;
                submitBtn.classList.add('loading');
                if (btnSpinner) {
                    btnSpinner.style.display = 'flex';
                }

                // Generate timestamp
                const timestamp = new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });

                // Prepare template parameters
                const templateParams = {
                    name: name,
                    from_email: email,
                    message: message,
                    time: timestamp
                };

                // Send email via EmailJS
                const response = await emailjs.send(
                    'service_bof3lzf',
                    'template_6pcgvie',
                    templateParams
                );

                if (response.status === 200) {
                    formStatus.textContent = `Thanks, ${name}! Your message has been sent successfully. I'll get back to you soon.`;
                    formStatus.className = 'form-status success';
                    contactForm.reset();

                    // Clear validation classes
                    [nameInput, emailInput, messageInput].forEach(input => {
                        input.classList.remove('success', 'error');
                    });

                    // Track successful submission with Google Analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submission', {
                            event_category: 'Contact',
                            event_label: 'Contact Form',
                            value: 1
                        });
                    }

                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = 'form-status';
                    }, 5000);
                } else {
                    throw new Error('Failed to send email');
                }

            } catch (error) {
                console.error('Failed to send email:', error);

                let userMessage = 'An error occurred. Please email me directly at markanthony.nene18@gmail.com';
                if (error.status === 412) {
                    userMessage = 'There was a problem with the request. Please check your input and try again.';
                } else if (error.text) {
                    userMessage = 'The email service is temporarily unavailable. Please try again later or email me directly.';
                }

                formStatus.textContent = userMessage;
                formStatus.className = 'form-status error';

                // Track error with Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_error', {
                        event_category: 'Contact',
                        event_label: 'Contact Form Error',
                        value: 0
                    });
                }

            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                if (btnSpinner) {
                    btnSpinner.style.display = 'none';
                }
            }
        });
    }

    // ========================================================================
    // 16. INITIALIZATION SEQUENCE
    // ========================================================================
    function initializePortfolio() {
        // Initialize Vanta waves background
        initializeVantaWaves();

        // Render dynamic content
        renderProjects();

        // Set up scroll listener with debouncing
        window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
        
        // Run initial scroll handling
        handleScroll();

        // Render Lucide icons throughout the page
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        console.log('Portfolio initialized successfully');
    }

    // Start initialization
    initializePortfolio();

}); // END DOMContentLoaded
