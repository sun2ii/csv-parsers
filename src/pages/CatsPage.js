import React, { useEffect, useState } from 'react';
  
const CatsPage = () => {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    const setupCommandBarActions = () => {
      if (window.CommandBar) {

        /*
        // Example 1: Add a static array to argument choices
        window.CommandBar.addArgumentChoices("users", ["Jane", "Jill", "Jack"]);

        // Example 2: Add a static array to argument choices and turn on QuickFind
        window.CommandBar.addArgumentChoices(
          "users",
          [
            { name: "Jane", id: 1 },
            { name: "Jill", id: 2 },
            { name: "Jack", id: 3 },
          ],
          {
            labelKey: "name",
          }
        );

        // Example 3: Custom search function, no default value
        const onSearchContacts = (query) => {
          return fetch(`https://yourapi.com/search?=${query}`).then((response) =>
            response.json()
          );
        };

        // Register search function to CommandBar
        window.CommandBar.addArgumentChoices("contacts", [], {
          onInputChange: onSearchContacts,
        });

        // Example 4: Add argument choices "lazily" with a loader function
        // loader is called when Spotlight opens
        // loader is NOT called on page load
        window.CommandBar.addArgumentChoices(users, []);
        window.CommandBar.addArgumentChoices(users, fetchUsersLoader);
        */

        window.CommandBar.addArgumentChoices("pets", ["Jane", "Jill", "Jack"]);

        // Adding the callback
        window.CommandBar.addCallback('displayCatFact', async (args, context) => {
          try {
            const response = await fetch('https://catfact.ninja/fact');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCatFact(data.fact);
          } catch (error) {
            setCatFact("An error occurred while fetching the cat fact: " + error.message);
          }
        });
      } else {
        console.error('CommandBar is not available');
      }
    };

    setupCommandBarActions();
  }, []);

  return (
    <div>
      <h1>Teach me about Cats!</h1>
      {catFact && <p>{catFact}</p>}
    </div>
  );
};

export default CatsPage;