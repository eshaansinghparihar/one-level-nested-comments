
# One Level Nested Comments



## Important Points

The web application allows user to **add**, **edit**, and **delete** **comments** and **replies**. The application supports the following **features**:

1. **Validation:**
   - Users are required to enter both a name and comment/reply text when adding a comment or a reply.
   - The input is validated to ensure that both the name and comment text are provided.
   - Only if both of these are present, the comment/reply is added, otherwise an error is thrown.

2. **Date and Time:**
   - Each comment or reply is automatically saved with the current date and time.

3. **Sorting:**
   - Both comments and replies are sortable based on date and time, as indicated in the design.

4. **Edit Functionality:**
   - When a user clicks on the "Edit" button, they are allowed to edit only the comment text. The name remains uneditable.
   - A validation check has been implemented so that an edited comment or reply cannot be empty.

5. **Delete Button Placement:**
   - The "Delete" button is strategically placed on the border of each comment or reply, following the design specifications.
   - A confirmation popup is also implemented to make sure the user wishes to delete that item.

6. **Data Persistence:**
   - The application ensures data persistence using the use of local storage. This means that even if the user refreshes the page, the data will not be lost.

7. **Testing:**
   - The application has undergone thorough testing to ensure proper functionality.
   - Testing includes validation checks, sorting tests, edit functionality tests, delete button functionality tests, and data persistence tests.

8. **Brownie Points:**
    - A confirmation popup is implemented to make sure the user wishes to delete that item.
    - Reply and Edit buttons can be toggled by clicking on the respective button.
    - A validation check has been implemented so that an edited comment or reply cannot be empty.


## Screenshot

![App Screenshot](https://github.com/eshaansinghparihar/one-level-nested-comments/assets/52907892/a4078590-e5b7-436e-98bd-12925b46f9d1)


## Deployment

This web application has been deployed and hosted on **Netlify** having domain name https://one-level-nested-comments.netlify.app/


## Run Locally

### Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/eshaansinghparihar/one-level-nested-comments.git

2. Install the packages on your local machine.

    ```bash
    yarn install

3. Run the project.

    ```bash
    yarn run start 

4. Open chrome browser and visit http://localhost:3000/ to use the project locally.
## Usage

- Add a comment or reply by filling in the required fields and clicking the "POST" button.
- Edit a comment by clicking the "Edit" button and modifying the comment text.
- Delete a comment or reply by clicking the "Delete" button on the respective item.
- Sort the comments based on date and time by clicking on the "Sort By: Date and Time" button.

