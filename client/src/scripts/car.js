class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card m-4" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="${this.manufacture}">
        <div class="card-body d-flex flex-column">
          <p>${this.model} / ${this.type}</p>
          <h5 class="card-title fw-bold">Rp ${this.rentPerDay} / hari</h5>
          <div class="text-icon pb-2 d-flex flex-row">
            <img src="images/icon_users.svg" alt="Icon Users">
            <p class="ms-2 my-0" id="capacity">${this.capacity} orang</p>
          </div>
          <div class="text-icon pb-2 d-flex flex-row">
            <img src="images/icon_settings.svg" alt="Icon Settings">
            <p class="ms-2 my-0" id="">${this.transmission}</p>
          </div>
          <div class="text-icon pb-2 d-flex flex-row">
            <img src="images/icon_calendar.svg" alt="Icon Calendar">
            <p class="ms-2 my-0" id="">Tahun ${this.year}</p>
          </div>
          <a href="#" class="btn bg-lime mt-4">Pilih Mobil</a>
        </div>
      </div>
    `;
  }
}
