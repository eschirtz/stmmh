import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const checkin = functions.https.onRequest(async (request, response) => {
  const shitId = request.path.split("/")[2];

  const shitDocumentRef = admin.firestore().collection("shit").doc(shitId);
  const shitDocument = await shitDocumentRef.get();

  const p1 = shitDocumentRef.collection("checkins").add({
    timeCreated: admin.firestore.FieldValue.serverTimestamp(),
  });

  const p2 = shitDocumentRef.update({
    checkins: admin.firestore.FieldValue.increment(1),
  });

  const p3 = admin.firestore().collection("checkins").add({
    ...shitDocument.data(),
    timeCreated: admin.firestore.FieldValue.serverTimestamp(),
  });

  await Promise.all([p1, p2, p3]);

  response.status(200).send("Success!");
});
