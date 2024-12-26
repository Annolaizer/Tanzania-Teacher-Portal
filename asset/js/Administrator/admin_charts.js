
setTimeout(() => {
    document.getElementById('totalTeachers').textContent = '1,234';
    document.getElementById('publicTeachers').textContent = '856';
    document.getElementById('privateTeachers').textContent = '378';
    document.getElementById('activeUsers').textContent = '952';
}, 1000);

// User Activity Mixed Chart (Bar + Line)
const activityCtx = document.getElementById('userActivityChart').getContext('2d');
new Chart(activityCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'New Registrations',
                type: 'bar',
                data: [65, 59, 80, 81, 56, 85],
                backgroundColor: 'rgba(0, 156, 149, 0.2)',
                borderColor: 'rgba(0, 156, 149, 1)',
                borderWidth: 2,
                borderRadius: 5,
                order: 2
            },
            {
                label: 'Active Users',
                type: 'line',
                data: [70, 62, 85, 83, 59, 87],
                borderColor: '#cc3344',
                backgroundColor: 'rgba(204, 51, 68, 0.1)',
                tension: 0.4,
                fill: true,
                order: 1,
                pointBackgroundColor: '#cc3344',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            title: {
                display: true,
                text: 'User Activity Overview',
                font: { size: 16, weight: 'bold' },
                padding: {
                    bottom: 15
                }
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    font: {
                        size: 11
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#000',
                bodyColor: '#000',
                bodySpacing: 5,
                padding: 10,
                borderColor: '#ddd',
                borderWidth: 1,
                displayColors: true,
                usePointStyle: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0,0,0,0.05)'
                },
                ticks: {
                    font: {
                        size: 11
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 11
                    }
                }
            }
        }
    }
});

// User Roles Doughnut Chart
const rolesCtx = document.getElementById('userRolesChart').getContext('2d');
new Chart(rolesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Administrators', 'Teachers', 'Staff', 'Others'],
        datasets: [{
            data: [15, 45, 30, 10],
            backgroundColor: [
                '#009c95',
                '#00b5ad',
                '#00c4bc',
                '#00d3cb'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'User Distribution by Role',
                font: { size: 16, weight: 'bold' },
                padding: {
                    bottom: 15
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    usePointStyle: true,
                    font: {
                        size: 11
                    }
                }
            }
        },
        cutout: '65%',
        layout: {
            padding: {
                top: 15,
                bottom: 15
            }
        }
    }
});