(function(){
	var preElem = document.querySelectorAll("pre > code");
	for(var i=0;i<preElem.length;i++){
	  let preTitle = preElem[i].parentNode.getAttribute("data-title");
	  let preTxt = preElem[i].innerHTML;
	  preElem[i].innerHTML = preTxt.replace(/ </g, "\t&lt;").replace(/</g, "&lt;").replace(/>\n/g, "&gt;\t\t\n").replace(/>/g, "&gt;");
	  let preTxtRow = preTxt.match(/\n/g).length;
	  if(typeof preTitle === "string" && preTitle !== "") preElem[i].parentNode.appendChild(preLabel(preTitle));
	  preElem[i].parentNode.appendChild(rowCount(preTxtRow));
	  preElem[i].parentNode.classList.add("source-code");
	}
	function preLabel(ttl){
	  let ttlSpan = document.createElement("span");
	  ttlSpan.innerHTML = ttl;
	  ttlSpan.classList.add("ttl-label");
	  return ttlSpan;
	}
	function rowCount(num){
	  let rowSpan = document.createElement("span");
	  let rowNumber = "\n";
	  for(var i=1;i<num;i++){
	    rowNumber += i+":<br>";
	  }
	  rowSpan.innerHTML = rowNumber;
	  rowSpan.classList.add("row-list");
	  return rowSpan;
	};
})();
