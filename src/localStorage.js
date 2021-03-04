class LocalStorage {
  constructor(name, initialData) {
    this.name = name;
    // Create local storage if doesn't exist
    !localStorage.getItem(this.name) &&
      localStorage.setItem(this.name, JSON.stringify(initialData));
  }

  setData(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.name));
  }
}

export default LocalStorage;
