$(document).ready(function () {
    // Function to load comments from localStorage
    function loadComments() {
        var comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Iterate through the comments and append them to the list
        comments.forEach(function (commentObj) {
            var newComment = '<li class="comment-item"><span class="username">' + commentObj.username + ':</span><p class="comment-text">' + commentObj.comment + '</p></li>';
            $('#comment-list').append(newComment);
        });
    }

    // Function to save comments to localStorage
    function saveComment(username, comment) {
        var comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Add the new comment to the array
        comments.push({ username: username, comment: comment });

        // Save the updated comments array back to localStorage
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Load existing comments when the page loads
    loadComments();

    // Handle form submission
    $('#comment-form').on('submit', function (e) {
        e.preventDefault();

        // Get the input values
        var comment = $('#comment').val();
        var username = $('#username').val();

        // Create a new comment element and append it to the list
        var newComment = '<li class="comment-item"><span class="username">' + username + ':</span><p class="comment-text">' + comment + '</p></li>';
        $('#comment-list').append(newComment);

        // Save the comment to localStorage
        saveComment(username, comment);

        // Clear the form inputs
        $('#comment').val('');
        $('#username').val('');
    });
});
