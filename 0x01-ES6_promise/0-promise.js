const play = true;
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (play) {
      resolve(() => console.log('sucess'));
    } else {
      reject(new Error('The promise is rejected'));
    }
  });
}
