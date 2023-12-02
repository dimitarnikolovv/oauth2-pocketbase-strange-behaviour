/// <reference path="../pb_data/types.d.ts" />

cronAdd('mark_expired_posts', '30 1 * * *', () => {
  console.log('MARKING EXPIRED POSTS!');
  const posts = arrayOf(
    new DynamicModel({
      id: '',
    })
  );

  $app
    .dao()
    .db()
    .select('id')
    .from('posts')
    .where(
      $dbx.exp('departDateTime < {:date}', {
        date: new Date().toISOString().replace('T', ' '),
      })
    )
    .all(posts);

  for (let i = 0; i < posts.length; i++) {
    const post = $app.dao().findRecordById('posts', posts[i].id);
    post.set('expired', true);
    $app.dao().saveRecord(post);
  }
});

cronAdd('delete_expired_posts', '35 1 * * *', () => {
  console.log('DELETING EXPIRED POSTS!');
  const posts = arrayOf(
    new DynamicModel({
      id: '',
    })
  );

  const today = new Date();
  const targetDate = new Date(today.setDate(today.getDate() - 30));

  $app
    .dao()
    .db()
    .select('id')
    .from('posts')
    .where(
      $dbx.exp('departDate < {:date} AND expired = TRUE', {
        date: targetDate.toISOString().replace('T', ' '),
      })
    )
    .all(posts);

  for (let i = 0; i < posts.length; i++) {
    const post = $app.dao().findRecordById('posts', posts[i].id);
    console.log(`DELETING POST WITH ID: ${post.id}`);

    $app.dao().deleteRecord(post);
  }
});
