// helloWorld.js
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000); // 2 detik
  });
}

export default helloWorld;
