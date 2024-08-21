
//! ADDING ELEMENT
document.getElementById('addBtn').addEventListener('click', () => {
    console.log('add button clicked');
    const productInput = document.getElementById('productInput').value.trim();

    let isOkay = true;
    document.getElementById('productItems').querySelectorAll('li').forEach(item => {
        if(item.querySelector('span').textContent.toLowerCase() === productInput.toLowerCase()){
            alert('Product already exists');
            
            return isOkay = false;
        }
    });
    if(productInput === ''){
        alert('Please enter a product name');
        return;
    }
    
    if(isOkay){
        const productItems = document.getElementById('productItems');
        const newLi = document.createElement('li');
        newLi.innerHTML = `
            <span>${productInput}</span>
            <button id="deleteBtn">Delete</button>
        `;
        productItems.appendChild(newLi);
        document.getElementById('productInput').value = '';  
    }
    
    
});

//! ADDING ELEMENT ON ENTER KEY
document.getElementById('productInput').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        const productInput = document.getElementById('productInput').value.trim();

        let isOkay = true;
        document.getElementById('productItems').querySelectorAll('li').forEach(item => {
            if(item.querySelector('span').textContent.toLowerCase() === productInput.toLowerCase()){
                alert('Product already exists');
                return isOkay = false;
            }
        });
        if(productInput === ''){
            alert('Please enter a product name');
            return;
        }
        
        if(isOkay){
            const productItems = document.getElementById('productItems');
            const newLi = document.createElement('li');
            newLi.innerHTML = `
                <span>${productInput}</span>
                <button id="deleteBtn">Delete</button>
            `;
            productItems.appendChild(newLi);
            document.getElementById('productInput').value = '';  
        }
    }
});






//! SEARCHING ELEMENT
document.getElementById('searchBtn').addEventListener('click', () => {
    console.log('search button clicked');
    const productSearch = document.getElementById('productSearch').value.trim();

    if(productSearch === ''){
        alert('Please enter a product name');
        return;
    }

    const productItems = document.getElementById('productItems');
    const items = productItems.querySelectorAll('li');

    items.forEach(item => {
        const span = item.querySelector('span');
        if(span.textContent.toLowerCase().includes(productSearch.toLowerCase())){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }
    });
});

//! SEARCHING ELEMENT ON ENTER KEY
document.getElementById('productSearch').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        console.log('Enter key pressed');
        const productSearch = document.getElementById('productSearch').value.trim();

        if(productSearch === ''){
            alert('Please enter a product name');
            return;
        }

        const productItems = document.getElementById('productItems');
        const items = productItems.querySelectorAll('li');

        items.forEach(item => {
            const span = item.querySelector('span');
            if(span.textContent.toLowerCase().includes(productSearch.toLowerCase())){
                item.style.display = 'flex';
            }else{
                item.style.display = 'none';
            }
        });
    }
});

//! SEARCHING ELEMENT ON KEYUP
document.getElementById('productSearch').addEventListener('keyup', (e) => {
    const productSearch = e.target.value.trim();
    const productItems = document.getElementById('productItems');
    const items = productItems.querySelectorAll('li');
    let c = 0;
    if(productSearch === ''){
        document.getElementById('searchBtn').style.backgroundColor = 'black';

        items.forEach(item => {
            item.style.display = 'flex';
        });
        return;
    }
    else{
        items.forEach(item => {
            const span = item.querySelector('span');
            if(span.textContent.toLowerCase().includes(productSearch.toLowerCase())){
                item.style.display = 'flex';
                c++;
                document.getElementById('searchBtn').style.backgroundColor = 'green';

            }else{
                item.style.display = 'none';
                return;
            }
        });
    }
    if(c>0){
        document.getElementById('searchBtn').style.backgroundColor = 'green';
    }
    else{
        document.getElementById('searchBtn').style.backgroundColor = 'red';
    }
});




//! DELETING ELEMENT
document.getElementById('productItems').addEventListener('click', (e) => {
    if(e.target.id === 'deleteBtn'){
        e.target.parentElement.remove();
        //animation
        e.target.parentElement.style.animation = 'fadeout 1s';
    }


});
