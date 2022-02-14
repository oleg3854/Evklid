let tabsBtn = document.querySelectorAll(".tabs__btn");
let tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId); 

		tabsBtn.forEach(function(item) {
			item.classList.remove('tabs_active')
		});

		tabsItems.forEach(function(item) {
			item.classList.remove('tabs_active')
		});

		currentBtn.classList.add('tabs_active');
		currentTab.classList.add('tabs_active');
	})
});
