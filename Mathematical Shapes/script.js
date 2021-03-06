  // Constants
  const root2 = Math.sqrt(2);
  const pi = Math.PI;

  // Given value variables 
  let sq_l = 9;
  let tri_a = 5;
  let tri_b = 6;
  let tri_c = 7;
  let cir_r = 4;

  // Variables to store answers
  let sq_diagonal;
  let tri_sp;
  let tri_area;
  let cir_circ;
  let cir_area;

  // Calculations
  // Diagonal of square
  sq_diagonal = sq_l*root2;
  console.log(`The diagonal of the square is ${sq_diagonal}.`);
  
  // Area of Triangle 
  tri_sp = (tri_a + tri_b + tri_c)/2;
  console.log(`The semiperimeter is ${tri_sp}.`);
  tri_area = Math.sqrt((tri_sp)*((tri_sp-tri_a)*(tri_sp-tri_b)*(tri_sp-tri_c)));
  console.log(`Therefore, the area of the triangle is ${tri_area}`);

  // Circumference of Circle
  cir_circ = 2*pi*cir_r;
  console.log(`The circumference of the circle is ${cir_circ}`);

  // Surface Area of Circle
  cir_area = pi*cir_r*cir_r;
  console.log(`The surface area of the circle is ${cir_area}`);