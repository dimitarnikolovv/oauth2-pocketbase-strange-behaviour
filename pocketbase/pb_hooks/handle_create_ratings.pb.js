/// <reference path="../pb_data/types.d.ts" />

//removing rated user from reter's allowedToRate relation after successfull rating
onRecordAfterCreateRequest((e) => {
  const rating = e.record;

  $app.dao().expandRecord(rating, ['author'], null);

  const author = rating.expandedOne('author');

  const allowedToRate = author.get('allowedToRate');

  author.set(
    'allowedToRate',
    allowedToRate.filter((id) => id != rating.getString('user'))
  );
  $app.dao().saveRecord(author);
}, 'ratings');
