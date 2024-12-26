// Function to view training details and trigger the modal
function viewTraining(trainingId) {
    // Populate training details (Replace with dynamic data logic as needed)
    document.getElementById('viewTitle').innerText = "Effective Teaching Methods";
    document.getElementById('viewRequestedBy').innerText = "John Doe";
    document.getElementById('viewDateRequested').innerText = "2024-01-15";
    document.getElementById('viewTrainingDate').innerText = "2024-02-01";
    document.getElementById('viewLocation').innerText = "Arusha";
    document.getElementById('viewStatus').innerHTML = '<span class="badge" style="background-color: #007c77;">Pending</span>';
    document.getElementById('viewDescription').innerText = "This training focuses on modern teaching methodologies and classroom management techniques.";

    // Show modal
    const viewTrainingModal = new bootstrap.Modal(document.getElementById('viewTrainingModal'));
    viewTrainingModal.show();
}

// Function to accept training
function acceptTraining(trainingId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to accept this training request?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007c77',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Accept'
    }).then((result) => {
        if (result.isConfirmed) {
            // Perform accept action here (e.g., update server or database)

            // Show success notification
            Swal.fire({
                title: 'Accepted!',
                text: 'The training request has been successfully accepted.',
                icon: 'success',
                confirmButtonColor: '#007c77'
            });
        }
    });
}

// Function to show rejection modal
function showRejectModal(trainingId) {
    // Populate hidden field with trainingId
    document.getElementById('trainingId').value = trainingId;

    // Show reject modal
    const rejectModal = new bootstrap.Modal(document.getElementById('rejectModal'));
    rejectModal.show();
}

// Function to reject training (triggered after rejection reason is submitted)
function rejectTraining() {
    const trainingId = document.getElementById('trainingId').value;
    const rejectReason = document.getElementById('rejectReason').value;

    if (!rejectReason.trim()) {
        Swal.fire({
            title: 'Error',
            text: 'Please provide a reason for rejection.',
            icon: 'error',
            confirmButtonColor: '#d33'
        });
        return;
    }

    // Hide modal
    const rejectModal = bootstrap.Modal.getInstance(document.getElementById('rejectModal'));
    rejectModal.hide();

    // Perform reject action here (e.g., send rejection data to server)
    console.log(`Rejected training ID: ${trainingId} with reason: ${rejectReason}`);

    // Show success notification
    Swal.fire({
        title: 'Rejected!',
        text: 'The training request has been successfully rejected.',
        icon: 'success',
        confirmButtonColor: '#d33'
    });
}

// Function to toggle the profile dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}