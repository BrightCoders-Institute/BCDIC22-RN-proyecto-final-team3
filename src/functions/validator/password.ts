export default (function password() {
  return {
    cache: {} as { [key: string]: boolean },
    clear() {
      this.cache = {};
    },
    check(password: string) {
      if (password in this.cache) return this.cache[password];
      const passwordValidRegex =
        /^.*(?=.{8,120})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#/$%^&*()-_=+[\]\\{}:;"',<.>?]).*$/;
      const result = password.match(passwordValidRegex) ? true : false;
      this.cache[password] = result;
      return result;
    },
  };
})();
