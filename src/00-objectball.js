    const game = gameObject();
    const players = {...game.home.players, ...game.away.players};
    const colors = [game.home.colors, game.away.colors];
    const mostPointsHome = {...game.home.players};
    const mostPointsAway = {...game.away.players};

    function gameObject() {
        return { 
            home: {
                teamName: "Brooklyn Hornets",
                colors: "Black" + "," + "White",
                players: { 
                    "Alan Anderson": {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slam_dunks: 1,          
                },
                
                    "Reggie Evans": {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slam_dunks: 7,          

                },
                
                    "Brook Lopez": {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slam_dunks: 15,          
                },

                    "Mason Plumlee": {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 4,
                        blocks: 11,
                        slam_dunks: 5,          
                },

                    "Jason terry": {
                        number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slam_dunks: 1,          
                }
            
                }
            },
        
            away: {
                teamName: "Charlotte Hornets",
                colors: "Turquoise" + "," + "Purple",
                players: {
                    "Jeff Anderson": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slam_dunks: 2,          
                }, 

                    "Bismak Biyombo": {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slam_dunks: 10,          
                }, 

                    "DeSagna Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slam_dunks: 5,          
                }, 

                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slam_dunks: 5,          
                }, 

                    "Brendan HayWood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slam_dunks: 12,          
                    }
                }
            }
        
        };
    }

    function numPointsScored (name){
        return players[name].points
        //players is accessing global 
    }

    function shoeSize (name){
        return players[name].shoe 
    }
    
    function teamColors (team){
        console.log(team)
        if( team === "home" ){
            return colors[0]
        }
        else if (team === "away") {
            return colors[1]
        }
        else {
            return null
        }
    }
    
    function teamNames (team){
        if(team === "home"){
            return game.home.teamName
        }
        else if(team === "away") {
            return game.away.teamName
        }
        else {
            return null
        }
    }   
    
    function playerStats(name){
        return players[name]
    }

    function bigShoeRebounds(){
        let game = gameObject();
        let biggestShoe = 0;
        let bigPlayer = " ";
        for (let shoes in game){
            let teamObj = game[shoes];
            for (let player in teamObj.players){
                let data = players[player].shoe;
                if (data >= biggestShoe){
                    biggestShoe = data;
                    bigPlayer = player;
                }
            } 
        }
        return players[bigPlayer].rebounds
    }
    
    function mostPointsScored() {
       let game = gameObject();
       let mps = 0;
       let pP = " ";
       for (let mostPoints in game){
           let team = game[mostPoints];
           for (let player in team.players){
               let data = players[player].points;
               if (data >= mps){
                   mps = data
                   pP = player
               }
           }
       }
       return players[pP].points
    }

    function winningTeam() {
        let game0 = mostPointsHome;
        let game1 = mostPointsAway;
        let homeTeamPoints = 0;
        let awayTeamPoints = 0;
        for (let pn in game0){
            let player = game0[pn]
            for(let stat in player){ 
                player[stat]
                if (stat === "points"){
                    homeTeamPoints += player[stat]
                }
            }
        }
        for (let pn in game1){
            let player = game1[pn]
            for(let stat in player){
                player[stat]
                if (stat === "points"){
                    awayTeamPoints += player[stat]
                }
            }
        }
        if (homeTeamPoints > awayTeamPoints){
            return game.home.teamName;
        }
        else (homeTeamPoints < awayTeamPoints)
            return game.away.teamName;
    }
            
    function playerWithLongestName () {
        let pnl = 0;
        let largePlayerName = " ";
        
        for (let name in players){
            if (pnl <= name.length){
                pnl = name.length
                largePlayerName = name
            }
        }
        return largePlayerName
    }

    function doesLongNameStealATon () {
        pwln = playerWithLongestName();
        pwlns = players[pwln].steals;
        let pwms = " ";
        let pwmsSteals = 0;
        for (let name in players){
            if (pwmsSteals <= players[name].steals){
                pwms = name
                pwmsSteals = players[name].steals
            }
            debugger;
        }
        if (pwln === pwms){
            return true
        }
        else {
            return false
        }

    }