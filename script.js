// function generateResume() {
//     const fullName = document.getElementById("fullName").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const education = document.getElementById("education").value;
//     const experience = document.getElementById("experience").value;

//     // Display Values in Resume Section
//     document.getElementById("displayName").textContent = fullName;
//     document.getElementById("displayEmail").textContent = email;
//     document.getElementById("displayPhone").textContent = phone;
//     document.getElementById("displayEducation").textContent = education;
//     document.getElementById("displayExperience").textContent = experience;

//     // Make Resume Output Visible
//     document.getElementById("resumeOutput").style.display = "block";
// }

// Function to generate resume
function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;

    // Update the resume fields
    document.getElementById("displayName").textContent = fullName;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayEducation").textContent = education;
    document.getElementById("displayExperience").textContent = experience;

    // Display the resume output
    document.getElementById("resumeOutput").style.display = "block";
}

// Function to add a skill
function addSkill() {
    const skillInput = document.getElementById("skillInput");
    const skillText = skillInput.value.trim();
    if (skillText !== "") {
        const skillsList = document.getElementById("displaySkills");
        const skillItem = document.createElement("li");
        skillItem.textContent = skillText;
        skillItem.setAttribute("contenteditable", "true");
        skillsList.appendChild(skillItem);
        skillInput.value = ""; // Clear the input after adding
    }
}