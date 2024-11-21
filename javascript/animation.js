// animation.js

window.addEventListener('load', () => {
    // Get the profile container
    const profileContainer = document.getElementById('profile-container');
    
    // Adding animation class
    profileContainer.classList.add('fade-in-up');
    
    // Hover effect on profile image (scale on hover)
    const profileImg = document.getElementById('profile-img');
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.transform = 'scale(1.1)';
        profileImg.style.borderColor = '#3498db';  // Change border color on hover
    });
    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'scale(1)';
        profileImg.style.borderColor = 'transparent';  // Reset border color on mouse leave
    });
});
