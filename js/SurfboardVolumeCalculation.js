var SurfboardVolumnCalculation = /** @class */ (function () {
    function SurfboardVolumnCalculation(weight, skillLevel) {
        this.weight = weight;
        this.skillLevel = skillLevel;
    }
    SurfboardVolumnCalculation.prototype.Volume = function () {
        if (this.skillLevel == 1)
            return this.weight;
        if (this.skillLevel == 2)
            return this.weight * 0.8;
        if (this.skillLevel == 3)
            return this.weight * 0.65;
        if (this.skillLevel == 4)
            return this.weight * 0.4;
    };
    return SurfboardVolumnCalculation;
}());
//# sourceMappingURL=SurfboardVolumeCalculation.js.map