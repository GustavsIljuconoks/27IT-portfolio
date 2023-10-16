function showAdditionalDescription(style) {
    document.getElementById('other_info').style.display = style;
}

const sendMail = () => {
    let mailSubmit = document.getElementById("mailSubmit");

    let name = document.getElementById("first_name").value;
    let additional = document.getElementById("large-input").value;
    let user_tel = document.getElementById("tel").value;
    let description_other = document.getElementById("description_other").value;

    selected = document.querySelector('input[name="service"]:checked');
    let selectService = selected.value;


    mailSubmit.href = "mailto:27itsolutions@gmail.com?subject=Darba piedāvājums&body=Mani interesētu " + selectService + " pakalpojums. " + description_other + " %0A%0A" + additional + "%0A%0A" + name + "%0A%0A Mans telefona numurs: " + user_tel;
}