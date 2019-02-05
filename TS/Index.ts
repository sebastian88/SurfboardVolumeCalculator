class Index {
    public static main() {
        let button: Element = document.getElementsByClassName("js-button")[0];
        button.addEventListener("click", function (event){
            event.preventDefault();
            let level: number = +(<HTMLInputElement>document.querySelector('input[name="level"]:checked')).value;
            let weight: number = +(<HTMLInputElement>document.querySelector('input[name="weight"]')).value;

            let result: Element = document.getElementsByClassName("js-result")[0];
            result.innerHTML = String(new SurfboardVolumnCalculation(weight, level).Volume() + " litres minimum")
        })
    }
}

Index.main();