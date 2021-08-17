window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	    document.getElementById("myNav").style.background = 'white';
	    document.getElementById("myNav").style.boxShadow  = '0 8px 16px 0 rgba(0, 0, 0, .4)';
	    document.getElementById("myNav").style.height = '70px';
	    document.getElementById("navLinks").style.height = '100%';
	    document.getElementById("navLinks").style.lineHeight = '70px';
	    document.getElementById('brand').style.color = 'black';
	    document.querySelector('.burger').style.color = 'black';
	    const navItem = document.getElementsByClassName('nav-item');
	   	for(let i = 0; i < navItem.length; i++) {
	   		navItem[i].style.color = 'black';
	   		navItem[i].style.fontWeight  = '400';
	   	}
  	} else {
	    document.getElementById("myNav").style.background = null;
	    document.getElementById("myNav").style.boxShadow = null;
	    document.getElementById("myNav").style.height = null;
	    document.getElementById("navLinks").style.height = null;
	    document.getElementById("navLinks").style.lineHeight = null;
	    document.getElementById('brand').style.color = null;
	    document.querySelector('.burger').style.color = 'white';
	    const navItem = document.getElementsByClassName('nav-item');
	   	for(let i = 0; i < navItem.length; i++) {
	   		navItem[i].style.color = '#ccc';
	   		navItem[i].style.fontWeight  = '600';
	   	}
  	}
  	var x = window.innerWidth;
  	if(x < 786) {
		document.getElementById("myNav").style.height = null;
	    document.getElementById("navLinks").style.height = null;
	    document.getElementById("navLinks").style.lineHeight = null;
	    const navItem = document.getElementsByClassName('nav-item');
	   	for(let i = 0; i < navItem.length; i++) {
	   		navItem[i].style.color = 'black';
	   		navItem[i].style.fontWeight  = '400';
	   	}
  	} else {
		document.getElementById("myNav").style.height = null;
	    document.getElementById("navLinks").style.height = null;
	    document.getElementById("navLinks").style.lineHeight = null;
	    const navItem = document.getElementsByClassName('nav-item');
	   	for(let i = 0; i < navItem.length; i++) {
	   		// navItem[i].style.color = 'black';
	   		navItem[i].style.fontWeight  = '400';
	   	}
  	}
}


// Sliebar
const openNav = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.fa-bars')
openNav.addEventListener('click', function(){
	navLinks.classList.toggle('showNav');
	if(navLinks.classList.contains('showNav')) {
		openNav.style.right = '305px';
		const navItem = document.getElementsByClassName('nav-item');
		for(let i = 0; i < navItem.length; i++) {
			navItem[i].style.color = 'black';
		}
		bars.classList.replace('fa-bars','fa-remove');

	} else {
		openNav.style.right = '20px';
		const navItem = document.getElementsByClassName('nav-item');
		for(let i = 0; i < navItem.length; i++) {
			navItem[i].style.color = '#ccc';
		}
		bars.classList.replace('fa-remove','fa-bars');
	}

});



// sub menu
const openSubMenu = document.querySelectorAll('.dropdown');
const subMenu = document.querySelectorAll('.sub-menu');


// for(let i = 0; i < openSubMenu.length; i++) {
// 	openSubMenu[i].addEventListener('click', function(){
// 		for(let i = 0; i < subMenu.length; i++) {
// 			subMenu[i].classList.toggle('showMenu');
// 		}
// 		console.log('d')
// 	});
// }

// hasCollapsible.forEach(function (collapsible) {
//   collapsible.addEventListener("click", function () {
//     collapsible.classList.toggle("active");

//     hasCollapsible.forEach(function (otherCollapsible) {
//       if (otherCollapsible !== collapsible) {
//         otherCollapsible.classList.remove("active");
//       }
//     });
//   });
// });





// Slider
var currentItem = 0;
showSlide();

function showSlide(n) {
	var slides = document.getElementsByClassName('mySlides');
	for(let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	currentItem++;
	if(currentItem > slides.length) {
		currentItem = 1;
	}
	slides[currentItem-1].style.display = 'block';
	setTimeout(showSlide, 2000);
}