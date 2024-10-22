const element = document.getElementById("world-id-container");

new WorldID.init({
  action_id: "vote_1",  // Developer Portalで取得したAction ID
  signal: "user-login",
  app_id: "app_dca2c712a9188efd2d2c43d6803f984f",  // Developer Portalで取得したApp ID
  container: element,  // QRコードを表示する要素
  on_success: (response) => {
    console.log("Verification successful", response);
  },
  on_error: (error) => {
    console.error("Verification failed", error);
  }
});
