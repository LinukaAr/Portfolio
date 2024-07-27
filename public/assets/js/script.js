//Chatbot

document.addEventListener('DOMContentLoaded', function () {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotIframe = document.getElementById('chatbot-iframe');

    chatbotContainer.addEventListener('click', function () {
        if (chatbotIframe.style.display === 'none') {
        chatbotIframe.style.display = 'block';
        } else {
        chatbotIframe.style.display = 'none';
        }
    });
    });

    window.onclick = function(event) {
        var chatbotContainer = document.getElementById('chatbot-container');
        if (event.target !== chatbotContainer) {
            var chatbotIframe = document.getElementById('chatbot-iframe');
            chatbotIframe.style.display = 'none';
        }
    }

    // Notifications
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.getElementById('notifications-container').appendChild(notification);
    
        // Trigger reflow to enable transition
        notification.getBoundingClientRect();
    
        // Slide out to the right
        notification.style.transform = 'translateX(100%)';
    
        // Wait a moment for the transition to start
        setTimeout(() => {
            // Slide back to 0
            notification.style.transform = 'translateX(0)';
        }, 100);
    
        // Add click event listener to toggle notification visibility
        notification.addEventListener('click', () => {
            if (notification.style.transform === 'translateX(100%)') {
                // Slide in from the right
                notification.style.transform = 'translateX(0)';
            } else {
                // Slide out to the right
                notification.style.transform = 'translateX(100%)';
            }
        });
    
        // Slide back to the right after timeout
        setTimeout(() => {
            // Slide out to the right and remove after transition ends
            notification.style.transform = 'translateX(100%)';
            notification.addEventListener('transitionend', () => {
                notification.remove();
            });
        }, 6000); // Adjust this value to match your transition duration
    }
    
    // Example usage
    showNotification('🔴 New Project Added: Realtime Chat Application', 'success');
    //showNotification('This is an error message', 'error');
    