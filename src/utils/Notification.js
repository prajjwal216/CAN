// import PushNotification from "react-native-push-notification";
// import messaging from "@react-native-firebase/messaging";
// import { Alert, Linking, Platform } from "react-native";

// // import { setFcmDeviceToken } from '../actions/user/index';



// // Handel pushnotifications 




// export default (PushNotificationInit = () => {
//     PushNotification.configure({
//         // (optional) Called when Token is generated (iOS and Android)
//         onRegister: function (token) {
//             console.log("TOKEN:", token);
//         },


//         // IOS ONLY (optional): default: all - Permissions to register.
//         permissions: {
//             alert: true,
//             badge: true,
//             sound: true,
//         },
//         popInitialNotification: true,
//         requestPermissions: true,
//     });
// });


// export const checkPushPermission = () => {
//     return new Promise((resolve, reject) => {
//         messaging()
//             .requestPermission()
//             .then((authStatus) => {
//                 const enabled =
//                     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//                     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//                 if (enabled) {

//                     InitiateNotification();
//                     console.log("TRUE ENABLED", enabled);
//                 } else {
//                     console.log("FALSE");
//                     resolve(false);
//                 }
//             });
//     });
// };

// export const InitiateNotification = async () => {
//     console.log("InitiateNotification");
//     const authStatus = await messaging().requestPermission();
//     console.log("authStatus", authStatus);
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL

//     console.log("InitiateNotification---", enabled);
//     if (enabled) {
//         console.log("InitiateNotification-===--", enabled);
//         messaging()
//             .getToken()
//             .then((token) => {

//                 console.log("***********NOTI_AUTH_STATUS************", token);
//                 // storeItem("DEVICE_TOKEN",token)
//                 // Alert.alert("token",token)

//             });

//         messaging().onTokenRefresh((token) => {
//             console.log("messaging.onTokenRefresh", token);
//         });

//         messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//             console.log("***********MESSAGE_IN_BACKGROUND************", remoteMessage);
//         });
//     }
//     else {
//         console.log("ENABLED");
//     }

// };
