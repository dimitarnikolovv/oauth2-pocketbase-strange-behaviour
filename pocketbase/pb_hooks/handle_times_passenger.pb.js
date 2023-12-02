/// <reference path="../pb_data/types.d.ts" />

onModelAfterUpdate((e) => {
  const post = $app.dao().findRecordById('posts', e.model.id);

  if (!post.getBool('finished') || post.getBool('setPassengers')) return;

  $app.dao().expandRecord(post, ['applications(post)'], null);

  const applications = post.expandedAll('applications(post)');

  applications.filter((app) => app.verified);

  $app.dao().expandRecords(applications, ['applicant'], null);

  for (let application of applications) {
    const applicant = application.expandedOne('applicant');
    const timesPassenger = applicant.getInt('timesPassenger');
    applicant.set('timesPassenger', timesPassenger + 1);
    $app.dao().saveRecord(applicant);
  }

  post.set('setPassengers', true);
  $app.dao().saveRecord(post);
}, 'posts');
