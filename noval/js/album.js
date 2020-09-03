function img_scale(e){
	if(e.getAttribute('class') == 'scale'){
		e.setAttribute('class','');
		return;		
	}
	let liElem =document.getElementsByTagName('li');
	for(let index=0;index < liElem.length;index++){
		liElem[index].setAttribute('class','');
	}
	e.setAttribute('class','scale');
}
