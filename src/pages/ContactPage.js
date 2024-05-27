import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    if (window.CommandBar) {
      console.log('Adding custom component and records in ContactPage.');

      // Add custom component
      window.CommandBar.addComponent(
        "record-preview-with-image",
        "Basic Record Preview with an image",
        {
          mount: (elem) => ({
            render: (data, metadata) => {
              elem.innerHTML =
                "<div>" +
                "<h3>" +
                data.label +
                "</h3>" +
                '<div><img src="' +
                data.photo +
                '" alt="photo" /></div>' +
                "</div>";
            },
            unmount: () => {
              // Clean up any timers, event handlers, etc.
            },
          }),
        }
      );

      // Add records
      window.CommandBar.addRecords(
        "pets",
        [
          {
            label: "Fido",
            id: "foo42",
            photo: "https://www.placedog.net/300/300",
          },
          {
            label: "Buster",
            id: "bar43",
            photo: "https://www.placedog.net/298/298",
          },
          {
            label: "Brutus",
            id: "baz44",
            photo: "https://www.placedog.net/299/299",
          },
        ],
        { detail: { type: "component", value: "record-preview-with-image" } }
      );
      console.log('Records added successfully.');

      // Add record actions
      window.CommandBar.addRecordAction('pets', {
        text: 'Open Profile',
        name: 'open_profile',
        template: {
          type: 'link',
          value: '/profile/{{record.id}}',
          operation: 'self' // how should the page open
        }
      });
      console.log('Record action "Open Profile" added successfully.');

      window.CommandBar.addRecordAction('pets', {
        text: 'Message',
        name: 'message',
        template: {
          type: 'callback',
          value: 'messageUser',
        }
      });
      console.log('Record action "Message" added successfully.');
    } else {
      console.error('CommandBar is not available on the window object in ContactPage.');
    }
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Contact us at contact@example.com.</p>
    </div>
  );
};

export default ContactPage;