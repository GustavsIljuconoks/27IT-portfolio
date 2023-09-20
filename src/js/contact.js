function showAdditionalDescription(style) {
    document.getElementById('other_info').style.display = style;
}

const sendMail = () => {
    let mailSubmit = document.getElementById("mailSubmit");
    
    let name = document.getElementById("first_name").value;
    let additional = document.getElementById("large-input").value;
    console.log(additional);

    let description_other = document.getElementById("description_other").value;
    console.log(description_other);

    selected = document.querySelector('input[name="service"]:checked');
    let selectService = selected.value;


    mailSubmit.href = "mailto:gustavs@gmail.com?subject=Darba piedāvājums&body=Mani interesētu " + selectService + " pakalpojums. " + description_other + " %0A%0A" + additional + "%0A%0A" + name;
}