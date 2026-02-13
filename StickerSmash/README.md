# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



Library for displaying images in the app:
```
npx expo install expo-image
```

Library for getting images from mobile libarry
```
expo-image-picker
```


### EAS = Expo Application Services

Extension of ExpoGo on more advanced development process; used to build, deploy, update and publish real apps.

Cannot be used on ios without Apple Developer account (99$/year)

Expo Orbit = to manage and launch builds

Development build = debug version of the project
- optimized for quick iterations
- expo-dev-client library

EAS CLI 
``` eas init ``` -> creates an EAS project and links it in app.json

```
    "extra": {
      "router": {},
      "eas": {
        "projectId": "d279d347-8244-49a6-848a-240b553a568e"
      }
    }
```

``` eas build:configure``` -> select platform; creates eas.json file

``` eas build -p android --profile development``` -> creates a build in https://expo.dev that can be installed with Expo Orbit on emulator or local device connected by usb OR using QR code