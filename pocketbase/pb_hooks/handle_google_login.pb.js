/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeAuthWithOAuth2Request((e) => {
  const generateUsername = (email) => {
    let id = (Math.random() * 10 + Math.random() * 10).toString(16);
    id = id.split(".").join("");
    const user = email
      .split("@")[0]
      .split(/[^a-zA-Z0-9]/g)
      .join("");

    return `${user}${id}`;
  };

  if (e.record !== null) return; //TODO change to (!e.isNewRecord) before preproduction

  e.record = new Record($app.dao().findCollectionByNameOrId("users"));
  e.record.setEmail(e.oAuth2User.email);
  e.record.set("firstName", e.oAuth2User.rawUser.given_name);
  e.record.set("lastName", e.oAuth2User.rawUser.family_name);
  e.record.set("gender", "other");
  e.record.set("age", 0);
  e.record.setVerified(true);
  e.record.setUsername(generateUsername(e.oAuth2User.email));

  $app.dao().saveRecord(e.record);
}, "users");
