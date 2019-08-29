![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# RESTful API

### Technical Requirements

Before we started the project we were given this brief, we were told that our app must:

* **Include at least one model**
* **Be able to perform full CRUD actions** -
(Create, Read, Update, Delete)
* **Include a seeds file**

This last one was not part of the initial brief but was given as an additional task after we had created the API itself:

* **Add a front-end** and deploy the app, making it accessible to the public.


# Beatle-Maniacs

This API was first created as a database of Beatles songs using the noSQL database programme MongoDB and the Mongoose library. A user model was also added allowing for user interaction.

A React.js frontend was then added and each song in the database was synced to the Deezer API through the attribution of a "deezer_id" key on each object.

Users have the ability to register/login and then rate the songs out of five stars.

<img src="src/assets/index.png" width="900">

## Built using

1. HTML5
2. SCSS
3. JavaScript ES6 / React.js (Framework)
4. MongoDB/Mongoose (Library)
5. Consumes the Deezer API via the HTTP client Axios.


## Deployment

The app is deployed on Heroku and it can be found here: https://beatle-maniacs.herokuapp.com/

## Getting Started and How It Work

If you would like to download this repository and run the code yourself simply click to "clone" and then in the terminal enter the following commands:

```
<!-- First run: -->
$ yarn
<!--Then to seed the database: -->
$ yarn seed
<!-- Run the frontend of in your localhost: -->
$ yarn serve:front
<!-- Run the backend in your localhost: -->
$ yarn serve:back
```

When you have registered and logged in you will find that you have 15 stars to distribute amongst the tracks as you see fit. The total for each song is tracked and the songs are displayed on "The Song Board" in order from the most highly rated to the lowest and you can check how many stars you have left my clicking "My Stars".

### The Models and Controllers

The first step in creating my MongoDB database was to construct my models, for this API I have two models, one user model and one "track" model. This allows for an API to which people can sign-up, thus adding themselves as "users" who in turn can then interact with the "tracks". In this instance I did not want to allow users to create, delete or edit the tracks but have allowed the potential for this and have created the appropriate request functions in my Controller directory (these were created primarily as a learning exercise).

This was my first experience of user authentication and a steep learning curve. Creating my seemingly simple user model and the corresponding register/login functions entailed implementing a set of techniques for ensuring the security of my site, validating users and adhering to data protection guidelines for storing passwords.

The bcrypt library was in part used to achieve this, this library allows us to encrypt users passwords using an irreversible hashing system.

```js
userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })
  ```

Once a system was in place whereby I could allow users to safely login in to individual specific user accounts I could then use this authentication. Meaning that I could block certain actions to the un-authenticated and could also identify specific users as the "current user" and show them information specific to them.

This is the login function:

```js
function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      console.log(req.body)
      if(!user || !user.validatePassword(req.body.password)) {
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({ sub: user._id}, secret, { expiresIn: '72h' })
      res.status(200).json({ message: `Why hello there ${user.username}, it's nice to see you again!`,
        token
      })
    })
    .catch(next)
}
```

This then enabled me to write a "secure route" function:

```js
function secureRoute(req, res, next) {
  if (!req.headers.authorization) throw new Error('Not Found')
  const token = req.headers.authorization.replace('Bearer ', '')

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) return reject(err)
      return resolve(payload)
    })
  })
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if (!user) return res.status(401).json({ message: 'Unauthorized'})
      req.currentUser = user
      next()
    })
    .catch(next)
}
```

This function identifies the current user as a user by use of the JWT (JSON web token) that is allocated to them when they are logged in, in fact its presence in a users' local storage is all that defines them as "logged in" at all.

A jwt is made up of three parts, a header, a payload and a signature. With in the payload is a subject id that allows us to identify specific users and assign them as the "current user".




### Populating the Database

Once the models were constructed and the basic controller functions written to make preliminary HTTP requests of my data it was time to actually populate my database.

My track model looked like this:

```js
const trackSchema = new mongoose.Schema({

  title: {type: String, required: true, unique: true},
  year: { type: Number, required: true},
  single: {type: Boolean, required: true},
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

}, {
  timestamps: true
})
```

but ended up looking like this:

```js
const trackSchema = new mongoose.Schema({

  title: {type: String, required: true, unique: true},
  year: { type: Number, required: true},
  single: {type: Boolean, required: true},
  bSide: {type: Boolean},
  aSide: {type: Boolean},
  releasedWith: {type: String},
  chartPosition: {type: Number},
  album: {type: String},
  writtenBy: {type: String},
  trivia: {type: String},
  length: {type: Number},
  audio: { type: String },
  deezer_id: { type: Number, default: 116348656},
  ratingsTotal: {type: Number, default: 0, required: true},
  comments: [ commentSchema ],
  rating: [ ratingSchema ],

  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

}, {
  timestamps: true
})
```

The very last addition was that of the deezer_id, I decided to add this as it would allow me to incorporate as much information as the Deezer API has to offer going forward, thus giving me much more scope for expansion. I was originally using a Deezer audio snippet as the value of audio key but the subsequent inclusion of the deexer_id essentially made this superfluous. Going forward I would be able to trim my model and retain only the information not also provided by Deezer.

The JSON object returned from a simple Show GET request looks like this for each track:



<img src="src/assets/json.png" width="400">

## Wins and Key Learnings

The combination of processes involved in implementing the user authentication proved a valuable lesson, this was my very first experience of writing a JavaScript promise and also my first time using a JSON Web Token. Both of which are concepts I would soon come to consider as fundamental to my development process (specifically when working with Node.js in the case of the former).

I was also pleased that I worked out how to incorporate a working rating system into my backend, I was pleasaed that I managed to formulate a rating function that would accurately designate stars to the tracks while subtracting them from the user but only if the user had enough stars to give! I had purposefully given my self a challenge here as this was not part of the brief but I wanted to experiment with controller functions as much as possible and I was pleased that I did manage to achieve what I set out to: 

```js
function ratingCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Track
    .findById(req.params.id)
    .populate('user')
    .then(track => {
      const rating = req.body.rating
      if (req.currentUser.stars - rating >= 0) {
        req.currentUser.stars = req.currentUser.stars - rating
      } else if (req.currentUser.stars - rating < 0) throw new Error('Not Found')
      if(!track) throw new Error('Not Found')
      track.rating.push(req.body)
      track.ratingsTotal = track.ratingsTotal + rating
      req.currentUser.save()
      console.log(req.currentUser, track)
      return track.save()
    })
    .then(track => res.status(201).json(track))
    .catch(next)
}

```



## Challenges and Future Improvements

As the front-end for this project was a last minute addition there are a few components with which I am not quite satisfied.

In order to implement the star rating system I resorted to using some Vanilla JavaScript which I know is far from ideal. I would like to go back and re-write this component in a more "Reactive" way.


<img src="src/assets/rating.png" width="900">
