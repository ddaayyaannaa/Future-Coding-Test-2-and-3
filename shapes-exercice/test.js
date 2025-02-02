const {
  Cylinder,
  Cuboid,
  TriangularPyramid,
  SquarePyramid,
  RectangularPyramid
} = require('./index');

try {
  const cylinder = new Cylinder(3, 7);
  console.log('Cylinder Volume:', cylinder.getVolume());

  const cuboid = new Cuboid(3, 4, 5);
  console.log('Cuboid Volume:', cuboid.getVolume());

  const triangularPyramid = new TriangularPyramid(6, 4, 10);
  console.log('Triangular Pyramid Volume:', triangularPyramid.getVolume());

  const squarePyramid = new SquarePyramid(5, 12);
  console.log('Square Pyramid Volume:', squarePyramid.getVolume());

  const rectangularPyramid = new RectangularPyramid(5, 4, 12);
  console.log('Rectangular Pyramid Volume:', rectangularPyramid.getVolume());
} catch (error) {
  console.error(error.message);
}
