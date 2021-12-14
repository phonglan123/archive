# NowhereAES: Encoding anything into "nowhere"
**How does it work?**
- Use SHA3-512 to encrypt each key (salt/access password) and store it in a A array.
- Encrypt content with each key using AES (Base64 format), store in B array.
- Merge the elments in both A and B array (separated by "|"), merge A (String format) with B (String format), separate by "#", call this total string is C
- Base64 encode the C string, then convert each character of C to special Unicode characters (the Unicode characters like a space)

**How to use it?**
```
var encrypted = nowhereaes_encrypt(original_text, keys) // keys is the A array on the documents above
var decrypted = nowhereaes_decrypt(encrypted, key) // key is a string (must be one of the "keys" or "A" array)
```

# Fun meme: Summon a random meme, joke and many fun things
- Memes APIs: [D3vd MemeApi](https://github.com/D3vd/Meme_Api), [Pushshift](https://pushshift.io/)
- Jokes APIs: [#1](https://official-joke-api.appspot.com/random_ten), [#2](https://v2.jokeapi.dev/joke/Any?amount=10)
- VN-Memes API: [Pushshift](https://pushshift.io/)
- Ori-Memes API: [Imgflip](https://imgflip.com/api)
- On this day API: [Wikipedia](https://en.wikipedia.org/api/rest_v1/)
- Random search: [Google](https://www.google.com/), [DuckDuckGo](https://duckduckgo.com/)

# Fun cmd: Some interesting console commands
- meow: See a fun fact about the cats (https://catfact.ninja/fact)
- dog_img: Cheer yourself up with random dog images (https://dog.ceo/api/breeds/image/random)
- bored: Find something to do by getting suggestions for random activities (https://www.boredapi.com/api/activity)
- guess_age "&lt;your name>": Predict the age of a person based on their name (https://api.agify.io/?name=yourname)
- guess_gender "&lt;your name>": Predict the gender of a person based on their name (https://api.genderize.io?name=yourname)
- guess_nationality "&lt;your name>": Predict the nationality of a person based on their name (https://api.nationalize.io?name=yourname)
- random_user: Get information about a random fake user, including gender, name, email, address, etc (https://randomuser.me/api/)