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
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
             card's content.</p>
        </div>
        `
        //8. append div
        phonesContainer.appendChild(newDiv);
    })
}