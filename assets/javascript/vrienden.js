Object.prototype.removeItem = function (key) {
   if (!this.hasOwnProperty(key))
      return
   if (isNaN(parseInt(key)) || !(this instanceof Array))
      delete this[key]
   else
      this.splice(key, 1)
};

let friend_list_html = document.getElementById("friend_list");
let pending_friends_html = document.getElementById("pending_list");
let my_friends_html = document.getElementById("my_friends_list");

let friends = {
	"zavid": {
		"name": "Zavid",
		"username": "zavid123",
		"score": 103,
		"joined": "25-1-2023",
		"friends": "17",
		"profile_picture": "https://picsum.photos/64"
	},
	"gijs": {
		"name": "Gijs",
		"username": "gijs123",
		"score": 252,
		"joined": "22-1-2023",
		"friends": "21",
		"profile_picture": "https://picsum.photos/64"
	},
	"delysa": {
		"name": "Delysa",
		"username": "delysa123",
		"score": 241,
		"joined": "24-1-2023",
		"friends": "23",
		"profile_picture": "https://picsum.photos/64"
	}
};

let pending_friends = [];

let my_friends = [];

function updateGUI() {
	
}

function addFriend(friend_name) {
	if(!(friend_name in friends)){
		console.log("friend request name not found!");
		return;
	}
	pending_friends.push(friends[friend_name]);
	friends.removeItem(friend_name);
}

function acceptFriendsPlacebo() {
	for(i in pending_friends){
		my_friends.push(pending_friends[i]);
		pending_friends.removeItem(i);
	}
}

setInterval(acceptFriendsPlacebo, 4500);
