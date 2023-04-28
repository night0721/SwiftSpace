self.addEventListener("push", e => {
  e.waitUntil(
    self.registration.showNotification(e.data.json().username, {
      body: e.data.json().content,
      icon: "https://raw.githubusercontent.com/night0721/SwiftSpace/master/assets/icon-192x192.png",
      vibrate: [300, 100, 400],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
    })
  );
});
