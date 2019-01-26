var Index = /** @class */ (function () {
    function Index() {
    }
    Index.main = function () {
        var button = document.getElementsByClassName("js-button")[0];
        button.addEventListener("click", function () {
            var level = +document.querySelector('input[name="level"]:checked').value;
            var weight = +document.querySelector('input[name="weight"]').value;
            var result = document.getElementsByClassName("js-result")[0];
            result.innerHTML = String(new SurfboardVolumnCalculation(weight, level).Volume() + " litres");
        });
    };
    return Index;
}());
Index.main();
//# sourceMappingURL=Index.js.map