/* js */
//Button functionality
//searchPhone by clicking searchButton
const searchPhone = () => {
    dataProcessor(2)
}
//search phone by pressing enter
const keyPress = (e) => {
    if (e.key === 'Enter') {
        dataProcessor(2)
    }
}

/* get phone name to search */
const dataProcessor = (dataLimit) => {
    toggleSpinner(true);
    const searchText = document.getElementById('input-field').value;
    loadPhones(searchText, dataLimit)
}

//load phones
const loadPhones = async (searchText, dataLimit) => {
    //0. start loader
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    try {
        const data = await res.json();
        //no: 3
        displayPhones(data.data, dataLimit);
    }
    catch (error) {
        console.log(error)
    }
}

/* displays phones */
const displayPhones = (phones, dataLimit) => {
    // 1. get the phone container where you want to put the phones
    const phonesContainer = document.getElementById('phone-container');
    //2. clear container
    phonesContainer.innerHTML = "";
    if (dataLimit && phones.length > dataLimit) {
        //hide show all button
        // display 20 phones only - using slicing method (i.e :- .slice(0,20))
        phones = phones.slice(0, dataLimit)
        toggleShowAll(true);
    }
    else {
        //display show all button
        toggleShowAll(false);
    }

    //2.1 remove no found message
    const noPhone = document.getElementById('no-phone-message')
    if (phones.length === 0) {

        toggleSpinner(true);
        noPhone.classList.remove('d-none');
        toggleSpinner(false)
    }
    else {
        noPhone.classList.add('d-none')
    }
    //2.2 loop through
    phones.forEach(phone => {
        // 3. create new element
        const newDiv = document.createElement('div');
        // 4. add styles to the element
        newDiv.style.width = '18rem';
        // 6. add classlist 'card'
        newDiv.classList.add('card');
        newDiv.classList.add('g-col-4');
        // 7. loop through the phone

        newDiv.innerHTML = `
        <img src='${phone.image}' class="card-img-top" alt="...">
        <div class="card-body">
            <h4>${phone.phone_name}</h4>
            <h5>Brand: ${phone.brand}</h5>
            <p class="card-text">${phone.slug}</p>
        </div>
        `
        //8. append div
        phonesContainer.appendChild(newDiv);
    })
    //stop loader
    toggleSpinner(false);


}

//others
//toggle spinner
const toggleSpinner = (isLoading) => {
    const spinner = document.getElementById('loader');
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}
//display show all button
const toggleShowAll = (isDisplayed) => {
    const showAll = document.getElementById('show-all-btn');
    if (isDisplayed) {
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }
}
//click show all button
const showAll = () => {
    dataProcessor();
}