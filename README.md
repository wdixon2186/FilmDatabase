## FILM AND BOOK DATABASE

A database that allows it's user to store information on films and books they own in case they'd ever need to look anything up.
![homePage](https://i.imgur.com/N4hTJXF.png)

## HOW IT WORKS

The site opens to the film index where it will list the title of every film put in. From there, the user is given the option to click on the title and retrieve the information, to click on a button to take them to the book index which is set up the same way, or to create a new movie and add it to the database. If the user makes a mistake, or loses the movie/book, they can edit or delete the information by clicking on the movie/book's name in the index and then clicking on a button labeled edit/delete.
![example](https://i.imgur.com/pYfuOc1.png)

## INSTALLATION INSTRUCTIONS

The database can and should be accessed through the Heroku link [here](https://books-and-movies-db.herokuapp.com/movies). However, if there was some modifications the user wanted to make, or they just wanted to look under the hood. All files are posted on this git hub repository [here](https://github.com/wdixon2186/FilmDatabase). The files are connected and all are needed, so if the user decides to go down that route they should make sure to download everything.

- Including

  - _controllers_

  - _db_

  - _models_

  - _views_

  - _.gitignore_

  - _index.js_

  - _package-lock.json_

  - _package.json_

## THOUGHT PROCESS

My thought process going into this project was to take things in small strides and get those working before moving on. That's usually the best mindset when coding anything, but for this project I knew I was building with an extra model and if I didn't specify and focus I could run into a bug that would be very hard to find. For that reason I decided to only focus on building out the books section first, making sure to give specific names to the files in the folders so I knew which one belonged to which model. When I had the book section working I built out the movie section in the same way, again focusing on specifics. I completed all of my testing on my localhost browser, and when that finished it was time to deploy to Heroku.

![example2](https://i.imgur.com/Eq1TO9h.png)

## Unsolved problems

There are not too many issues plaguing this code. Everything works, and doesn't feel overly repetitive. If there was one thing to change, It'd be removing the style tags and linking the css files with the same design. Other than that, the code is functional and pretty clean.

## BUILT WITH

- Node.js
- Express
- HBS
- Method-Override
- Body-Parser
- MongoDB
- Heroku

## AUTHORS

- William Dixon - Initial work
  [Melaina Valentine](https://github.com/Emme313)

## ACKNOWLEDGMENTS

- Ali Spittel
- Jamal Chapman
- Carlos Godoy
- Heroku
- MongoDB
- images

  - _https://hccontent.s3.amazonaws.com/Learning%20Center/Whats-Editing-All-About.jpg_

  - _https://cdn.pixabay.com/photo/2013/07/12/15/33/cutting-150066_960_720.png_

  - _https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1554919465/shape/mentalfloss/istock-157382617.jpg_

  - _https://images.squarespace-cdn.com/content/v1/5cf7fa4ee0c75a0001f65816/1561759535607-RPIH4ZNKHQ2WI1FCSDEI/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/MovieNightIcon-01.png_

  - _https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/book-quotes-1531945007.jpg?crop=1.00xw:0.753xh;0,0.247xh&resize=480:*_

  - _data:image/png;base64,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_

  - _http://static1.squarespace.com/static/53cbed3de4b0c984e431b64d/53cd5808e4b0d40dcfea4855/593d549be4fcb5a7cbb206cc/1497193358774/open-book.jpg?format=1500w_

  - _https://media.istockphoto.com/photos/blank-bluray-case-isolated-picture-id868380504?k=6&m=868380504&s=612x612&w=0&h=ZcEwiM8_0ag5lF-8FtOK3j56LgZcSrhzHgrFFd9Nqpw=_
