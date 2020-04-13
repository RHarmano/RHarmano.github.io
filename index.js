function settimedisp(componentid) {
        var timestamp = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        timestamp = dd + '/' + mm + '/' + yyyy

        document.getElementById(componentid).innerHTML = timestamp
    }