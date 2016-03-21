# Multiple Directives

## Objectives

- Describe Directive to use
- Write further Directives using nested Controllers
- Manipulate Controller data with more Directives
- Clone and delete DOM nodes with Directives
- Communicate across scopes
- Write unit tests for all Directives

## Instructions

First off, run `npm install` to install the dependencies for this lab.

In this repo, we've got the base of a simple contact list. In this, we've got a list of contacts that we want to show on the page and also be able to delete and add contacts.

Let's make the contacts repeat first. Make the `<li>` item iterate over the contacts array of objects we've got in our `ContactController`.

Next, we need to be able to delete the individual contacts. We've already got a function named `removeContact` in our controller - let's make the link for every contact call that function, passing through `$index` as a parameter (this is the index of each item so we know what one to delete).

Now, we need the form to work.

We need to link the form inputs up using `ng-model` - attach the name input to the property `name` in the controller and the phone number to the property `phoneNumber`.

We should use `ng-submit` on the form to handle submit events (when the user presses enter or clicks the button) - this should call a function that pushes a new contact into our array, using the `name` and `phoneNumber` values in our controller.

We also need to test that deleting works properly. Grab one of the items in the list and click on the link inside of it. Check that the list count is now 3.
