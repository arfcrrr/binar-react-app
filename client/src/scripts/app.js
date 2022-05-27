class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.dataDate = document.querySelector("[data-date]");
    this.dataTime = document.querySelector("[data-time]");
    this.dataCapacity = document.querySelector("[data-capacity]");
  }

  async init() {
    await this.load();

    // Register click listener
    this.loadButton.onclick = this.run;
  }

  setParams = () => {
    let date = new Date(this.dataDate.value);
    let time = this.dataTime.value;
    date.setHours(time);

    urlSearchParams.set("date", date.getTime());
    urlSearchParams.set("capacity", this.dataCapacity.value);
  }

  getParams = () => {
    let query = {};
    for (const [key, value] of urlSearchParams) {
      query[key] = value;
    }
    return query;
  }

  filterer = (item) => {
    const query = this.getParams();
    if (query?.capacity) {
      const available = item.availableAt.getTime() >= query.date;
      const capacity = item.capacity === Number(query.capacity);
      return (available && capacity);
    }
    return false;
  }

  run = async () => {
    this.setParams();
    await this.load();
    this.clear();
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars(this.filterer);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
