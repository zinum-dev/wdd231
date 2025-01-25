const currentUrl = window.location.href;

const formData = currentUrl.split('?')[1].split('&')

const results = document.querySelector('#results');

results.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")} </p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")}.</p>
<p>Your Phone: ${show("phone")}</p>    
<p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>    


`

function show(key) {
    let result
    formData.forEach((item) => {
        if (item.startsWith(key)) {
            result = item.split('=')[1].replace(/%40/g, '@').replace(/%2B/g, '+');
        }
    });
    return (result);
}