
export function initializeTabs(tabsContainerSelector, tabSelector, tabContentSelector) {
    const tabsContainer = document.querySelector(tabsContainerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const tabsContent = document.querySelectorAll(tabContentSelector);
  
    tabsContainer.addEventListener('click', function (e) {
      const clicked = e.target.closest(tabSelector);
  
      if (!clicked) return;
  

      tabs.forEach(t => t.classList.remove('reviews__tab--active'));
      tabsContent.forEach(c => c.classList.remove('reviews__content--active'));
  
      clicked.classList.add('reviews__tab--active');
  
    
      document
        .querySelector(`.reviews__content--${clicked.dataset.tab}`)
        .classList.add('reviews__content--active');
    });
  }