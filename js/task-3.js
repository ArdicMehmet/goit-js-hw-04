const profile = {
	username: "Jacob",
    playTime: 300,
    changeUsername : function(newName){
        this.username = newName;
    },
    updatePlayTime : function(newTime){
        parseInt(newTime) ? this.playTime+= parseInt(newTime) : console.log("The value you want to assign is not a number");
    },
    getInfo : function(){
        return `${this.username} has ${this.playTime} active hours!`;
    }
};
console.log("-------------------- Gorev 3 --------------------");
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"