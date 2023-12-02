/// <reference path="../pb_data/types.d.ts" />

onModelAfterUpdate((e) => {
  const post = $app.dao().findRecordById('posts', e.model.id);

  if (!post.getBool('finished') || post.getBool('setDriver')) return;

  $app.dao().expandRecord(post, ['author'], null);

  const author = post.expandedOne('author');

  const timesDriver = author.getInt('timesDriver');

  author.set('timesDriver', timesDriver + 1);

  $app.dao().saveRecord(author);

  post.set('setDriver', true);
  $app.dao().saveRecord(post);
}, 'posts');
