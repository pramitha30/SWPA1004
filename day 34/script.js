
        const validationState = {
            fullName: false,
            email: false,
            age: false,
            password: false,
            confirmPassword: false
        };

        const form = document.getElementById('registrationForm');
        const submitBtn = document.getElementById('submitBtn');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const submitText = document.getElementById('submitText');

        function validateName(name) {
            const nameRegex = /^[a-zA-Z\s]{2,50}$/;
            return nameRegex.test(name.trim());
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validateAge(age) {
            const ageNum = parseInt(age);
            return !isNaN(ageNum) && ageNum >= 13 && ageNum <= 120;
        }

        function validatePassword(password) {
            return {
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /\d/.test(password),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
                isValid: password.length >= 8 && 
                        /[A-Z]/.test(password) && 
                        /[a-z]/.test(password) && 
                        /\d/.test(password) && 
                        /[!@#$%^&*(),.?":{}|<>]/.test(password)
            };
        }

        function getPasswordStrength(password) {
            const validation = validatePassword(password);
            let score = 0;
            
            if (validation.length) score++;
            if (validation.uppercase) score++;
            if (validation.lowercase) score++;
            if (validation.number) score++;
            if (validation.special) score++;

            if (score <= 2) return 'weak';
            if (score <= 4) return 'medium';
            return 'strong';
        }

        function showValidation(inputId, isValid, errorMessage = '', successMessage = '') {
            const input = document.getElementById(inputId);
            const icon = document.getElementById(inputId + 'Icon');
            const error = document.getElementById(inputId + 'Error');
            const success = document.getElementById(inputId + 'Success');

            input.classList.remove('valid', 'invalid');
            icon.classList.remove('valid', 'invalid');
            error.classList.remove('show');
            if (success) success.classList.remove('show');

            if (isValid) {
                input.classList.add('valid');
                icon.classList.add('valid');
                icon.textContent = '✓';
                if (success && successMessage) {
                    success.textContent = successMessage;
                    success.classList.add('show');
                }
            } else if (input.value.length > 0) {
                input.classList.add('invalid');
                icon.classList.add('invalid');
                icon.textContent = '✗';
                if (errorMessage) {
                    error.textContent = errorMessage;
                    error.classList.add('show');
                }
            } else {
                icon.textContent = '';
            }
        }

        function updatePasswordStrength(password) {
            const strengthContainer = document.getElementById('passwordStrength');
            const strengthFill = document.getElementById('strengthFill');
            const strengthText = document.getElementById('strengthText');
            const validation = validatePassword(password);

            if (password.length === 0) {
                strengthContainer.classList.remove('show');
                return;
            }

            strengthContainer.classList.add('show');
            
            const strength = getPasswordStrength(password);
            
            strengthFill.className = `strength-fill ${strength}`;
            strengthText.className = `strength-text ${strength}`;
            
            switch (strength) {
                case 'weak':
                    strengthText.textContent = 'Weak Password';
                    break;
                case 'medium':
                    strengthText.textContent = 'Medium Password';
                    break;
                case 'strong':
                    strengthText.textContent = 'Strong Password';
                    break;
            }

            document.getElementById('req-length').classList.toggle('met', validation.length);
            document.getElementById('req-uppercase').classList.toggle('met', validation.uppercase);
            document.getElementById('req-lowercase').classList.toggle('met', validation.lowercase);
            document.getElementById('req-number').classList.toggle('met', validation.number);
            document.getElementById('req-special').classList.toggle('met', validation.special);
        }

        function updateSubmitButton() {
            const allValid = Object.values(validationState).every(state => state);
            
            if (allValid) {
                submitBtn.classList.add('enabled');
                submitBtn.disabled = false;
            } else {
                submitBtn.classList.remove('enabled');
                submitBtn.disabled = true;
            }
        }

        document.getElementById('fullName').addEventListener('input', function(e) {
            const value = e.target.value;
            const isValid = validateName(value);
            
            validationState.fullName = isValid;
            
            if (value.length === 0) {
                showValidation('fullName', false);
            } else if (isValid) {
                showValidation('fullName', true, '', 'Great! Your name looks good.');
            } else {
                showValidation('fullName', false, 'Please enter a valid name (2-50 characters, letters only).');
            }
            
            updateSubmitButton();
        });

        document.getElementById('email').addEventListener('input', function(e) {
            const value = e.target.value;
            const isValid = validateEmail(value);
            
            validationState.email = isValid;
            
            if (value.length === 0) {
                showValidation('email', false);
            } else if (isValid) {
                showValidation('email', true, '', 'Perfect! Valid email address.');
            } else {
                showValidation('email', false, 'Please enter a valid email address.');
            }
            
            updateSubmitButton();
        });

        document.getElementById('age').addEventListener('input', function(e) {
            const value = e.target.value;
            const isValid = validateAge(value);
            
            validationState.age = isValid;
            
            if (value.length === 0) {
                showValidation('age', false);
            } else if (isValid) {
                showValidation('age', true, '', 'Age verified successfully.');
            } else {
                showValidation('age', false, 'Please enter a valid age between 13 and 120.');
            }
            
            updateSubmitButton();
        });

        document.getElementById('password').addEventListener('input', function(e) {
            const value = e.target.value;
            const validation = validatePassword(value);
            
            validationState.password = validation.isValid;
            updatePasswordStrength(value);
            
            if (value.length === 0) {
                showValidation('password', false);
            } else if (validation.isValid) {
                showValidation('password', true);
            } else {
                showValidation('password', false, 'Password must meet all requirements below.');
            }
            
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (confirmPassword.length > 0) {
                document.getElementById('confirmPassword').dispatchEvent(new Event('input'));
            }
            
            updateSubmitButton();
        });

        document.getElementById('confirmPassword').addEventListener('input', function(e) {
            const value = e.target.value;
            const password = document.getElementById('password').value;
            const isValid = value === password && value.length > 0;
            
            validationState.confirmPassword = isValid;
            
            if (value.length === 0) {
                showValidation('confirmPassword', false);
            } else if (isValid) {
                showValidation('confirmPassword', true, '', 'Passwords match perfectly!');
            } else {
                showValidation('confirmPassword', false, 'Passwords do not match.');
            }
            
            updateSubmitButton();
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const allValid = Object.values(validationState).every(state => state);
            
            if (!allValid) {
                alert('Please fix all errors before submitting the form.');
                return;
            }

            submitBtn.disabled = true;
            loadingSpinner.style.display = 'inline-block';
            submitText.textContent = 'Creating Account...';

            setTimeout(() => {
                showSuccessPopup();
                
                loadingSpinner.style.display = 'none';
                submitText.textContent = 'Create Account';
                submitBtn.disabled = false;
            }, 2000);
        });

        function showSuccessPopup() {
            document.getElementById('overlay').classList.add('show');
            document.getElementById('successPopup').classList.add('show');
        }

        function closeSuccessPopup() {
            document.getElementById('overlay').classList.remove('show');
            document.getElementById('successPopup').classList.remove('show');
            
          
            form.reset();
            
            Object.keys(validationState).forEach(key => {
                validationState[key] = false;
                showValidation(key, false);
            });
            
            document.getElementById('passwordStrength').classList.remove('show');
            
            updateSubmitButton();
        }

        document.getElementById('overlay').addEventListener('click', closeSuccessPopup);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const popup = document.getElementById('successPopup');
                if (popup.classList.contains('show')) {
                    closeSuccessPopup();
                }
            }
        });

        updateSubmitButton();