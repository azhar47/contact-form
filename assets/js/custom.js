/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {

    var validator = $("#contact").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4,
                maxlength: 20
            },
            email: {
                required: true,
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 11
            },
            comment: "required"
        },
        messages: {
            fname: {
                required: " *Enter You Name (Required)",
            },
            email: {
                required: " *Enter Your Email Address (Required)",
                email: "Please Enter Your Valid Email Address",
            },
            mobile: {
                required: "*Please Enter Your Mobile Number",
                minlength: "*Please Enter at least 11 Digit. "
            }
        }
    });
    $.validator.methods.email = function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
    };



    var i = 100;
    $("textarea").keyup(function () {
        var txt = $("#txt").val().length;
        var rem = i - txt;
        $("span.ts").text(rem + " characters remaining");
        $("span.ts").css("color", "red");
        $("span.ts").css("font-weight", "bold");
        if (rem == 0) {
            $("span.ts").text("Sorry! You can't enter more than 100 Characters");
        }

    });

});