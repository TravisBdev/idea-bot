fetch("https://apis.scrimba.com/bored/api/activity")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".idea-description").textContent = data.activity;
  });
