Certainly! Here is a guide on how to use the `add_presentation.html` and `presentation.html` pages.

## Guide: Using the Presentation Management System

### Overview
This guide will help you understand how to use the `add_presentation.html` page to input presentation URLs and the `presentation.html` page to view the presentations with a countdown timer.

### Prerequisites
1. Ensure you have a web server running that can serve these HTML files and handle the API requests to `/data/project2/presentation`.
2. Ensure that the presentation data is accessible via the specified endpoints.

### Files
- `add_presentation.html`: Page to input presentation URLs.
- `presentation.html`: Page to view the presentations with a countdown timer.
- `styles.css`: CSS file for night mode theme styling.
- `add_presentation.js`: JavaScript file for handling the form submission and updating the presentation URLs.
- `presentation.js`: JavaScript file for managing the presentation viewer and countdown timer.

### Step-by-Step Guide

#### Step 1: Setting Up the Server
1. Place all the files (`add_presentation.html`, `presentation.html`, `styles.css`, `add_presentation.js`, and `presentation.js`) in the root directory of your web server.
2. Ensure your web server can serve these files and handle GET and POST requests to `/data/project2/presentation`.

#### Step 2: Adding Presentation URLs

1. Open `add_presentation.html` in your web browser.
2. You will see a form titled "Add Presentation URL".

    ![Add Presentation URL Form](example-add-presentation.png)

3. Select the team number from the dropdown menu.
4. Enter the URL of the team's presentation in the input field.
5. Click the "Submit" button.

    - On successful submission, you will see a message "URL updated successfully!".
    - If there is an error, a message will indicate that the update failed.

#### Step 3: Viewing Presentations

1. Open `presentation.html` in your web browser.
2. The page will display an iframe that will load the presentations and a countdown timer showing the remaining time for the current presentation.

    ![Presentation Viewer](example-presentation-viewer.png)

3. The iframe will change to the next presentation URL according to the schedule:
    - Each presentation lasts 15 minutes.
    - After each presentation, there is a 3-minute voting period.

4. The timer will count down from 15 minutes for each presentation and 3 minutes for each voting period.

### Additional Notes
- Ensure that the presentation URLs provided are correct and accessible.
- You can edit the presentation data directly if needed by accessing the JSON object via the server endpoint.
- The countdown timer and presentation transitions are automated and will continue to the next presentation or voting period as scheduled.

### Troubleshooting
- **No presentations loading**: Check the console for errors and ensure the `/data/project2/presentation` endpoint is returning the correct JSON data.
- **Timer not updating**: Ensure JavaScript is enabled in your browser and check for any errors in the console.

This guide should help you successfully manage and view your presentations using the provided HTML pages. If you have any further questions or encounter issues, feel free to reach out for support.