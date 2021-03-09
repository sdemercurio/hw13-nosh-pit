document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
    // UPDATE
    const changeBurgerBtns = document.querySelectorAll('.change-noshed');
  
    // Set up the event listener for the create button
    if (changeBurgerBtns) {
      changeBurgerBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the burger_name, "id"
          const id = e.target.getAttribute('data-id');
          const newNosh = e.target.getAttribute('data-newNosh');
  
          const newNoshState = {
            noshed: newNosh,
          };
          //isn't fetch the same as get? 
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newNoshState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed noshed to: ${newNosh}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the burger_name, "quote"
        const newBurger = {
          name: document.getElementById('burg').value.trim(),
          noshed: document.getElementById('noshed').checked,
        };
  
        // Send POST request to create a new quote
        fetch('burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burg').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new Burger!');
          location.reload();
        });
      });
    }
  });