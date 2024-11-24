function setActive(element, contentName) {
    // Remove the 'active' class from all menu items
    const menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach((item) => {
        item.classList.remove('active');
    });

    // Add the 'active' class to the clicked menu item
    element.classList.add('active');

    // Update the content in the main area based on the clicked menu item
    const content = document.getElementById('content');
    switch (contentName) {
        case 'Dashboard':
            content.innerHTML = '<h2>Dashboard</h2><p>Welcome to the dashboard. Here is the overview.</p>';
            break;
        case 'Faculty':
            content.innerHTML = '<h2>Faculty</h2><p>Manage faculty details here.</p>';
            break;
        case 'Students':
            content.innerHTML = '<h2>Students</h2><p>Manage student records and details here.</p>';
            break;
        case 'Events':
            content.innerHTML = '<h2>Events</h2><p>View and manage university events here.</p>';
            break;
        case 'Alerts':
            content.innerHTML = '<h2>Alerts</h2><p>Manage and send alerts to students and faculty.</p>';
            break;
        case 'Logout':
            content.innerHTML = '<h2>Logout</h2><p>You have been logged out successfully.</p>';
            break;
        default:
            content.innerHTML = '<p>Content not found.</p>';
            break;
    }
}
