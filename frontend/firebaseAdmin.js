import * as firebaseAdmin from "firebase-admin";
require('dotenv').config()



if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.NEXT_JS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.NEXT_JS_CLIENT_EMAIL,
      projectId: process.env.NEXT_JS_PROJECT_ID,
    }),
    databaseURL: process.env.NEXT_JS_DATABASEURL,
  });
}

export { firebaseAdmin };
