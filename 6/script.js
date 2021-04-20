const linkCss = document.querySelector('link');
console.log(linkCss)

function noCss(){
	linkCss.href = '';
}

function yesCss() {
	linkCss.href = 'style.css'
}