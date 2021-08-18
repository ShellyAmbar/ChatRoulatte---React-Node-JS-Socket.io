class User {
  id;
  streamId;
  name;
  age;
  country;
  city;
  aiIdeal;
  matchAges;
  matchCountry;
  matchCity;
  matchMaxDistance;

  User(
    id,
    streamId,
    name,
    age,
    country,
    city,
    aiIdeal,
    matchAges,
    matchCountry,
    matchCity,
    matchMaxDistance
  ) {
    this.id = id;
    this.streamId = streamId;
    this.name = name;
    this.age = age;
    this.country = country;
    this.city = city;
    this.aiIdeal = aiIdeal;
    this.matchAges = matchAges;
    this.matchCountry = matchCountry;
    this.matchCity = matchCity;
    this.matchMaxDistance = matchMaxDistance;
  }
}

export default User;
