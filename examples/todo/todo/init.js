
$(document).ready(
    function () {

        iris.baseUri(iris.baseUri() + "examples/todo/todo/");
        
        iris.locale(
            "en_US", {
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dateFormat: "m/d/Y h:i:s",
                currency: {
                    formatPos: "n",
                    formatNeg: "(n)",
                    decimal: ".",
                    thousand: ",",
                    precision: 2
                }
            }
        );
        
        iris.welcome("screen/welcome.js");
    }
);