document.addEventListener('DOMContentLoaded', function() {
    // Function to update topbar height
    function updateTopBarHeight() {
        const topBar = document.querySelector('.top_bar');
        if (topBar) {
            const height = topBar.offsetHeight;
            document.documentElement.style.setProperty('--topbar-actual-height', height + 'px');
            
            // Update navbar position
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.top = height + 'px';
            }
        }
    }

    // Update on load and resize
    updateTopBarHeight();
    window.addEventListener('resize', updateTopBarHeight);
    // Update when content might change
    setTimeout(updateTopBarHeight, 100);

    // Function to toggle dropdown
    window.toggleDropdown = function() {
        const dropdown = document.getElementById('profileDropdown');
        dropdown.classList.toggle('show');
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.profile-trigger') && !e.target.closest('.profile-dropdown')) {
                dropdown.classList.remove('show');
            }
        });
    }

    // Handle title radio buttons
    document.querySelectorAll('input[name="title"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const otherTitleInput = document.getElementById('otherTitleInput');
            otherTitleInput.style.display = this.value === 'Other' ? 'block' : 'none';
        });
    });

    // Handle other disability checkbox
    document.getElementById('otherDisability').addEventListener('change', function() {
        const otherInput = document.getElementById('otherDisabilityText');
        otherInput.style.display = this.checked ? 'inline-block' : 'none';
        if (this.checked) {
            otherInput.focus();
        }
    });

    // Ensure modal shows up when button is clicked
    $('[data-bs-toggle="modal"]').on('click', function() {
        academicModal.show();
    });
});

$(document).ready(function() {
    // Initialize Bootstrap modals
    var academicModal = new bootstrap.Modal(document.getElementById('requestModal'), {
        backdrop: 'static',
        keyboard: false
    });
    
    var employmentModal = new bootstrap.Modal(document.getElementById('employmentModal'), {
        backdrop: 'static',
        keyboard: false
    });

    // Handle modal close buttons
    $('.btn-close, [data-bs-dismiss="modal"]').on('click', function() {
        academicModal.hide();
        employmentModal.hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    // Handle academic entry form submission
    $('#academicEntryForm').on('submit', function(e) {
        e.preventDefault();
        academicModal.hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    // Handle employment entry form submission
    $('#employmentEntryForm').on('submit', function(e) {
        e.preventDefault();
        employmentModal.hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    // Navigation between sections
    $('#teacherFormNextBtn').on('click', function() {
        $('#teacherInfoForm').hide();
        $('#academicEntrySection').show();
    });

    $('#academicEntryBackBtn').on('click', function() {
        $('#academicEntrySection').hide();
        $('#teacherInfoForm').show();
    });

    $('#academicEntryNextBtn').on('click', function() {
        $('#academicEntrySection').hide();
        $('#employmentHistorySection').show();
    });

    $('#employmentHistoryBackBtn').on('click', function() {
        $('#employmentHistorySection').hide();
        $('#academicEntrySection').show();
    });

    $('#employmentHistoryNextBtn').on('click', function() {
        $('#employmentHistorySection').hide();
        $('#passportPictureForm').show();
    });

    // Handle back button click on passport form
    $('#passportFormBackBtn').on('click', function() {
        $('#passportPictureForm').hide();
        $('#employmentHistorySection').show();
    });

    // Handle finalize button click
    $('#finalize').on('click', function() {
        Swal.fire({
            title: 'Terms and Conditions',
            html: `
                <div class="text-left">
                    <p>By finalizing this form, you confirm that:</p>
                    <ol class="text-left" style="text-align: left; margin-left: 20px;">
                        <li>All information provided is accurate and complete.</li>
                        <li>You understand that false information may result in disciplinary action.</li>
                        <li>You agree to notify relevant authorities of any changes to your information.</li>
                        <li>You consent to the verification of your provided information.</li>
                    </ol>
                    <p>Do you agree to these terms and wish to submit your information?</p>
                </div>
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I agree',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Submitted!',
                    'Your information has been successfully submitted.',
                    'success'
                ).then(() => {
                    // Redirect to dashboard or next page
                    window.location.href = 'user_dashboard.html';
                });
            }
        });
    });

    // Initialize Select2
    $('.select2-nationality').select2({
        placeholder: 'nationality',
        maximumResultsForSearch: 5,
        width: '100%',
        dropdownParent: $('#nationality').parent()
    });
    
    // Rest of your existing JavaScript...
    // (Keep all the other functionality like file handling, form validation, etc.)
});

$(document).ready(function() {
    // last form
        // Add the passport picture form HTML
        const passportFormHTML = `
            <!-- Passport Picture Form -->
            <div class="form-section" id="passportPictureForm" style="display: none;">
                <h2 class="form-title">Passport Picture</h2>
                <p class="form-subtitle"><i>Next, you'll need to upload your passport picture</i></p>
                
                <div class="form-group mt-4">   
                    
                </div>

                <div class="form-group mt-3">
                    <input type="file" class="form-control">
                </div>
            
                <div class="form-group mt-3">
                    <div class="d-flex justify-content-between gap-3">
                        <button type="button" class="btn btn-secondary flex-grow-1" id="passportFormBackBtn">
                            Back
                        </button>
                        <button type="button" class="btn btn-primary flex-grow-1" id="finalize">
                            Finalize
                        </button>
                    </div>
                </div>
            </div>`;

        // Insert the passport form after the last form
        $('.container.w-640').append(passportFormHTML);

        // Handle next button click on the last form
        $('#teacherFormNextBtn').click(function() {
            $(this).closest('.form-section').hide();
            $('#academicEntrySection').show();
        });

        // Handle back button click on passport form
        $('#passportFormBackBtn').click(function() {
            $('#passportPictureForm').hide();
            $('#academicEntrySection').closest('.form-section').show();
        });
        // end
    $('.select2-nationality').select2({
        placeholder: 'nationality',
        maximumResultsForSearch: 5,
        width: '100%',
        dropdownParent: $('#nationality').parent()
    });
    
    // Adjust the position of the label when Select2 is focused
    $('.select2-nationality').on('select2:open', function() {
        $(this).parent().find('label').addClass('focused');
    }).on('select2:close', function() {
        if (!$(this).val()) {
            $(this).parent().find('label').removeClass('focused');
        }
    });

    // Toggle qualification fields based on checkbox
    $('#noQualification').on('change', function() {
        const $fields = $(this).closest('.form-group').find('#qualificationFields');
        if (this.checked) {
            $fields.slideUp();
            // Clear the fields
            $fields.find('input[type="date"], input[type="file"]').val('');
        } else {
            $fields.slideDown();
        }
    });

    // Set initial state of qualification fields
    if ($('#noQualification').is(':checked')) {
        $('#qualificationFields').hide();
    }

    // Handle form navigation
    $('#nextBtn').on('click', function() {
        $('.form-section').first().fadeOut(300, function() {
            $('#teacherInfoForm').fadeIn(300);
        });
    });

    $('#teacherFormBackBtn').on('click', function() {
        $('#teacherInfoForm').fadeOut(300, function() {
            $('.form-section').first().fadeIn(300);
        });
    });

    // Handle save buttons
    $('#saveBtn, #teacherFormSaveBtn').on('click', function() {
        // Add your save logic here
        alert('Form saved successfully!');
    });

    // Add passport picture preview functionality
    $(document).on('change', '#passportPictureForm input[type="file"]', function(event) {
        const file = event.target.files[0];
        const preview = $(this).closest('.form-section').find('.form-group.mt-4');
        
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                event.target.value = '';
                return;
            }

            if (file.size > 2 * 1024 * 1024) {
                alert('Image size should be less than 2MB');
                event.target.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                preview.css({
                    'display': 'flex',
                    'justify-content': 'center',
                    'width': '100%'
                });
                preview.html(`
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; width: 200px;">
                        <img src="${e.target.result}" 
                             alt="Passport Preview" 
                             style="width: 100%; height: auto; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: block;">
                        <p style="margin: 0; color: #666; font-size: 0.9rem; text-align: center;">Upload passport picture</p>
                    </div>
                `);
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle passport form next button
    $('#passportFormNextBtn').click(function() {
        $('#passportPictureForm').hide();
        $('#academicEntrySection').show();
    });

    // Handle academic entry back button
    $('#academicEntryBackBtn').click(function() {
        $('#academicEntrySection').hide();
        $('#teacherInfoForm').show();
    });

    // Handle academic entry next button
    $('#academicEntryNextBtn').click(function() {
        $('#academicEntrySection').hide();
        $('#passportPictureForm').show();
    });

    // Initialize Bootstrap modal
    var academicModal = new bootstrap.Modal(document.getElementById('requestModal'), {
        backdrop: 'static',
        keyboard: false
    });
    
    // Handle modal close button
    $('.btn-close, [data-bs-dismiss="modal"]').on('click', function() {
        academicModal.hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    // Handle academic entry form submission
    $('#academicEntryForm').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        academicModal.hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    });

    // Ensure modal shows up when button is clicked
    $('[data-bs-toggle="modal"]').on('click', function() {
        academicModal.show();
    });
});
