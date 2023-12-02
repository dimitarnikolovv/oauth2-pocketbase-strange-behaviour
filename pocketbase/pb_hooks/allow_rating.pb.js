/// <reference path="../pb_data/types.d.ts" />

onModelAfterUpdate((e) => {
  const post = $app.dao().findRecordById('posts', e.model.id);

  if (!post.getBool('finished')) return;

  $app.dao().expandRecord(post, ['chats(post)'], null);

  const chat = post.expandedOne('chats(post)');

  const participants = chat.get('participants');

  for (const participant of participants) {
    const currParticipant = $app.dao().findRecordById('users', participant);
    const allowedToRate = participants.filter((id) => id != participant);

    currParticipant.set('allowedToRate', [
      ...currParticipant.get('allowedToRate'),
      ...allowedToRate,
    ]);

    $app.dao().saveRecord(currParticipant);
  }
}, 'posts');
