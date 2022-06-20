/*File Name: app.js
Student Name: Kin Fung Lee
Student ID 301194080
Date: 19 June 2022 */

"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = "/businessContact-list";
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map