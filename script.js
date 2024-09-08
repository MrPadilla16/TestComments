$(document).ready(function () {
    $('#comment-form').on('submit', function (e) {
        e.preventDefault();

        // Get the input values
        var comment = $('#comment').val();
        var username = $('#username').val();

        // Create a new comment element
        var newComment = '<li class="comment-item"><span class="username">' + username + ':</span><p class="comment-text">' + comment + '</p></li>';

        // Append the comment to the list
        $('#comment-list').append(newComment);

        // Clear the form inputs
        $('#comment').val('');
        $('#username').val('');
    });
});