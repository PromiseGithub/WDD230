function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4')

  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;

    // Change the textContent property of the h3 element to contain the prophet's Date of Birth
    h3.textContent = 'Date of Birth: ' + prophet.birthdate;

    // Change the textContent property of the h2 element to contain the prophet's Place of Birth
    h4.textContent = 'Place of Birth: ' + prophet.birthplace;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname + ' - ' + prophet.order + "th" + ' ' + 'Latter-day Preident');
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4)
    card.appendChild(image);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }



const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    console.log(prophets);
    prophets.forEach(prophet => displayProphets(prophet));
  });
