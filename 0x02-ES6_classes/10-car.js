class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new Error('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new Error('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new Error('color must be a string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this,
    );
    return clone;
  }
}

export default Car;
