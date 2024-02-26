class League {
    constructor(champion) {
        this.name = champion;
    }
    logName() {
        console.log(this.name);
    }
    logChampion() {
        console.log(this.name); // Changed this.champion to this.name
    }
}
