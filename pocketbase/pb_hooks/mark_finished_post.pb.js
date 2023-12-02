/// <reference path="../pb_data/types.d.ts" />

onRecordAfterUpdateRequest((e) => {
  const request = e.record;

  if (request.getInt('neededVotes') > request.getInt('votes')) return;

  $app.dao().expandRecord(request, ['post'], null);

  const post = request.expandedOne('post');

  post.set('finished', true);
  $app.dao().saveRecord(post);
}, 'mark_finished_requests');
