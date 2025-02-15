const currentUrl = window.location.href;

const formData = currentUrl.split('?')[1].split('&')

const results = document.querySelector('#thanks');


results.innerHTML = `
<p>Thank you, ${show("fname")} ${show("lname")}, for joining the St. George Chamber of Commerce!</p>
            <p>We have received your application with the following details:</p>
            <ul>
                <li><strong>Email:</strong> ${show("email")}</li>
                <li><strong>Mobile Phone Number:</strong> ${show("phone")}</li>
                <li><strong>Business/Organization Name:</strong> ${show("business")}</li>
                <li><strong>Submission Date:</strong> ${formatDateTime(show("timestamp"))}</li>
            </ul>
            <p>We will be in touch with you soon!</p>
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

function formatDateTime(dateString) {
    let decodedDateString = decodeURIComponent(dateString);
    let date = new Date(decodedDateString);
    date = Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
        timeStyle: "short"
    }).format(date);
    return date;
}