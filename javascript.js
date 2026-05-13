let output = document.getElementById("output");

let Scores = {
        "red": 0,
        "blue": 0,
        "yellow": 0,
        "green": 0
};

function OpeningCeremony(Scores) {
    return new Promise((resolve) => {
        output.innerHTML += "<p>Sports Day Started</p>";
        output.innerHTML += "<p>Players get Ready</p>";
        resolve(Scores);
    },1000);
}

function Race100m(Scores) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let times = {"red": 0,"blue": 0, "yellow": 0,"green": 0};
            for(let key in times){  //generating random times for each team
                let nums = Math.random() * (15-7) + 7;
                times[key] = +nums.toFixed(2);
            }

            output.innerHTML += "<p>100m race started</p>";


            console.log("----100m race started----");
            console.log("times for the teams: ", times);

            let sortedTimes = Object.entries(times). sort(([,a], [,b]) => a-b); //sorting the times in ascending order to find the winner and the positions of each team

            console.log("Winner of 100m race is: ", sortedTimes[0][0]);
            //console.log("sorted times: ",sortedTimes);
            console.log("Previous Scores are: ",Scores);


            for(let i=0;i<4;i++){ //assigning scores based on the position of each team
                if(i===0) Scores[sortedTimes[i][0]] += 50;  //first position
                else if(i===1) Scores[sortedTimes[i][0]] += 35;  //second position
                else if(i===2) Scores[sortedTimes[i][0]] += 25; //third position
                else Scores[sortedTimes[i][0]] += 20; //fourth position
            }

            console.log("updated Scores after 100m race: ",Scores);
            resolve(Scores);
        },3000);
    })
}

function LongJump(Scores) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            output.innerHTML += "<p>Long Jump started</p>";

            console.log("----Long Jump started----");
            let colors = ['red', 'blue', 'yellow', 'green'];
            let winnerIndex = Math.floor(Math.random() * (4-0) + 0); //generating random index to select the winner of long jump
            //console.log(winnerIndex);

            let Winner = colors[winnerIndex];

            console.log("Previous Scores are: ",Scores);
            console.log("Winner of LongJump is: ", Winner);
            Scores[Winner] += 150; //assigning 150 points to the winner of long jump

            console.log("updated socres are: ", Scores);
            resolve(Scores);
        },2000);
    })
}

function HighJump(Scores){
    return new Promise ((resolve,reject) => {
        output.innerHTML += "<p>High Jump started</p>";

        console.log("----High Jump started----");
        setTimeout(() => {
            
            let winner = prompt("Enter the team name which wins the high jump, red:blue:yellow:green - ");
            console.log("The winner of HighJump is: ", winner);

            //checking if the input is valid or not, if valid then assigning 100 points to the winner of high jump
            if(winner.toLowerCase().trim() in Scores){ 
                console.log("Score before the Event: ", Scores);
                Scores[winner.toLowerCase().trim()] += 100;
                console.log("Score after the Event: ", Scores);
            } 
            else{
                console.log("wrong input, Event Cancelled");
            }
            resolve(Scores);
        },2000);
    })
}

function AwardCeremony(Scores){
    output.innerHTML += "<p>Award Ceremony started</p>";
   

    console.log("----Award Ceremony----");
    
    //console.log(result);

    //Announcing top 3 winners after 1 second
    setTimeout(() => {
        output.innerHTML += "<p>Congratulations to all the winners!!</p>";
        output.innerHTML += "<p>Final Scores after all the events is: " + JSON.stringify(Scores) + "</p>";
        output.innerHTML += "<p> Check Console for detailed results of each event and the winners.</p>";

        console.log("Final Scores after all the events is: ", Scores);
        let result = Object.entries(Scores). sort(([,a], [,b]) => b-a);

        console.log("1st Place: ", result[0][0]);
        console.log("2nd Place: ", result[1][0]);
        console.log("3rd Place: ", result[2][0]);

        console.log("Congratulations!! to all the winners.");
    },2000);
}

OpeningCeremony(Scores)
   .then(Race100m)
   .then(LongJump)
   .then(HighJump)
   .then(AwardCeremony);