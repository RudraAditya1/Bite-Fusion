const sendData = (path, data) => {
    fetch(path, {
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    })
   .then(res=>res.json())
   .then(data => processData(data));
}

const processData = (data) => {
    
    // Correct the variable name
    loader.style.display = null; // Change 'null' to 'none'
    if(data.alert){
        showFormError(data.alert);
    }
}

const showFormError = (err) => {
    let errorEle = document.querySelector('.error'); // Change the variable name
    errorEle.innerHTML = err;
    errorEleclassList.add('show');
}
