import { Alert } from "react-native";

export const GUID = function GetGUID():number{
    const today = new Date();
    return today.getTime();
}

export const DisplayAlert = function ShowAlert(title:string, message:string){
    Alert.alert(
        title,
        message,
        [
          {
            text: 'Cancel',
            // onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        //   onDismiss: () =>
        //     Alert.alert(
        //       'This alert was dismissed by tapping outside of the alert dialog.',
        //     ),
        },
      );
}