/* js */
/* get phone name to search */
const phoneBrand = async () => {
    const searchText = document.getElementById('input-field').value;
    console.log(searchText)
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    try {
        const data = await res.json();
        loadPhones(data.data);
    }
    catch (error) {
        console.log(error)
    }

    //     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
}

/* displays phones */
const loadPhones = (phones) => {
    // 1. get the phone container where you want to put the phones
    const phonesContainer = document.getElementById('phone-container');
    //2. clear container
    phonesContainer.innerHTML = "";
    //2.1 remove no found message
    const noPhone = document.getElementById('no-phone-message')
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }
    //2.2 display 20 phones only - using slicing method (i.e :- .slice(0,20))
    phones.slice(0, 20).forEach(phone => {
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
}