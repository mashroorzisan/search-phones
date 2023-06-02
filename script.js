/* js */
/* get phone name to search */
const phoneBrand = async () => {
    const searchText = document.getElementById('input-field').value;
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    try {
        const data = await res.json();
        loadPhones(data.data);
    }
    catch (error) {
        console.log(error)
    }
}


/* displays phones */
const loadPhones = (phones) => {
    console.log(phones)
    // 1. get the phone container where you want to put the phones
    const phonesContainer = document.getElementById('phone-container');
    // 2. create new element
    const newDiv = document.createElement('div');
    // 3. add styles to the element
    newDiv.style.width = '18rem';
    // 4. add classlist 'col'
    newDiv.classList.add('col');
    // 5. loop through the phone
    phones.forEach(phone => {
        newDiv.innerHTML = `
        <img src='${phone.image}' class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
             card's content.</p>
        </div>
        `
    })
    /* 
                <div class="col" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
     */
    phonesContainer.appendChild(newDiv);

}