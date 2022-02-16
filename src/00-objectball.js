function gameObject () {
        const home = {
        teamName: "Brooklyn Hornets",
        colors: "Black"+ ","+"White",
        Players: { 
        "Alan Anderson": {
                Number: "0",
                Shoe: "16",
                Points: "22",
                Rebounds: "12",
                Assists: "12",
                Steals: "3",
                Blocks: "1",
                Slam_Dunks: "1",          
            },
            
            "Reggie Evans": {
                Number: "30",
                Shoe: "14",
                Points: "12",
                Rebounds: "12",
                Assists: "12",
                Steals: "12",
                Blocks: "12",
                Slam_Dunks: "7",          
            },
            
            "Brook Lopez": {
                Number: "11",
                Shoe: "17",
                Points: "17",
                Rebounds: "19",
                Assists: "10",
                Steals: "3",
                Blocks: "1",
                Slam_Dunks: "15",          
            },

            "Mason Plumlee": {
                Number: "1",
                Shoe: "19",
                Points: "19",
                Rebounds: "12",
                Assists: "6",
                Steals: "4",
                Blocks: "11",
                Slam_Dunks: "5",          
            },

            "Jason terry": {
                Number: "31",
                Shoe: "15",
                Points: "15",
                Rebounds: "2",
                Assists: "2",
                Steals: "4",
                Blocks: "11",
                Slam_Dunks: "1",          
            }
        
        }
    };

        const away = {
        teamName: "Charlotte Hornets",
        colors: "Turquoise" + "Purple",
        Players: {
            "Jeff Anderson": {
                Number: "4",
                Shoe: "18",
                Points: "10",
                Rebounds: "1",
                Assists: "1",
                Steals: "2",
                Blocks: "7",
                Slam_Dunks: "2",          
            }, 

            "Bismak Biyombo": {
                Number: "0",
                Shoe: "16",
                Points: "12",
                Rebounds: "4",
                Assists: "7",
                Steals: "7",
                Blocks: "15",
                Slam_Dunks: "10",          
            }, 

            "DeSagna Diop": {
                Number: "2",
                Shoe: "14",
                Points: "24",
                Rebounds: "12",
                Assists: "12",
                Steals: "4",
                Blocks: "5",
                Slam_Dunks: "5",          
            }, 

            "Ben Gordon": {
                Number: "8",
                Shoe: "15",
                Points: "33",
                Rebounds: "3",
                Assists: "2",
                Steals: "1",
                Blocks: "1",
                Slam_Dunks: "5",          
            }, 

            "Brendan HayWood": {
                Number: "33",
                Shoe: "15",
                Points: "6",
                Rebounds: "12",
                Assists: "12",
                Steals: "22",
                Blocks: "5",
                Slam_Dunks: "12",          
            }
        }
    };
    const teams = home.concat(away);
    return [home, away, teams]
};



function numPointsScored(Name) {
    
}

/* 
1. combine home and away; need to know what data type home and away are 
2. google. how to combine data types in javascript 
3. GOAL = return Points after taking the argument of a player name 
4. iterate through the players array 
*/