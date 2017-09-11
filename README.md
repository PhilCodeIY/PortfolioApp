Dailhy Project: Daily Project: React Router Portfolio Refactor Part 2.
Getting Started  

To get started you will need open to up your Portfolio Application from yesterday's assignment.

You should still have the following separate components (you will add two more later in the project):

App.js
BaseLayout.js
Home.js
About.js
Portfolio.js
Your navigation bar should be fully functional and allow the users to navigate seamlessly through your app. The back button in the browser should take user's to the previous screen (because of the history API and using <BrowserRouter>).

You will need to migrate your <BaseLayout> component into your index.js file and apply it in the appropriate position so that it will render on each page.

You will no longer need to import your BaseLayout component to any other component once you have achieved the proper migration into the ReactDOM.render method.

Replace the <Link> components in your BaseLayout component with <NavLink> components and apply your own styling to differentiate them when they are active (see HINTS).

Use exact path to render your splash index page (your App.js component).

Create two more components - a Contact.js component and a References.js component.

Contacts should render a page with mock contact information.
Contacts should have links to an email, Facebook, GitHub, Phone, etc. (these can be mock or your own).
References should render a list of 3-5 references from past mock employers.
Each "reference" should include a name, contact info, and lorem ipsum (or mock recommendations if you are inclined) as their recommendations.
Add a two more <NavLink>'s to your navigation bar in your <BaseLayout> and create content for them.

Add a link to Contact.
Add a link to References.
The final project should still be an attractive mock portfolio website. The content and styling are up to you. See example down below for a general idea of simple project structure, though your project should be more professional and polished! Don't forget about CSS frameworks like Bootstrap to help you out!

Hints  

Remember that you can create a component that receives other components using {props.children} or {this.props.children} depending upon it being a class based component or a functional component.

Don't forget activeClassName!

Results  

Once complete, your project should have the following functionality but should be more professionally styled:

portfolio-app-refactor.gif


-----------------------------------------------
Daily Project: Portfolio App (Completed)Part 1
Getting Started  

To get started you will need to use create-react-app to quickly scaffold a project. You should migrate your components into a components folder in the src directory and the styles into a styles folder in the src directory. Link up all pages to make sure they working and test using npm run start in the console, use Ctrl+c to exit.

You will need use npm install --save react-router-dom in the terminal to save React Router 4 to your project dependencies and make it available for import.

In your index.js file, you will need to import { BrowserRouter, Route, Switch } from react-router-dom.

You should use your knowledge of nested child components from React to create a BaseLayout component that houses a navigation bar and takes children (Hint: {this.props.children} or {props.children}) components and renders on each screen. You should be able to see your navigation bar from every component/page rendered.

You should have the following separate components:

App.js
BaseLayout.js
Home.js
About.js
Portfolio.js
You should have at least two or three buttons that are stylized <Link> components in the body of your app.

Your navigation bar should be fully functional and allow the users to navigate seamlessly through your app. The back button in the browser should take user's to the previous screen (because of the history API and using <BrowserRouter>).

The final project should be a relatively attractive mock portfolio website. The content and styling are up to you. See example down below for a general idea of simple project structure, though your project should be more professional and polished!

Hints  

Remember that you can create a component that receives other components using {props.children} or {this.props.children} depending upon it being a class based component or a functional component.

Results  

The example provided is UGLY!!!. In your portfolio site, you can source your files form anywhere (inlcuding sites like https://www.fillmurray.com/). You can also style your site to your liking. You aren't being assessed on your design skills, but try to make your site as attractive as possible:

Basic Layout of App
