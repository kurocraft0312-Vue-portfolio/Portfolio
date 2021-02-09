import * as functions from "firebase-functions";
import nodemailer from "nodemailer";

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// 管理者用のメールテンプレ
const adminContents = data => {
  // 後で足す
  return `以下の内容でホームページよりお問い合わせを受けました。

  お名前：
  ${data.name}

  メールアドレス：
  ${data.email}

  内容：
  ${data.contents}
  `;
}

exports.sendMail = functions.https.onCall(async (data,context) => {
  // メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページからのお問い合わせ", // 表題
    text: adminContents(data)
  };

  try {
    await mailTransport.sendMail(adminEmail);
  } catch(e) {
    console.error(`送信に失敗しました。${e}`);
    throw new functions.https.HttpsError('internal','');
  }
});


// TODO:TSのデバッグ方法をチェックする
console.log(mailTransport);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
