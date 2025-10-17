Explanation:

for (let val of contacts) → loops through each contact.

if (val.firstName === name) → finds the matching person.

val.hasOwnProperty(prop) → checks if that person has the requested property.

If found → return the value of that property (val[prop]).

If not found → return "No such property".

If no contact matches → after loop → return "No such contact".
