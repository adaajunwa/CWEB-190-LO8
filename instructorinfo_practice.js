"use strict";

window.onload = function () {

    document.getElementById("btnUpdate").onclick = function () {
        // add hard code text to page
        document.getElementById("name").innerText = "Ernesto Basoalto";
        document.getElementById("office").innerText = "240A.4";
        document.getElementById("phone").innerText = "654-4324";
    }

    // document.getElementById("btnUpdateFetch").onclick = function () {
    //     // use builtin fetch function to make a request in the background - does not reload the page
    //     fetch("data/oneinstructor.json")
    //         .then(function (response) {
    //             if (!response.ok) {
    //                 throw new Error("Network response was not OK:" + response.status)
    //             }
    //             return response.json() // returns yet another promise
    //         })
    //         .then(function (jsonObject) {
    //             document.getElementById("name").innerText = jsonObject.name;
    //             document.getElementById("office").innerText = jsonObject.office;
    //             document.getElementById("phone").innerText = jsonObject.phone;
    //         })
    //         .catch(function(error) {
    //             console.log("Problem with the fetch operation: " + error.message)
    //         });
    // };

    document.getElementById("btnUpdateFetch").onclick = async function () {
        try {
            const response = await fetch("data/oneinstructor.json");

            if (!response.ok) {
                throw new Error("Network response was not OK:" + response.status)
            }
            const jsonObject = await response.json() // returns yet another promise
            document.getElementById("name").innerText = jsonObject.name;
            document.getElementById("office").innerText = jsonObject.office;
            document.getElementById("phone").innerText = jsonObject.phone;

        } catch (error) {
            console.log("Problem with the fetch operation: " + error.message)
        }
    };


    document.getElementById("btnUpdateAll").onclick = function () {
        // use builtin fetch function to make a request in the background - does not reload the page
        fetch("data/allinstructors.json")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not OK:" + response.status)
                }
                return response.json() // returns yet another promise
            })
            .then(function (jsonArray) {
                const names = [];
                const offices = [];
                let phones = ""; //illustrate building a string rather than using an array

                for (const instr of jsonArray) {
                    names.push(instr.name);
                    offices.push(instr.office);
                    phones += instr.phone + ", "; // illustrate building a string rather than array
                }
                document.getElementById("name").innerText = names.join(", ");
                document.getElementById("office").innerText = offices.join(", ");
                document.getElementById("phone").innerText = phones.slice(0, -2); //trim off the last 2 chars of the string
            })
            .catch(function (error) {
                console.log("Problem with the fetch operation: " + error.message)
            });
    };


}
