import PushNotification from 'react-native-push-notification';
import {BaseColor} from '@config';

function showNotification(title, msg) {
  PushNotification.localNotification({
    /* Android Only Properties */
    // id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
    // ticker: 'My Notification Ticker', // (optional)
    autoCancel: true, // (optional) default: true
    largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
    smallIcon: 'notification_icon', // (optional) default: "ic_notification" with fallback for "ic_launcher"
    bigText: msg, // (optional) default: "message" prop
    // subText: '', // (optional) default: none
    color: BaseColor.primaryColor, // (optional) default: system default
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    // tag: 'some_tag', // (optional) add tag to message
    // group: 'group', // (optional) add group to message
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    priority: 'high', // (optional) set notification priority, default: high
    visibility: 'private', // (optional) set notification visibility, default: private
    importance: 'high', // (optional) set notification importance, default: high
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)

    /* iOS only properties */
    alertAction: 'view', // (optional) default: view
    category: '', // (optional) default: empty string
    userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)

    /* iOS and Android properties */
    title: title, // (optional)
    message: msg, // (required)
    // playSound: true, // (optional) default: true
    // soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    // number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    // repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    // actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more
  });
}
export const NotificationServices = {
  showNotification,
};
