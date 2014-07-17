Template.commentSubmit.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var $body = $(event.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      ticketId: template.data._id
    };

    Meteor.call('comment', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
