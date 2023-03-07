export default (function email() {
  return {
    cache: {} as { [key: string]: boolean },
    clear() {
      this.cache = {};
    },
    check(email: string) {
      if (email in this.cache) return this.cache[email];
      const emailValidRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      const result = email.match(emailValidRegex) ? true : false;
      this.cache[email] = result;
      return result;
    },
  };
})();
