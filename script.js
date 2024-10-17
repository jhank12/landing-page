const tabs = document.querySelectorAll(".tabsContainer ul li");
const tabsContent = document.querySelectorAll(".tabContent");
const tabsContainer = document.querySelector(".tabsContainer ul");

tabsContainer.addEventListener("click", function (e) {
  const selectedTab = e.target.closest("li");

  tabs.forEach((tab) => {
    tab.classList.remove("tabActive");
  });

  selectedTab.classList.add("tabActive");

  tabsContent.forEach((tabContent) => {
    tabContent.classList.add("hidden");
    if (tabContent.dataset.content === selectedTab.dataset.tab) {
      tabContent.classList.remove("hidden");
    }
  });
});

const bookmarks = document.querySelector(".bookmarksContainer");
const bookmarkAnswers = document.querySelectorAll(".bookmarkAnswer");

bookmarks.addEventListener("click", function(e) {
    const bookmarkHeader = e.target.closest(".bookmarkHeader");
    let bookmarkContent;

    bookmarkAnswers.forEach(answer => {
        if (answer.dataset.bookmarkAnswer === bookmarkHeader.dataset.bookmarkHeader) {
            // answer.classList.remove("hidden")
            bookmarkContent = answer;
        }
    })

    if (!bookmarkHeader.classList.contains("bookmarkDropdownOpen")) {
        bookmarkHeader.classList.add("bookmarkDropdownOpen")

        if (bookmarkHeader.dataset.bookmarkHeader === bookmarkContent.dataset.bookmarkAnswer) {
            bookmarkContent.classList.remove("hidden")
        }
    } else {
        bookmarkHeader.classList.remove("bookmarkDropdownOpen")
        if (bookmarkHeader.dataset.bookmarkHeader === bookmarkContent.dataset.bookmarkAnswer) {
            bookmarkContent.classList.add("hidden")
        }
    }

})


const hamburgerIcon = document.querySelector(".hamburger");

const mobileNav = document.querySelector(".mobileNav");
const mobileNavClose = document.querySelector(".navClose");

hamburgerIcon.addEventListener("click", function() {    
    mobileNav.classList.remove("hidden")
})

mobileNavClose.addEventListener("click", function() {   
    mobileNav.classList.add("hidden")
})