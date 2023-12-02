/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateRequest((e) => {
  const message = e.record;

  $app.dao().expandRecord(message, ['author', 'chat'], null);

  const author = message.expandedOne('author');
  const chat = message.expandedOne('chat');

  let participants = chat.get('participants');

  const targetIndex = participants.indexOf(message.getString('author'));
  if (targetIndex !== -1) participants.splice(targetIndex, 1);

  //sending in app notifications to each participant
  for (let participant of participants) {
    const notifications = $app.dao().findCollectionByNameOrId('notifications');

    const notification = new Record(notifications, {
      user: participant,
      title: 'Ново съобщение',
      content: `${author.getString('firstName')} ${author.getString(
        'lastName'
      )}: ${message.getString('content')}`,
      redirects: `/my/chats/${chat.getString('id')}`,
    });

    $app.dao().saveRecord(notification);

    //sending push notification to each chat participant
    try {
      const res = $http.send({
        url: 'https://sharetravel.bg/api/sendNotification',
        method: 'POST',
        headers: {
          Authorization: '2d959636-0136-4839-8ea8-88f65f7ad7e8',
        },
        body: JSON.stringify({
          targetUser: participant,
          notification: {
            title: 'Ново съобщение',
            body: `${author.getString('firstName')} ${author.getString(
              'lastName'
            )}: ${message.getString('content')}`,
            icon: '/icons/icon-512x512.png',
            badge: '/icons/icon-mono-729x729.png',
            tag: `${participant}_${chat.getString('id')}_new_message`,
            renotify: true,
            data: {
              redirects: `/my/chats/${chat.getString('id')}`,
            },
          },
        }),
      });
      console.log(res.statusCode);
    } catch (err) {
      console.log(err);
    }
  }
}, 'messages');
