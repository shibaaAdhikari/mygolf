
  (function(d) {
    var config = {
      kitId: 'vqy8iaf',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


const menuToggle = document.querySelector('.header__menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const headerLogo = document.querySelector('.header__logo');

// Accordion
const accordionItem = document.querySelector('.menu__list-item--accordion');
const plusIcon = accordionItem.querySelector('.accordian-plus');
const minusIcon = accordionItem.querySelector('.accordian-minus');

// Toggle menu overlay
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('header__menu-toggle--active');
    menuOverlay.classList.toggle('menu-overlay--active');
    headerLogo.classList.toggle('header__logo--brown');
});

// Toggle accordion
function toggleAccordion() {
    accordionItem.classList.toggle('active');
    headerLogo.classList.add('header__logo--brown'); // ensure brown logo shows when accordion opens
}
plusIcon.addEventListener('click', toggleAccordion);
minusIcon.addEventListener('click', toggleAccordion);
