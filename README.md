Start locally with npm start.

There are some errors/bugs in this project.

I want to show some posts with their authors from https://jsonplaceholder.typicode.com/

Let's troubleshoot what's wrong.




Issues with the provided code/challenge:

Typo in the URL - The first issue I have found on the provided code was a typo on the 1st fetched URL. Instead of the url read: ‘https://jsonplaceholder.typicode.com/posts’, it was reading “https://jsonplaceholder.typicode.com/pots’. The typo was at the end of the url in the word “post”.
Parenthesis in the URL - Additionally, there was an extra parenthesis at the end of the URL. I went ahead and removed that parentheses, and console.log to make sure the code looked clean/correct.
Fetch() function Incomplete - As expected, the fetch function returns a “response” object. On the response, .json() needs to be called because it returns a promise that resolves with a response object. The syntax for this is - - - fetch(url).then(response => response.json()), followed by .then(users = > updateUsersById(posts)); and the same process applies to the posts.
getUsername() - So, as we know, the debugging goal here is to be sure that the author’s name is being displayed for each given post. Before I went ahead and updated/fixed the code given, the author line was showing the id instead of the name. The reason why that behavior was occurring is because the initial/original code was accessing “userId” prop on the post object and that contained the author’s id and it was rendering the ID instead of rendering the correct name that was associated with that id. So, in order to display the author’s name instead of just their id, I went ahead and defined the getUsername() which gets the name that is associated with the author’s ID. This is an arrow function with a parameter of (userId). It contains a const named user that will access that user’s (author) info from the object such as userId. The usersById is an object in which information for the author is stored. A conditional statement was also created on my end using a ternary operator that checks if the ‘user’ var contains a valid user obj. If ‘user’ is not null or undefined, it will return user.name which is the name of the author with the userId. But, if it is null or undefined, it will return unknown user which indicates that the author name is not found or available.
p element - displaying userId - so, in one of the p elements, the code was displaying the user id instead of the username (author’s name). This needed to be changed because it was not allowing the username to be displayed in the UI for each post. Adding {getAuthorsName inside the p element followed by a parenthesis that include post.userId ensured that the appropriate name was displayed in the UI. here is the final fix to the p element which displays the author’s name: {getAuthorsName(post.userId)}
# fm-react-debug
# fm-react-debug
# fm-react-debug
# fm-react-debug
