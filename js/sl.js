jQuery(document).ready(function($) {
	stylishLinks();
});

//utility for determining touch devices
function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers 
      || window.navigator.msMaxTouchPoints > 0; // works on ie10
}

// check if a link goes to an external domain
function link_is_external(link_element) {
    return (link_element.host !== window.location.host);
}

// dom manipulations for stylish links
function stylishLinks() {
	// get necessary icon classes
	var $class = jQuery('body').attr('class');
	var $classes = $class.split(' ');
	
	// determine external class
	var $icon_external = jQuery.grep($classes, function(value) {
	    return value.indexOf('sl-icon-external-') >= 0;
	}).toString().replace('sl-icon-external-', '');
	// determine anchor class
	var $icon_anchor = jQuery.grep($classes, function(value) {
	    return value.indexOf('sl-icon-anchor-') >= 0;
	}).toString().replace('sl-icon-anchor-', '');
	// determine file class
	var $icon_file = jQuery.grep($classes, function(value) {
	    return value.indexOf('sl-icon-file-') >= 0;
	}).toString().replace('sl-icon-file-', '');

	var $href, $ext = '';
	var $filetypes = ["c","m","7z","ai","cs","db","gz","js","pl","ps","py","rm","ra","3dm","3g2","3gp","8bi","aif","app","asf","asx","avi","bak","bat","bin","bmp","cab","cer","cfg","cgi","cpl","cpp","dbf","dbx","deb","dll","dmg","dmp","doc","csr","css","csv","cur","dat","drv","drw","dtd","dwg","dxf","efx","eps","exe","fla","flv","fnt","fon","gam","gho","gif","gpx","hqx","iff","ini","iso","jar","jpg","m3u","m4a","max","mdb","mid","mim","mov","mp3","mp4","mpa","mpg","msg","msi","nes","ori","otf","jsp","key","kml","lnk","log","pct","pdb","pdf","pif","pkg","png","pps","ppt","prf","psd","qxd","qxp","rar","rels","rom","rpm","rss","rtf","sav","sdf","sit","sql","svg","swf","sys","thm","tif","tmp","ttf","txt","uue","vb","vcd","vcf","vob","wav","wks","wma","wmv","wpd","wps","wsf","xll","xls","xml","yuv","zip","docx","indd","java","part","pptx","sitx","zipx","xlsx","pages","accdb","class","toast","plugin","gadget","tar.gz","torrent","keychain","pspimage"];

	// find and loop through all links and append icons
	var $links = jQuery('a.stylish-link, li.stylish-link > a');
	$links.each(function() { 
		$href = jQuery(this).attr('href');
		if(typeof $href !== 'undefined') $ext = $href.substr((~-$href.lastIndexOf(".") >>> 0) + 2);

		// external links
		if($icon_external && link_is_external(this)) {
			jQuery(this).append('<i class="sl-external-icon el ' + $icon_external + '"></i>');
		}
		// anchor links
		if($icon_anchor && /^#/.test($href) === true) {
			jQuery(this).append('<i class="sl-anchor-icon el ' + $icon_anchor + '"></i>');
		}
		// file downloads
		if($icon_file && jQuery.inArray($ext, $filetypes) !== -1) {
			jQuery(this).append('<i class="sl-file-icon el ' + $icon_file + '"></i>');
		}
	});
	
}




