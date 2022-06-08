let leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
console.log(leaderboard);


let sorted_leaderboard = [];
for (var user in leaderboard) {
    sorted_leaderboard.push([user, leaderboard[user]]);
}

sorted_leaderboard.sort(function (a, b) {
    return a[1] - b[1];
});
console.log(sorted_leaderboard);

for (let i = sorted_leaderboard.length - 1; i >= 0; i--) {
    let newtritem = document.createElement('tr');

    let newtditem1 = document.createElement('td');
    newtditem1.innerText = sorted_leaderboard[i][0];
    console.log(newtditem1);
    newtritem.appendChild(newtditem1);
    let newtditem2 = document.createElement('td');
    newtditem2.innerText = sorted_leaderboard[i][1];
    newtritem.appendChild(newtditem2);
    console.log(newtritem);

    document.getElementById('leaderboard_table').appendChild(newtritem);
}




