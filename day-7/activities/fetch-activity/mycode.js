var user = "https://api.github.com/users/p1nkpl4typus";
var repo = "https://api.github.com/users/p1nkpl4typus/repos";
var info = document.getElementById("info");
var list = document.getElementById("repo-list");

function handleErrors(res) {
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}

function displayErrors(err) {
    console.log(err);
}

fetch(user)
.then(handleErrors)
.then(function(res){
    return res.json();
})
.then(function(data){
    info.innerHTML = "Name: " + data.name + " | URL: " + data.url;
})
.catch(displayErrors);

fetch(repo)
.then(handleErrors)
.then(function(res){
    return res.json();
})
.then(function(data){
    for (var i = 0; i < data.length; i++){
        var listItem = document.createElement("li");
        listItem.innerHTML = data[i].name;
    }
})
.catch(displayErrors);
