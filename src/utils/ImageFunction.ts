import {default as colors} from 'src/Theme';
import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid, Alert, Platform, Linking} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const requirePermission = () => {
  Alert.alert(
    'Yêu cầu truy cập',
    'Vui lòng cấp quyền để PingGo có thể lưu ảnh sản phẩm vào thiết bị',
    [
      {
        text: 'Bỏ qua',
      },
      {
        text: 'Đồng ý',
        onPress: Linking.openSettings,
        style: 'destructive',
      },
    ],
  );
};

const getImageName = (url: string) => {
  return url.substring(url.lastIndexOf('/'), url.length);
};

export const downloadToBase64 = async (images: string[]) => {
  try {
    if (Platform.OS === 'android') {
      const checkVersion = Platform.Version > 22;
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      //cannot progress without permission || sdk < 23 bypass
      if (granted !== PermissionsAndroid.RESULTS.GRANTED && checkVersion) {
        requirePermission();
        return;
      }
    }
    const dir =
      Platform.OS === 'ios'
        ? RNFetchBlob.fs.dirs.DocumentDir
        : RNFetchBlob.fs.dirs.DownloadDir + '/PingGo';
    const isExist = await RNFetchBlob.fs.exists(dir);
    const isDir = await RNFetchBlob.fs.isDir(dir);
    if (!isExist || !isDir) {
      await RNFetchBlob.fs.mkdir(dir);
    }
    const Pictures = images.map(async (imageUrl) => {
      if (!imageUrl) return null;
      const path = dir + getImageName(imageUrl);
      return RNFetchBlob.config({
        fileCache: true,
        path,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: false,
          title: getImageName(imageUrl),
          description: 'Đang tải xuống ảnh từ PingGo',
          path,
        },
      })
        .fetch('GET', imageUrl)
        .then(async (resp) => {
          if (Platform.OS === 'ios') {
            await CameraRoll.saveToCameraRoll(resp.path());
          }
          const base64s = RNFetchBlob.fs
            .readFile(resp.data, 'base64')
            .then((data) => 'data:image/jpeg;base64,' + data)
            .catch((err) => {
              console.log('save', err);
            });
          return base64s;
        })
        .catch((error) => {
          throw new Error('denied');
        });
    });

    return Promise.all(Pictures).catch((err) => {
      if (err?.message?.includes('denied')) {
        requirePermission();
      }
      return null;
    });
  } catch (err) {}
};
