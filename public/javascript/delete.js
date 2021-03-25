//deletes item from cart 

async function deleteItem(event){
    event.preventDefault();
    // grabs  item from sqldatabase by id number
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];        
    
      const response = await fetch(`api/item/${id}`, {
          method: 'DELETE'
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    
}