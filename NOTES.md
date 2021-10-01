The index should be used as an entry point to the app, where it sets up whatever environment variables, store actions, or anything else that needs to be loaded at initial page rendering. We should move any views to their own area where we can easily swap out / change them without breaking the whole app.

Always put styles in their own .css or .scss file, try to never inline styles in the Html

The idea behind Next is it makes heavy use of the MVC (model view controller) pattern. The user interacts with the controller (component), which updates the model, which in turn updates the view. A controller should have a single use (think about single responsibility principal). It's the view that congragates all of the components together and injects the needed functionality / models downward into the rest of the DOM tree that's rendered based on the current view. If you want to take this principal to to extreme using the about page as an example:
The about page has a specific functionality, it's purpose is to display any relevant information about the project to the user. Simple enough, but when it gets broken down, you can make a few components out of the the already slender about page. You could structure it in this way:
```
<div>
    <main>
        <Header text="Issue Tracker" />
        <BodyText text=["some text", "to be put into", "multiple <p> tags"] />
        <LinkBuilder href="/" text="some text" />
    </main>
</div>
```
In this use case, we have made generic components out of just about every part of this. This helps us make sure all the styles stay the same between use cases (i.e. the text is ALWAYS going to be in sync when using a generic like this because the styles are set in the component)
Now the about page is a view of multiple components, rather than one component in and of itself