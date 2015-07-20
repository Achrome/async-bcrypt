import AsyncBcrypt from './bcrypt';

(async function() {
  const TEST_STR = 'foobarbaz';
  let salt = await AsyncBcrypt.genSalt(10, 10);
  let hash = await AsyncBcrypt.hash(TEST_STR, salt);
  console.log(salt, hash, await AsyncBcrypt.compare(TEST_STR, hash)); // #=> true
  console.log(await AsyncBcrypt.compare('invalid', hash)); // #=> false
  console.log(await AsyncBcrypt.compare(TEST_STR, 'error')); // #=> false
})();
