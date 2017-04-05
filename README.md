BDD

When a button is clicked. A number is randomized between 1 and 6 and is displayed.
Example:
input:  Button clicked
output: x=2

User pushes button again and adds to last number, creating a roll total.
Example:
input:  Button clicked
output: x + 6 = 8

User clicks and if randomized number is 1. Roll total changes to 0 instead of adding any number to total.
input:  Button clicked
output: x * 0 = 0

User pushes hold button and roll total adds to an empty player total.
Example:
input: Button clicked x=roll total    y=player total
output: x = y

When player total equals or exceeds 100, user is prompted that they have won.
Example:
input: Player total = 102
output: Player has won!
