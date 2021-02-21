// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    // Ready to served
    const readyBurgerBtns = document.querySelectorAll('.ready_burger');

    readyBurgerBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
        console.log('test');
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newDevoured = e.target.getAttribute('data-newdevoured');

        const newDevouredState = {
            devoured: newDevoured,
        };

        fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },

            // make sure to serialize the JSON body
            body: JSON.stringify(newDevouredState),
        }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
                console.log(`the burger with the id: ${id} served`);
                location.reload('/');
            } else {
                alert('something went wrong!');
            }
        });
        });
    });
});