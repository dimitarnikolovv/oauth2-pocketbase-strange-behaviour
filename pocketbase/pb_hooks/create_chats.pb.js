/// <reference path="../pb_data/types.d.ts" />

//creating an empty chat with the posts author as the only participant after post creation
onRecordAfterCreateRequest((e) => {
  const post = e.record;

  const collection = $app.dao().findCollectionByNameOrId('chats');

  const record = new Record(collection, {
    post: post.getString('id'),
    participants: [post.getString('author')],
  });

  $app.dao().saveRecord(record);
}, 'posts');

//adding verified users to the chat participants list
onRecordAfterUpdateRequest((e) => {
  const application = e.record;

  if (application.getBool('verified')) {
    const chat = $app
      .dao()
      .findFirstRecordByFilter('chats', 'post = {:post}', { post: application.getString('post') });

    const participants = chat.get('participants');

    chat.set('participants', [...participants, application.getString('applicant')]);

    $app.dao().saveRecord(chat);
  }
}, 'applications');
