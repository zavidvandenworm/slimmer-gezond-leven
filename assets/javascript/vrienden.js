function removeItem(obj, key) {
	if (!obj.hasOwnProperty(key))
		return
	if (isNaN(parseInt(key)) || !(obj instanceof Array))
		delete obj[key]
	else
		obj.splice(key, 1)
};

let friend_list_html = document.getElementById("friend_list");
let pending_friends_html = document.getElementById("pending_list");
let my_friends_html = document.getElementById("my_friends_list");

let friend_template = document.querySelector("#friend_entry_template");

let friends = {
	"zavid": {
		"name": "Zavid",
		"username": "zavid123",
		"score": 103,
		"joined": "25-1-2023",
		"friends": "17",
		"profile_picture": "https://picsum.photos/64?r=4"
	},
	"gijs": {
		"name": "Gijs",
		"username": "gijs123",
		"score": 252,
		"joined": "22-1-2023",
		"friends": "21",
		"profile_picture": "https://picsum.photos/64?r=2"
	},
	"delysa": {
		"name": "Delysa",
		"username": "delysa123",
		"score": 241,
		"joined": "24-1-2023",
		"friends": "23",
		"profile_picture": "https://picsum.photos/64?r=3"
	}
};

let pending_friends = {};

let my_friends = {};

function updateGUI() {
	console.clear();
	console.log(friends);
	console.log(pending_friends);
	console.log(my_friends);
	friend_list_html.innerHTML = "";
	pending_friends_html.innerHTML = "";
	my_friends_html.innerHTML = "";

	for (i in friends) {
		let clone = friend_template.content.firstElementChild.cloneNode(true);
		let xx = clone.querySelectorAll(".friend_entry_fill");
		xx[0].src = friends[i]["profile_picture"];
		xx[1].innerHTML = friends[i]["name"];
		xx[2].innerHTML = friends[i]["score"];
		xx[3].innerHTML = friends[i]["username"];
		xx[4].innerHTML = friends[i]["joined"];
		var n = i;
		xx[5].innerHTML = "+";
		xx[5].onclick = function () { addFriend(n);console.log(n); }
		friend_list_html.appendChild(clone);
		delete xx;
	}
	for (i in pending_friends) {
		let clone = friend_template.content.firstElementChild.cloneNode(true);
		let xx = clone.querySelectorAll(".friend_entry_fill");
		xx[0].src = pending_friends[i]["profile_picture"];
		xx[1].innerHTML = pending_friends[i]["name"];
		xx[2].innerHTML = pending_friends[i]["score"];
		xx[3].innerHTML = pending_friends[i]["username"];
		xx[4].innerHTML = pending_friends[i]["joined"];
		var n = i;
		xx[5].innerHTML = "X";
		xx[5].onclick = function () { addFriend(n);console.log(n); }
		pending_friends_html.appendChild(clone);
		delete xx;
	}
	for (i in my_friends) {
		let clone = friend_template.content.firstElementChild.cloneNode(true);
		let xx = clone.querySelectorAll(".friend_entry_fill");
		xx[0].src = my_friends[i]["profile_picture"];
		xx[1].innerHTML = my_friends[i]["name"];
		xx[2].innerHTML = my_friends[i]["score"];
		xx[3].innerHTML = my_friends[i]["username"];
		xx[4].innerHTML = my_friends[i]["joined"];
		var n = i;
		xx[5].innerHTML = "X";
		xx[5].onclick = function () { addFriend(n);console.log(n); }
		my_friends_html.appendChild(clone);
		delete xx;
	}
}

function addFriend(friend_name) {
	console.log("adding "+friend_name);
	if (!(friend_name in friends)) {
		console.log("friend request name not found!");
		return;
	}
	pending_friends[friend_name] = friends[friend_name];
	delete friends[friend_name];
	updateGUI();
}

function acceptFriendsPlacebo() {
	for (i in pending_friends) {
		console.log(i);
		my_friends[i] = pending_friends[i];
		console.log("friend accepted: " + pending_friends[i]["name"]);
		delete pending_friends[i];
	}
	updateGUI();
}

setInterval(acceptFriendsPlacebo, 4500);

updateGUI();