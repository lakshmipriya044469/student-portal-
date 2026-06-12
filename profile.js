const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const bloodGroup = document.getElementById('blood-group');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const pin = document.getElementById('pin');
const emergencyName = document.getElementById('emergency-name');
const emergencyRelationship = document.getElementById('emergency-relationship');
const emergencyPhone = document.getElementById('emergency-phone');

window.addEventListener('load', function() {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        gender.textContent = user.gender;
        dob.textContent = user.dob;
        bloodGroup.textContent = user.bloodGroup;
        email.textContent = user.email;
        phone.textContent = user.phone;
        address.textContent = user.address;
        pin.textContent = user.pin;
        emergencyName.textContent = user.emergencyContactName;
        emergencyRelationship.textContent = user.relationship;
        emergencyPhone.textContent = user.emergencyPhone;
    }
});


