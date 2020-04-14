var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deletebtns = document.getElementsByClassName("delete");

//function to find length value
function inputlen() {
	return input.value.length;
}

//removing of list elements in html file
for (var i = 0; i < deletebtns.length; i++) {
	deletebtns[i].addEventListener("click", removeParent);
}

//removeparent function to remove element using parentnode.remove
function removeParent(event) {
	event.target.removeEventListener("click", removeParent);
	event.target.parentNode.remove();
}

function createListElements() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));


	var deletebtn = document.createElement("button");
	// deletebtn.appendChild(document.createTextNode(button.innerText = "delete"));
	deletebtn.innerHTML="Delete"
	// deletebtn.onclick = removeParent;
	deletebtn.addEventListener("click", removeParent);

	ul.appendChild(li);
	li.appendChild(deletebtn);
	input.value = "";
}

button.addEventListener("click", function () {
	if (inputlen() > 0) {
		createListElements();
	}

});




input.addEventListener("keypress", function (event) {

	if (inputlen() > 0 && event.keyCode == 13) {
		createListElements();
	}
});
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function (event) {
		{
			this.classList.toggle("done");
		}
	});
}



// 
// 	if (input.len > 0 && keycode == 13) {
// 		var li = document.createElement("li");
// 		var deltebtn = document.createElement("button");
// 		deltebtn.appendChild(document.createTextNode(button));
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		ul.appendChild(deltebtn);
// 		input.value = "";
// 	}

// });