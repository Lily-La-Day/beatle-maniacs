const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Track = require('../models/track')



mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'LilyLaDay',
          email: 'Lily@email.com',
          password: 'pass',
          passwordConfirmation: 'pass',
          stars: 15
        }, {
          username: 'MrsLilyFace',
          email: 'mrsface@email',
          password: 'password',
          passwordConfirmation: 'password',
          stars: 15
        }
      ])
    })
    .then(users => {
      console.log(`ooh, you have made ${users.length} users!`)

      return Track.create([
        {

          title: 'Let It Be',
          year: 1969,
          single: true,
          aSide: true,
          releasedWith: 'You Know My Name (Look Up the Number)',
          album: 'Let It Be',
          audio: 'https://cdns-preview-e.dzcdn.net/stream/c-e7e6e2142422aa4599294dee57197be9-7.mp3',
          writtenBy: 'Paul McCartney',
          deezer_id: 116348656,
          user: users[0]

        },
        {
          title: 'Revolution',
          year: 1968,
          single: true,
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-7.dzcdn.net/stream/c-79738b8862bcad382c9415e916d46072-8.mp3',
          user: users[0],
          deezer_id: 579900502

        },
        {

          title: 'Get Back',
          year: 1969,
          single: true,
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-6.dzcdn.net/stream/c-6153111678856f4bf11ef511f2912d49-9.mp3',
          user: users[0],
          deezer_id: 116348634



        },
        {

          title: 'Eleanor Rigby',
          year: 1966,
          single: true,
          writtenBy: 'Lennon & McCartney',
          album: 'Revolver',
          audio: 'https://cdns-preview-1.dzcdn.net/stream/c-1c09efe0f2108cccf6bfeae7eef414e8-6.mp3',
          user: users[0],
          deezer_id: 116348622

        },
        {

          title: 'Ticket to Ride',
          year: 1965,
          single: true,
          writtenBy: 'John Lennon',

          audio: 'https://cdns-preview-f.dzcdn.net/stream/c-f476b3c5d5f7bb6e3ae31a1e2b65d0f3-10.mp3',
          trivia: 'seventh consecutive number one single',
          user: users[0],
          deezer_id: 116348608
        },
        {

          title: 'Blackbird',
          year: 1968,
          single: false,
          writtenBy: 'Paul McCartney',
          album: 'the White Album',
          trivia: 'No other Beatle than Paul is featured on this track.',
          audio: 'https://cdns-preview-9.dzcdn.net/stream/c-940693c0a30e575d6d0e6466e1c80763-9.mp3',
          user: users[0],
          deezer_id: 116348212

        },
        {

          title: 'The Ballad of John and Yoko',
          year: 1969,
          single: true,
          writtenBy: 'John Lennon',
          trivia: 'The group\'s last UK number one single (and officially their worst).',
          audio: 'https://cdns-preview-1.dzcdn.net/stream/c-184ef1033a5267bdf186fa3b4af0a4ae-9.mp3',
          user: users[0],
          deezer_id: 116348636

        },
        {

          title: 'Taxman',
          year: 1966,
          single: false,
          writtenBy: 'George Harrison',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-254d3bcda3cf40e385f15caedd6538c9-8.mp3',
          user: users[0],
          deezer_id: 116348398

        },
        {

          title: 'Here Comes The Sun',
          year: 1969,
          single: false,
          writtenBy: 'George Harrison',
          audio: 'https://cdns-preview-5.dzcdn.net/stream/c-5503df16eade59c9031bab1d4152c09f-9.mp3',
          user: users[0],
          deezer_id: 116348464

        },
        {

          title: 'Something',
          year: 1969,
          single: true,
          writtenBy: 'George Harrison',
          album: 'Abbey Road',
          audio: 'https://cdns-preview-b.dzcdn.net/stream/c-b6e3344d5944b91ae070ca84d526c99b-9.mp3',
          trivia: 'The band\'s only single written and sung by George Harrison',
          user: users[0],
          deezer_id: 116348454


        },
        {

          title: 'Paperback Writer',
          year: 1966,
          single: true,
          writtenBy: 'Paul McCartney (Lennon-McCartney)',
          audio: 'https://cdns-preview-e.dzcdn.net/stream/c-e89208c7c3b4ffc6d423eb475b5d9607-6.mp3',
          user: users[0],
          deezer_id: 116348618

        },
        {

          title: 'Back in the USSR',
          year: 1968,
          single: false,
          writtenBy: 'Paul McCartney',
          album: 'the White Album',
          audio: 'https://cdns-preview-1.dzcdn.net/stream/c-13a863657a2d9b7713cf90426c84c7fd-5.mp3',
          trivia: 'Recorded as a three piece after Ringo flounced due to Paul dissing him.',
          user: users[0],
          deezer_id: 116348192

        },

        {
          title: 'Yesterday',
          year: 1965,
          single: true,
          aSide: true,
          releasedWith: 'Act Naturally',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-f.dzcdn.net/stream/c-f303e321db793c3ad4af3326c1c4fc10-8.mp3',
          user: users[0],
          deezer_id: 116348612

        },
        {

          title: 'Ob-La-Di, Ob-La-Da',
          year: 1968,
          single: false,
          album: 'The White Album',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-c.dzcdn.net/stream/c-c41ecec4e6ac8f4479ba4aa191ac5eaf-10.mp3',
          user: users[0],
          deezer_id: 116348198


        },


        {

          title: 'She Loves You',
          year: 1963,
          single: true,
          aside: true,
          releasedWith: 'I\'ll Get You' ,
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-2edaf101a6365296015c578aa4326522-6.mp3',
          length: 2.18,
          deezer_id: 116348596,
          user: users[0]


        },
        {
          title: 'Norwegian Wood',
          year: 1965,
          single: false,
          album: 'Rubber Soul',
          writtenBy: 'John Lennon',
          trivia: 'Lennon wrote the song as a veiled account of an extramarital affair he had in London.',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-2def2b0e06184efd956b3bf342d3322f-7.mp3',
          user: users[0],
          deezer_id: 77649352

        },

        {
          title: 'Eight Days A Week',
          year: 1964,
          single: false,
          album: 'Beatles For Sale',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-8.dzcdn.net/stream/c-8bf8db0a2517da423dead0e92abde897-7.mp3',
          user: users[0],
          deezer_id: 116348606

        },

        {

          title: 'Lucy in the Sky with Diamonds ',
          year: 1967,
          single: false,
          album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          writtenBy: 'John Lennon',
          trivia: 'Lennon\'s son Julian allegedly inspired the song with a nursery school drawing that he called Lucy – in the sky with diamonds.',
          audio: 'https://cdns-preview-8.dzcdn.net/stream/c-803d6c51eefaa0526ec4e57079bdd871-12.mp3',
          user: users[0],
          deezer_id: 363732981

        },

        {

          title: 'Nowhere Man',
          year: 1965,
          single: false,
          album: 'Rubber Soul',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-5.dzcdn.net/stream/c-5a09b90331be76c9c8ce610823f40ed7-5.mp3',
          user: users[0],
          deezer_id: 116348258


        },
        {

          title: 'Love Me Do',
          year: 1963,
          single: true,
          aside: true,
          releasedWith: 'P.S I Love You',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-d.dzcdn.net/stream/c-d76f48c821d98b1efde5c802f1d0bf8f-11.mp3',
          trivia: 'The group\'s debut single and first number one',
          user: users[0],
          deezer_id: 116348592


        },
        {

          title: 'Lady Madonna',
          year: 1968,
          single: true,
          releasedWith: 'The Inner Light',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-6.dzcdn.net/stream/c-6230923817c5251674362d2b2f007ed0-9.mp3',
          user: users[0],
          deezer_id: 116348630

        },
        {

          title: 'Twist and Shout',
          year: 1963,
          single: true,
          aside: true,
          releasedWith: 'There\'s a Place',
          writtenBy: 'Phil Medley & Bert Berns',
          album: 'Please Please Me',
          audio: 'https://cdns-preview-1.dzcdn.net/stream/c-10dee71e97fd5f67c1ee7ce7f146e4bd-7.mp3',
          length: 2.32,
          user: users[0],
          deezer_id: 116348340

        },
        {

          title: 'Hey Jude',
          year: 1968,
          single: true,
          aside: true,
          releasedWith: 'Revolution',
          writtenBy: 'Paul McCartney',
          length: 7.11,
          audio: 'https://cdns-preview-4.dzcdn.net/stream/c-48dcd704e15944fb14e9c3d857dc2f8e-9.mp3',
          trivia: 'The ballad evolved from \'Hey Jules\', a song McCartney wrote to comfort John Lennon\'s son, Julian.',
          user: users[0],
          deezer_id: 116348632

        },
        {
          title: 'Come Together',
          year: 1969,
          single: true,
          aSide: true,
          releasedWith: 'Something',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-9.dzcdn.net/stream/c-97cbadb152047017b276dda93d1e04ee-7.mp3',
          user: users[0],
          deezer_id: 116348452

        },
        {

          title: 'I am The Walrus',
          year: 1967,
          single: true,
          bSide: true,
          releasedWith: 'Hello, Goodbye',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-a.dzcdn.net/stream/c-a63c54db342391e8a4257a220f418132-10.mp3',
          trivia: 'As a single and a double EP the song had the distinction of being at number 1 and number 2 simultaneously.',
          user: users[0],
          deezer_id: 116348628

        },


        {

          title: 'I Saw Her Standing There',
          year: 1963,
          single: false,
          album: 'Please Please Me',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-d.dzcdn.net/stream/c-d67c844eb0f9e899238afe1ad2c7d7f8-7.mp3',
          user: users[0],
          deezer_id: 116348314


        },
        {
          title: 'We Can Work It Out',
          year: 1965,
          single: true,
          aSide: true,
          releasedWith: 'Day Tripper',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-3.dzcdn.net/stream/c-313f5364b951c2052db2424a0cc7ad5f-10.mp3',
          user: users[0],
          deezer_id: 116348614


        },
        {

          title: 'A Day in the Life',
          year: 1967,
          single: false,
          album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          writtenBy: 'Lennon-McCartney',
          trivia: 'A reputed drug reference in the line \'I\'d love to turn you on\' resulted in the song initially being banned from broadcast by the BBC.',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-21f3094d13019141d5b3ef8079e1cdc8-9.mp3',
          deezer_id: 116348694,
          user: users[0]

        },

        {

          title: 'I Want to Hold your Hand',
          year: 1963,
          single: true,
          aSide: true,
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-0.dzcdn.net/stream/c-0c4f7113c8decc3e2a1b890a49d3f309-7.mp3',
          releasedWith: 'This Boy',
          user: users[0],
          deezer_id: 116348462

        },
        {
          title: 'Penny Lane',
          year: 1967,
          single: true,
          aSide: true,
          releasedWith: 'Strawberry Fields Forever',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-e.dzcdn.net/stream/c-e448e8e4e24a74cd54f2ccc45dc0b521-7.mp3',
          user: users[0],
          deezer_id: 116348624

        },
        {

          title: 'Hello Goodbye',
          year: 1967,
          single: true,
          bSide: true,
          releasedWith: 'I am The Walrus',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-b.dzcdn.net/stream/c-bb37bfbfc98cbb3a3ee084f73c1ade6d-6.mp3',
          deezer_id: 116348628,
          user: users[0]

        },


        {

          title: 'Don\'t Let De Down',
          year: 1969,
          single: true,
          bSide: true,
          releasedWith: 'Get Back',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-4.dzcdn.net/stream/c-4b801977ab42a6b3daa16164395d32ee-7.mp3',
          user: users[0],
          deezer_id: 116348868


        },
        {
          title: 'Yellow Submarine',
          year: 1966,
          single: true,
          bSide: true,
          releasedWith: 'Eleanor Rigby',
          album: 'Revolver',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-3.dzcdn.net/stream/c-3a3f90156f7889fb1c0416d0aab894eb-9.mp3',
          user: users[0],
          deezer_id: 116348620


        },
        {

          title: 'Octopus\'s Garden',
          year: 1969,
          single: false,
          album: 'Abbey Road',
          writtenBy: 'Ringo Starr',
          audio: 'https://cdns-preview-d.dzcdn.net/stream/c-d2b9c711de872fd06efc3d19b0da8d6e-5.mp3',
          user: users[0],
          deezer_id: 116348460

        },

        {

          title: 'With a Little Help from My Friends',
          year: 1967,
          single: false,
          album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-8.dzcdn.net/stream/c-8ba82345244a42ba3b9780074d440197-6.mp3',
          user: users[0],
          deezer_id: 116348610

        },


        {

          title: 'In My Life',
          year: 1965,
          single: false,
          album: 'Rubber Soul',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-9.dzcdn.net/stream/c-9f2e6c1dfed46dc443bb04c7deb427c2-7.mp3',
          user: users[0],
          deezer_id: 116348272



        },
        {
          title: 'All My Loving',
          year: 1965,
          single: false,

          album: 'Rubber Soul',

          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-a.dzcdn.net/stream/c-a65bba22a76b21a4f353db88353fa458-7.mp3',
          user: users[0],
          deezer_id: 116348700


        },
        {

          title: 'Don\'t Let Me Down',
          year: 1969,
          single: true,
          bSide: true,
          releasedWith: 'Get Back',
          audio: 'https://cdns-preview-4.dzcdn.net/stream/c-4b801977ab42a6b3daa16164395d32ee-7.mp3',
          user: users[0],
          deezer_id: 116348868

        },

        {

          title: 'Help!',
          year: 1965,
          single: true,
          aSide: true,
          writtenBy: 'John Lennon',
          releasedWith: 'I\'m Down',
          album: 'Help!',
          audio: 'https://cdns-preview-8.dzcdn.net/stream/c-8ba82345244a42ba3b9780074d440197-6.mp3',
          user: users[0],
          deezer_id: 12047944

        },
        {
          title: 'Can\'t Buy Me Love',
          year: 1964,
          single: true,
          aSide: true,
          releasedWith: 'You Can\'t Do That',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-b.dzcdn.net/stream/c-b3776c7c641f7013909d7ea478e85574-8.mp3',
          user: users[0],
          deezer_id: 116348600

        },
        {

          title: 'All You Need is Love',
          year: 1967,
          single: true,
          aSide: true,
          releasedWith: 'Baby, You\'re a Rich Man',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-d.dzcdn.net/stream/c-d5bf72c10b057cb9b913b37ee965d289-8.mp3',
          deezer_id: 116348626,
          user: users[0]

        },


        {

          title: 'Drive My Car',
          year: 1965,
          single: false,
          album: 'Rubber Soul',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-6.dzcdn.net/stream/c-66abacfb05fb664f7cfe6de3192ebef0-8.mp3',
          user: users[0],
          deezer_id: 116348252


        },
        {
          title: 'A Hard Day\'s Night',
          year: 1964,
          single: true,
          aSide: true,
          releasedWith: 'Things We Said Today',
          album: 'A Hard Day\'s Night',
          audio: 'https://cdns-preview-d.dzcdn.net/stream/c-d8dc12e4995f77a9ffad913349b830cb-7.mp3',
          writtenBy: 'John Lennon',
          user: users[0],
          deezer_id: 116348602


        },


        {

          title: 'I Feel Fine',
          year: 1964,
          single: true,
          aSide: true,
          releasedWith: 'She\'s a Woman',
          audio: 'https://cdns-preview-5.dzcdn.net/stream/c-56199169dc0744b0d0e4ca08cb1d64c4-7.mp3',
          writtenBy: 'John Lennon',
          deezer_id: 116348604,
          user: users[0]

        },
        {

          title: 'While My Guitar Gently Weeps',
          year: 1968,
          single: false,

          album: 'the White Album',
          writtenBy: 'George Harrison',
          audio: 'https://cdns-preview-0.dzcdn.net/stream/c-01a3c02727edbc4519afbae6aaf7dae2-10.mp3',

          user: users[0],
          deezer_id: 116348204

        },


        {

          title: 'From Me To You',
          year: 1963,
          single: true,
          aSide: true,
          releasedWith: 'Thank You Girl',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-29fb985b27a0b133ee7cce300dc09f9b-9.mp3',
          user: users[0],
          deezer_id: 116348594


        },
        {
          title: 'Golden Slumbers',
          year: 1969,
          single: false,

          album: 'Abbey Road',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-7.dzcdn.net/stream/c-70ffb15763cc3ef63d27e8c2d3da07bb-7.mp3',
          user: users[0],
          deezer_id: 116348478


        },
        {

          title: 'Dear Prudence',
          year: 1968,
          single: false,
          album: 'The White Album',

          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-a.dzcdn.net/stream/c-a3aa94c57ed3b307a44c0585a4b0c3e1-4.mp3',
          user: users[0],
          deezer_id: 579900262

        },

        {

          title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          year: 1967,
          single: false,

          album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          audio: 'https://cdns-preview-3.dzcdn.net/stream/c-31d49725586bd851695c87e798a6f4a2-8.mp3',
          writtenBy: 'Paul McCartney',
          user: users[0],
          deezer_id: 116348670


        },
        {

          title: 'Across The Universe',
          year: 1969,
          single: false,
          album: 'Let It Be',

          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-0.dzcdn.net/stream/c-017f78dd07a773b12d5d58ed43de9cd3-8.mp3',
          user: users[0],
          deezer_id: 116348650

        },

        {

          title: 'Michelle',
          year: 1965,
          single: false,

          album: 'Rubber Soul',

          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-6.dzcdn.net/stream/c-657461f71963e4333c3371e9079ba28c-5.mp3',
          user: users[0],
          deezer_id: 116348264

        },

        {

          title: 'Strawberry Fields Forever',
          year: 1967,
          single: true,

          album: 'Penny Lane',

          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-e.dzcdn.net/stream/c-e448e8e4e24a74cd54f2ccc45dc0b521-7.mp3',
          user: users[0],
          deezer_id: 116348294

        },
        {
          title: 'Happiness Is A Warm Gun',
          year: 1968,
          single: false,
          album: 'the White Album',
          audio: 'https://cdns-preview-4.dzcdn.net/stream/c-47286ba1b7e6f99b28bf03ec99afc048-9.mp3',
          writtenBy: 'John Lennon',
          user: users[0],
          deezer_id: 116348206


        },


        {

          title: 'Helter Skelter',
          year: 1968,
          single: false,

          album: 'The White Album',
          audio: 'https://cdns-preview-e.dzcdn.net/stream/c-e83b10c43482030d33c750ea58649fbb-11.mp3',
          writtenBy: 'Paul McCartney',
          deezer_id: 116348236,
          user: users[0]

        },
        {

          title: 'I\'ve Got A Feeling',
          year: 1968,
          single: false,

          album: 'Let It Be',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-1.dzcdn.net/stream/c-11ce8a04654deb2fd6eba239b19c5d9c-9.mp3',
          trivia: 'It is a combination of two unfinished songs: Paul McCartney\'s "I\'ve Got a Feeling", and John Lennon\'s "Everybody Had a Hard Year". ',
          user: users[0],
          deezer_id: 116348660

        },


        {

          title: 'If I Fell',
          year: 1964,
          single: false,

          album: 'A Hard Day\'s Night',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-21c15e23926e4d504028e5465967f51b-6.mp3',
          user: users[0],
          deezer_id: 116348430


        },
        {
          title: 'Sun King',
          year: 1969,
          single: false,

          album: 'Abbey Road',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-0.dzcdn.net/stream/c-0b1a2095457fde23f1e956a092b3ca6e-10.mp3',
          user: users[0],
          deezer_id: 116348470


        },
        {

          title: 'Getting Better',
          year: 1967,
          single: false,
          album: 'gt. Pepper\'s Lonely Hearts Club Band',

          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-a.dzcdn.net/stream/c-a5a1d6b4ae3b46c18f735c41f3087d3f-11.mp3',
          user: users[0],
          deezer_id: 363732991

        },

        {

          title: 'When I\'m Sixty Four',
          year: 1967,
          single: false,

          album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          audio: 'https://cdns-preview-b.dzcdn.net/stream/c-b9389bdf55eec1f75e73bed994f91fc4-7.mp3',
          writtenBy: 'Paul McCartney',
          user: users[0],
          deezer_id: 116348686


        },
        {

          title: 'Mean Mr Mustard',
          year: 1969,
          single: false,
          album: 'Abbey Road',

          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-6.dzcdn.net/stream/c-6cefa175cdb6e18a32a4d1562f582b2a-7.mp3',
          user: users[0],
          trivia: 'The song was recorded with "Sun King" in one continuous piece.',
          deezer_id: 116348472

        },

        {

          title: 'The Long And Winding Road"',
          year: 1965,
          single: true,
          aSide: true,
          releasedWith: 'For You Blue',

          album: 'Let It Be',

          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-3.dzcdn.net/stream/c-344dce7295ca48ed6e884314218e6753-7.mp3',
          user: users[0],
          trivia: 'It was the final single released by the quartet.',
          deezer_id: 116348664

        },

        {

          title: 'Because',
          year: 1969,
          single: false,
          album: 'Abbey Road',
          writtenBy: 'John Lennon',
          audio: 'https://cdns-preview-f.dzcdn.net/stream/c-f7363172de9ffbc196bfb9dc9417e52d-8.mp3',
          user: users[0],
          deezer_id: 16348466

        },
        {
          title: 'She Came In Through The Bathroom Window',
          year: 1969,
          single: false,
          album: 'Abbey Road',
          audio: 'https://cdns-preview-c.dzcdn.net/stream/c-cdc71746057f042f0c99b6474a6690e8-8.mp3',
          writtenBy: 'Paul McCartney',
          user: users[0],
          deezer_id: 116348476


        },


        {

          title: 'For No One',
          year: 1966,
          single: false,
          album: 'Revolver',
          audio: 'https://cdns-preview-3.dzcdn.net/stream/c-375ce044b4fb4f29bb0a35e0a85d9426-9.mp3',
          writtenBy: 'Paul McCartney',
          deezer_id: 116348416,
          user: users[0]

        },
        {

          title: 'You Never Give Me Your Money',
          year: 1968,
          single: false,
          album: 'Abbey Road',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-8.dzcdn.net/stream/c-8c25b4348facb8f2ffb4c66b56c7b2eb-8.mp3',
          user: users[0],
          deezer_id: 116348468

        },


        {

          title: 'Maxwell\'s Silver Hammer',
          year: 1969,
          single: false,
          album: 'Abbey Road',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-2.dzcdn.net/stream/c-2e8b394754c5dd49c754d2e9aae41127-8.mp3',
          user: users[0],
          deezer_id: 116348456


        },
        {
          title: 'She\'s Leaving Home',
          year: 1969,
          single: false,
          album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
          writtenBy: 'Lennon-McCartney',
          audio: 'https://cdns-preview-f.dzcdn.net/stream/c-f32249cf46292a105a200b7301c1df38-9.mp3',
          user: users[0],
          deezer_id: 116348680


        },
        {

          title: 'Got To Get You Into My Life',
          year: 1966,
          single: false,
          album: 'Revolver',
          writtenBy: 'Paul McCartney',
          audio: 'https://cdns-preview-5.dzcdn.net/stream/c-555367d455d8244cddc2731154d58fb0-10.mp3',
          user: users[0],
          deezer_id: 116348422

        },

        {

          title: 'And I Love Her',
          year: 1964,
          single: false,
          album: 'A Hard Day\'s Night',
          audio: 'https://cdns-preview-8.dzcdn.net/stream/c-87df500b12d703476c8d08ddb39c1227-10.mp3',
          writtenBy: 'Paul McCartney',
          user: users[0],
          deezer_id: 116348434


        }
      ])
    })
    .then(() => console.log('tracks galore!'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
