/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateRequest((e) => {
  const car = e.record;
  $app.dao().expandRecord(car, ['owner'], null);
  const owner = car.expandedOne('owner');

  if (owner.getBool('haveCars')) {
    return;
  }

  owner.set('haveCars', true);
  $app.dao().saveRecord(owner);
}, 'cars');

onRecordAfterDeleteRequest((e) => {
  const car = e.record;

  $app.dao().expandRecord(car, ['owner'], null);

  const userCars = $app
    .dao()
    .findRecordsByExpr('cars', $dbx.exp('owner = {:carOwner}', { carOwner: car.get('owner') }));

  if (userCars.length < 1) {
    const user = car.expandedOne('owner');
    user.set('haveCars', false);
    $app.dao().saveRecord(user);
  }
}, 'cars');
