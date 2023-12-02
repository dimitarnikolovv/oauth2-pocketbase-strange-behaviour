/// <reference path="../pb_data/types.d.ts" />

cronAdd('mark_finished_request', '0 */1 * * *', () => {
  const today = new Date();
  const targetDate = new Date(today.setHours(today.getHours() - 1));

  const posts = $app.dao().findRecordsByExpr(
    'posts',
    $dbx.exp('departDateTime < {:date} AND finished = FALSE', {
      date: targetDate.toISOString().replace('T', ' '),
    })
  );

  $app.dao().expandRecords(posts, ['author'], null);

  for (let post of posts) {
    console.log(`MARKING FINISHED REQUEST ON POST WITH ID: ${post.getString('id')}`);

    const checkIfRequestExists = $app.dao().findRecordsByExpr(
      'mark_finished_requests',
      $dbx.exp('post = {:postId}', {
        postId: post.getString('id'),
      })
    );

    if (checkIfRequestExists.length > 0) continue;

    const applications = $app.dao().findRecordsByExpr(
      'applications',
      $dbx.exp('post = {:postId} AND verified = true', {
        postId: post.getString('id'),
      })
    );

    if (applications.length == 0) continue;

    const collection = $app.dao().findCollectionByNameOrId('mark_finished_requests');

    const finished_request = new Record(collection, {
      post: post.getString('id'),
      neededVotes: applications.length + 1,
    });

    $app.dao().saveRecord(finished_request);

    const author = post.expandedOne('author');

    const chat = $app.dao().findFirstRecordByFilter('chats', 'post = {:post}', {
      post: post.getString('id'),
    });

    //sending and creating notifications for the passengers
    for (let application of applications) {
      const notifications = $app.dao().findCollectionByNameOrId('notifications');

      const notification = new Record(notifications, {
        user: application.getString('applicant'),
        title: 'Пътуването Ви приключи ли?',
        content: `Отбележете пътуването си като приключило, за да можете да оцените ${author.getString(
          'firstName'
        )} като шофьор и другите пътници.`,
        redirects: `/my/chats/${chat.getString('id')}`,
      });

      $app.dao().saveRecord(notification);

      //send push notifications
      try {
        const res = $http.send({
          url: 'https://sharetravel.bg/api/sendNotification',
          method: 'POST',
          headers: {
            Authorization: '2d959636-0136-4839-8ea8-88f65f7ad7e8',
          },
          body: JSON.stringify({
            targetUser: application.getString('applicant'),
            notification: {
              title: 'Пътуването Ви приключи ли?',
              body: `Отбележете пътуването си като приключило, за да можете да оцените ${author.getString(
                'firstName'
              )} като шофьор и другите пътници.`,
              icon: '/icons/icon-512x512.png',
              badge: '/icons/icon-mono-729x729.png',
              tag: `${application.getString('applicant')}_finished_post`,
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

    //sending and creating notifications for the author

    const notifications = $app.dao().findCollectionByNameOrId('notifications');

    const notification = new Record(notifications, {
      user: author.getString('id'),
      title: 'Пътуването Ви приключи ли?',
      content: `Отбележете пътуването си като приключило, за да можете да оцените пътниците.`,
      redirects: `/my/chats/${chat.getString('id')}`,
    });

    $app.dao().saveRecord(notification);

    try {
      const res = $http.send({
        url: 'https://sharetravel.bg/api/sendNotification',
        method: 'POST',
        headers: {
          Authorization: '2d959636-0136-4839-8ea8-88f65f7ad7e8',
        },
        body: JSON.stringify({
          targetUser: author.getString('id'),
          notification: {
            title: 'Пътуването Ви приключи ли?',
            body: `Отбележете пътуването си като приключило, за да можете да оцените пътниците.`,
            icon: '/icons/icon-512x512.png',
            badge: '/icons/icon-mono-729x729.png',
            tag: `${author.getString('id')}_finished_post`,
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
});
