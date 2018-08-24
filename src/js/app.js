'use strict';
(function () {
    //    const buttonGo = document.querySelector("#client-number-go");
    //    const buttonGoTwo = document.querySelector("#client-number-go-2");
    //    const buttonX = document.querySelector("#client-number-close");
    //    const buttonSelectOther = document.querySelector("#client-number-select-other");
    //
    //    buttonGo.addEventListener('click', function(event) {
    //        event.preventDefault();
    //        var textBox = document.getElementById('client-number');
    //
    //        if (textBox.value === "") {
    //            alert('Wprowadź numer klienta');
    //        } else {
    //            next();
    //        }
    //    });
    //
    //    buttonX.addEventListener("click", back);
    //    buttonSelectOther.addEventListener("click", back);
    //
    //    const clientNumberKeyboard = document.querySelector("#client-number-keyboard");
    //    const clientNumberParagraph = document.querySelector("#client-number-value");
    //    const password = document.querySelector("#password");
    //    const passwordKeyboard = document.querySelector("#password-keyboard");
    //    const instructionForClient = document.querySelector("#instruction-for-client");
    //    const clientNumberClose = document.querySelector("#client-number-close");
    //    const clientNumberSelectOther = document.querySelector("#client-number-select-other");
    //
    //    function next() {
    //        const clientNumber = document.querySelector("#client-number");
    //
    //        clientNumber.style.display = "none";
    //        clientNumberParagraph.innerHTML = clientNumber.value;
    //        clientNumberKeyboard.style.display = "none";
    //        password.style.display = "inline-block";
    //        passwordKeyboard.style.display = "inline-block";
    //        instructionForClient.innerHTML = "Aby zaimportować dane zaloguj się do swojego banku";
    //        clientNumberClose.style.display = "inline-block";
    //        clientNumberSelectOther.style.display = "inline-block";
    //        buttonGo.style.display = "none";
    //        buttonGoTwo.style.display = "inline-block";
    //    };
    //
    //    function back() {
    //        const clientNumber = document.querySelector("#client-number")
    //
    //        clientNumber.style.display = "inline-block";
    //        clientNumber.value = "";
    //        password.value = "";
    //        clientNumberKeyboard.style.display = "inline-block";
    //        clientNumberParagraph.innerHTML = "";
    //        password.style.display = "none";
    //        passwordKeyboard.style.display = "none";
    //        instructionForClient.innerHTML = "Podaj numer klienta:";
    //        clientNumberClose.style.display = "none";
    //        clientNumberSelectOther.style.display = "none";
    //        buttonGoTwo.style.display = "none";
    //        buttonGo.style.display = "inline-block";
    //    };
    //
    //    buttonGoTwo.addEventListener('click', function (event) {
    //        event.preventDefault();
    //        var textBox = document.getElementById('password');
    //
    //        if (textBox.value === "") {
    //            alert('Wprowadź hasło');
    //        } else {
    //            login()
    //        }

    //-----AJAX METHOD-------

    //        function login() {
    //        const xhttp = new XMLHttpRequest();
    //        const clientNumber = document.querySelector("#client-number").value;
    //        const password = document.querySelector('#password').value;
    //        
    //        const data = {
    //  login: clientNumber,
    //  password: password
    //}
    //
    //        xhttp.onreadystatechange = function () {
    //
    //            if (xhttp.status == 400) {
    //                alert('Podane dane są nieprwidłowe')
    //            }
    //            
    //            else if (xhttp.status == 200) {
    //                window.location.href = 'http://localhost:3000/dashboard.html'
    //            };
    //        };
    //
    //        xhttp.open('POST', 'https://efigence-camp.herokuapp.com/api/login', true);
    //        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    //
    //        xhttp.send(Qs.stringify(data));
    //        
    //    }

    //------AXIOS SHORT METHOD
    //                    axios.post('https://efigence-camp.herokuapp.com/api/login', {
    //                        login: 'efi',
    //                        password: 'camp'
    //                    }).then(function (response) {
    //                         alert('Podane dane są nieprwidłowe');
    //                    }).catch(function (error) {
    //                        window.location.href = 'http://localhost:3000/dashboard.html';
    //                    })

    //        function login() {
    //            const clientNumber = document.querySelector("#client-number").value;
    //            const password = document.querySelector('#password').value;
    //
    //            const formData = new FormData();
    //            formData.append('login', clientNumber);
    //            formData.append('password', password);
    //
    //            const options = {
    //                method: 'POST',
    //                headers: {
    //                    'content-type': 'application/x-www-form-urlencoded'
    //                },
    //                data: formData,
    //                url: "https://efigence-camp.herokuapp.com/api/login",
    //            };
    //
    //            axios(options).then(function (response) {
    //                window.location.href = 'http://localhost:3000/dashboard.html';
    //            }).catch(function (error) {
    //                alert('Podane dane są nieprwidłowe');
    //            })
    //
    //        }
    //
    //    });

    const burgerBtn = document.getElementById("hamburger-items");
    burgerBtn.addEventListener('click', function() {
        const element = document.querySelector(".dashboard");
        element.classList.toggle("burger-active");
    });

})();