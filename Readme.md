# Password Manager

A simple web-based Password Manager that allows users to save, view, and delete platform credentials (Platform, Username, and Password). The data is stored in the browser's `localStorage`, ensuring persistence even after the page is reloaded.

## Features

- Add platform credentials (Platform, Username, Password).
- View saved credentials in a structured format.
- Delete individual credentials.
- Reset all saved data.
- Data is stored in `localStorage` for persistence.
- Responsive and user-friendly design.

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling and layout.
- **JavaScript**: For functionality and interaction.
- **localStorage**: For storing data persistently in the browser.

## How to Use

1. Open the application in a browser.
2. Enter the platform, username, and password in the input fields.
3. Click the **Save** button to add the credentials to the list.
4. View the saved credentials in the list below.
5. Use the **Delete** button to remove individual credentials.
6. Use the **Reset** button to clear all saved data.

## How It Works

1. **Adding Data**:
   - When the user clicks the **Save** button, the entered data is added to the list and saved in `localStorage`.

2. **Deleting Data**:
   - Clicking the **Delete** button removes the corresponding entry from the list and updates `localStorage`.

3. **Resetting Data**:
   - Clicking the **Reset** button clears all data from the list and `localStorage`.

4. **Persistent Storage**:
   - The application uses `localStorage` to ensure that data persists even after the page is reloaded.

## Future Enhancements

- Add password encryption for better security.
- Implement search functionality to filter saved credentials.
- Add export/import functionality for saved data.

## License

This project is open-source and available under the [MIT License](LICENSE).
