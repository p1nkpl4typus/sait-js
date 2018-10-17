var url = "https://jsonplaceholder.typicode.com/users";

//RETRIEVING DATA

fetch(url)
.then(handleErrors)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log("Name: " + data[i].name);
        console.log("Email: " + data[i].email);
        console.log("**********")
    }
})
.catch(displayErrors);

function handleErrors(res){
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;
};

function displayErrors(err){
    console.log(err);
};

//SENDING DATA

var user = {
    username: "sstorla",
    id: 408783
};

fetch(url, {

    //Set your method
    method: "POST",

    //Set your headers
    headers: {
        "Content-Type": "application/json"
    },

    //Set Body
    body: JSON.stringify(user)

})
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
});
