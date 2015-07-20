import Bcrypt from 'bcrypt';

let AsyncBcrypt = {};

AsyncBcrypt.genSalt = function(rounds : Number, seedLength : Number) : Promise {
  return new Promise((resolve : Function, reject : Function) => {
    Bcrypt.genSalt(rounds, seedLength, (err : Error, salt : String) => {
      if (err) {
        reject(err);
      }
      resolve(salt);
    });
  });
};

AsyncBcrypt.hash = function(str : String, salt : String) : Promise {
  return new Promise((resolve : Function, reject : Function) => {
    Bcrypt.hash(str, salt, (err : Error, hashed : String) => {
      if (err) {
        reject(err);
      }
      resolve(hashed);
    });
  });
};

AsyncBcrypt.compare = function(str : String, hash : String) : Promise {
  return new Promise((resolve : Function, reject : Function) => {
      Bcrypt.compare(str, hash, (err : Error, result : Boolean) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export default AsyncBcrypt;
