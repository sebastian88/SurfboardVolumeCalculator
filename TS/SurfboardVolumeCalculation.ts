class SurfboardVolumnCalculation {
    weight : number;
    skillLevel : number;

    constructor(weight: number, skillLevel: number){
        this.weight = weight;
        this.skillLevel = skillLevel;
    }

    public Volume() : number {
        if(this.skillLevel == 1)
            return this.weight;

        if(this.skillLevel == 2)
            return this.weight * 0.8;
            
        if(this.skillLevel == 3)
            return this.weight * 0.65;
        
        if(this.skillLevel == 4)
            return this.weight * 0.4;
    }
}