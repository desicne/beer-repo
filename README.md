# Quick beer code-test by Dejan

#### Prerequisite
In order for the following code to work, following technologies should be available at you local machine.
- `node` v8.9.3 or newer
- `npm` v6.7 or newer


#### Starting the app
Pull the code from public git repo.
```
npm install
npm run serve
```
The app will run on [localhost:8080](localhost:8080) just as any default vue-cli project.


#### About
The code is following a vue-cli guideline, with no architectural or any webpack configs I like to make.
Pages of interest are under `src/views` & `src/components`, there you will find page and component templates.

Actions and communication with API is under `store` folder. It is similar to React's Redux setup, so you can find there very simple mutations, actions, etc. I did not use modules for this very simple app but it is something that is part of my regular scenario.

#### To do's and discussion
There are two things that I did not accommodate, but it is no problem ofc to add. 
1. All the navigation is one one page, once I was playing with this API it just made more sense
   that search and fetching/showing all the beers made more sense to be all on one-page.

2. Testing... Ok this is a big one, but I already spent to much time on customing the looks so, I just commented
   out a blueprint for it, even though it would require proper passing of actions and settings commits in store 
   maybe a bit differently.

#### UX/Functional upgrades possible
1. I did not include regex expression to check for input data on search field.
   It is pretty basic stuff, so it would be as `^[a-zA-Z0-9- ]*$` for the case requested (think regex checks are best for these scenarios), also than I would 
   bind a conditional class for styling change (err display)
2. Better interaction with search box, remove it when mouse is not over that portion when results are
   there (HINT: now, just click on any result to get it done)

As of few things that I would add in order for this solution to be more complete and architectualy better, it would be, store modules, picker components and better UI after actions, more transitions and animations. Another thing that could be optimized are the API calls, inside the store, we could add api layer that would be in charge of implementing LRU caching for both server or client rendering, whatever the demand is. Also I would probably use lodash and its `debounce` for not making API calls all the times
for search.

I got the sense that this was mostly show-and-tell task, but I couldn't help myself and send something ugly.

For any additional questions do not hesitate to contact me on `desicne@gmail.com`

***
Thank you for the opportunity, hope we discuss more.