document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let photo = document.getElementById("photo").files[0];
    let signature = document.getElementById("signature").files[0];

    let photoURL = URL.createObjectURL(photo);
    let signURL = URL.createObjectURL(signature);

    document.getElementById("output").style.display="block";

    document.getElementById("output").innerHTML = `
    <h2 style="color:green;">Registration Successful!</h2>

    <h3>Personal Details</h3>

    <p><b>First Name:</b> ${fname.value}</p>
    <p><b>Last Name:</b> ${lname.value}</p>
    <p><b>Father Name:</b> ${father.value}</p>
    <p><b>Mother Name:</b> ${mother.value}</p>
    <p><b>Date of Birth:</b> ${dob.value}</p>
    <p><b>Phone Number:</b> ${phone.value}</p>

    <h3>Education Details</h3>

    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Percentage/CGPA</th>
        </tr>

        <tr>
            <td>SSC</td>
            <td>${sscCollege.value}</td>
            <td>${sscYear.value}</td>
            <td>${sscMarks.value}</td>
        </tr>

        <tr>
            <td>Intermediate</td>
            <td>${interCollege.value}</td>
            <td>${interYear.value}</td>
            <td>${interMarks.value}</td>
        </tr>

        <tr>
            <td>Degree</td>
            <td>${degreeCollege.value}</td>
            <td>${degreeYear.value}</td>
            <td>${degreeMarks.value}</td>
        </tr>

    </table>

    <h3>Uploaded Files</h3>

    <p><b>Photo</b></p>
    <img src="${photoURL}" width="120" height="120">

    <p><b>Signature</b></p>
    <img src="${signURL}" width="150" height="60">
    `;

    document.getElementById("registrationForm").reset();

});
