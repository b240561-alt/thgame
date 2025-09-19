import { Question } from '../types/game';

export const questionBank: Question[] = [
  // Class 6 Mathematics - Number System
  {
    id: 'math_6_num_001',
    subject: 'Math',
    difficulty: 'easy',
    question: 'What is the place value of 7 in the number 47,832?',
    options: ['7,000', '700', '70', '7'],
    correctAnswer: 0,
    explanation: 'In 47,832, the digit 7 is in the thousands place, so its place value is 7 × 1000 = 7,000.'
  },
  {
    id: 'math_6_num_002',
    subject: 'Math',
    difficulty: 'easy',
    question: 'Round 4,567 to the nearest hundred.',
    options: ['4,500', '4,600', '4,570', '5,000'],
    correctAnswer: 1,
    explanation: 'To round to the nearest hundred, look at the tens digit (6). Since 6 ≥ 5, round up: 4,567 → 4,600.'
  },

  // Class 6 Mathematics - Fractions
  {
    id: 'math_6_frac_001',
    subject: 'Math',
    difficulty: 'easy',
    question: 'What is 3/4 + 1/4?',
    options: ['1', '4/8', '4/4', '1/2'],
    correctAnswer: 0,
    explanation: '3/4 + 1/4 = (3+1)/4 = 4/4 = 1. When adding fractions with the same denominator, add the numerators and keep the denominator same.'
  },
  {
    id: 'math_6_frac_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Which fraction is equivalent to 2/6?',
    options: ['1/3', '2/3', '4/6', '3/9'],
    correctAnswer: 0,
    explanation: '2/6 = 1/3 when simplified by dividing both numerator and denominator by their GCD, which is 2.'
  },
  {
    id: 'math_6_frac_003',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is 2/3 of 15?',
    options: ['10', '12', '9', '6'],
    correctAnswer: 0,
    explanation: '2/3 of 15 = (2/3) × 15 = (2 × 15)/3 = 30/3 = 10.'
  },

  // Class 6 Mathematics - Decimals
  {
    id: 'math_6_dec_001',
    subject: 'Math',
    difficulty: 'easy',
    question: 'What is 0.5 + 0.3?',
    options: ['0.8', '0.53', '8', '5.3'],
    correctAnswer: 0,
    explanation: '0.5 + 0.3 = 0.8. When adding decimals, align the decimal points and add normally.'
  },
  {
    id: 'math_6_dec_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Convert 3/5 to decimal form.',
    options: ['0.6', '0.35', '0.53', '0.65'],
    correctAnswer: 0,
    explanation: '3/5 = 3 ÷ 5 = 0.6. To convert a fraction to decimal, divide the numerator by the denominator.'
  },

  // Class 6 Mathematics - Geometry
  {
    id: 'math_6_geo_001',
    subject: 'Math',
    difficulty: 'easy',
    question: 'How many sides does a hexagon have?',
    options: ['6', '5', '7', '8'],
    correctAnswer: 0,
    explanation: 'A hexagon is a polygon with 6 sides. The prefix "hexa" means six.'
  },
  {
    id: 'math_6_geo_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is the perimeter of a rectangle with length 8 cm and breadth 5 cm?',
    options: ['26 cm', '40 cm', '13 cm', '24 cm'],
    correctAnswer: 0,
    explanation: 'Perimeter of rectangle = 2(length + breadth) = 2(8 + 5) = 2(13) = 26 cm.'
  },

  // Class 7 Mathematics - Integers
  {
    id: 'math_7_int_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is (-5) + (+3)?',
    options: ['-2', '+2', '-8', '+8'],
    correctAnswer: 0,
    explanation: '(-5) + (+3) = -5 + 3 = -2. When adding integers with different signs, subtract and take the sign of the larger absolute value.'
  },
  {
    id: 'math_7_int_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is (-4) × (-6)?',
    options: ['+24', '-24', '+10', '-10'],
    correctAnswer: 0,
    explanation: '(-4) × (-6) = +24. When multiplying two negative integers, the result is positive.'
  },
  {
    id: 'math_7_int_003',
    subject: 'Math',
    difficulty: 'hard',
    question: 'What is (-15) ÷ (+3)?',
    options: ['-5', '+5', '-18', '+18'],
    correctAnswer: 0,
    explanation: '(-15) ÷ (+3) = -5. When dividing integers with different signs, the result is negative.'
  },

  // Class 7 Mathematics - Algebra
  {
    id: 'math_7_alg_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'If x = 5, what is the value of 3x + 2?',
    options: ['17', '15', '13', '10'],
    correctAnswer: 0,
    explanation: '3x + 2 = 3(5) + 2 = 15 + 2 = 17. Substitute the value of x and perform the operations.'
  },
  {
    id: 'math_7_alg_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Simplify: 5a + 3a - 2a',
    options: ['6a', '10a', '8a', '3a'],
    correctAnswer: 0,
    explanation: '5a + 3a - 2a = (5 + 3 - 2)a = 6a. Combine like terms by adding/subtracting their coefficients.'
  },
  {
    id: 'math_7_alg_003',
    subject: 'Math',
    difficulty: 'hard',
    question: 'Solve for x: 2x + 7 = 15',
    options: ['4', '3', '5', '6'],
    correctAnswer: 0,
    explanation: '2x + 7 = 15 → 2x = 15 - 7 → 2x = 8 → x = 4. Subtract 7 from both sides, then divide by 2.'
  },

  // Class 7 Mathematics - Geometry
  {
    id: 'math_7_geo_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is the sum of angles in a triangle?',
    options: ['180°', '360°', '90°', '270°'],
    correctAnswer: 0,
    explanation: 'The sum of all interior angles in any triangle is always 180°. This is a fundamental property of triangles.'
  },
  {
    id: 'math_7_geo_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'If two angles of a triangle are 60° and 70°, what is the third angle?',
    options: ['50°', '60°', '40°', '30°'],
    correctAnswer: 0,
    explanation: 'Third angle = 180° - (60° + 70°) = 180° - 130° = 50°. The sum of all angles in a triangle is 180°.'
  },
  {
    id: 'math_7_geo_003',
    subject: 'Math',
    difficulty: 'hard',
    question: 'What is the area of a triangle with base 10 cm and height 6 cm?',
    options: ['30 cm²', '60 cm²', '16 cm²', '20 cm²'],
    correctAnswer: 0,
    explanation: 'Area of triangle = (1/2) × base × height = (1/2) × 10 × 6 = 30 cm².'
  },

  // Class 7 Mathematics - Ratio and Proportion
  {
    id: 'math_7_ratio_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is the ratio 15:25 in its simplest form?',
    options: ['3:5', '5:3', '15:25', '1:2'],
    correctAnswer: 0,
    explanation: '15:25 = 15÷5 : 25÷5 = 3:5. Divide both terms by their GCD (5) to simplify.'
  },
  {
    id: 'math_7_ratio_002',
    subject: 'Math',
    difficulty: 'hard',
    question: 'If 3:4 = x:20, find the value of x.',
    options: ['15', '12', '16', '18'],
    correctAnswer: 0,
    explanation: '3:4 = x:20 → 3/4 = x/20 → x = (3 × 20)/4 = 60/4 = 15.'
  },

  // Class 8 Mathematics - Rational Numbers
  {
    id: 'math_8_rat_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is (-3/4) + (1/2)?',
    options: ['-1/4', '1/4', '-1/2', '1/2'],
    correctAnswer: 0,
    explanation: '(-3/4) + (1/2) = (-3/4) + (2/4) = (-3+2)/4 = -1/4. Convert to common denominator first.'
  },
  {
    id: 'math_8_rat_002',
    subject: 'Math',
    difficulty: 'hard',
    question: 'What is (-2/3) × (9/4)?',
    options: ['-3/2', '3/2', '-18/12', '18/12'],
    correctAnswer: 0,
    explanation: '(-2/3) × (9/4) = (-2×9)/(3×4) = -18/12 = -3/2. Multiply numerators and denominators, then simplify.'
  },

  // Class 8 Mathematics - Linear Equations
  {
    id: 'math_8_linear_001',
    subject: 'Math',
    difficulty: 'hard',
    question: 'Solve: 3x - 5 = 2x + 7',
    options: ['12', '10', '8', '6'],
    correctAnswer: 0,
    explanation: '3x - 5 = 2x + 7 → 3x - 2x = 7 + 5 → x = 12. Move variables to one side and constants to the other.'
  },
  {
    id: 'math_8_linear_002',
    subject: 'Math',
    difficulty: 'hard',
    question: 'If 2(x + 3) = 14, find x.',
    options: ['4', '5', '3', '6'],
    correctAnswer: 0,
    explanation: '2(x + 3) = 14 → 2x + 6 = 14 → 2x = 8 → x = 4. Expand, then solve for x.'
  },

  // Class 8 Mathematics - Mensuration
  {
    id: 'math_8_men_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Find the area of a rectangle with length 8 cm and breadth 5 cm.',
    options: ['40 cm²', '26 cm²', '13 cm²', '45 cm²'],
    correctAnswer: 0,
    explanation: 'Area of rectangle = length × breadth = 8 × 5 = 40 cm². The area is measured in square units.'
  },
  {
    id: 'math_8_men_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is the perimeter of a square with side 6 cm?',
    options: ['24 cm', '36 cm', '12 cm', '18 cm'],
    correctAnswer: 0,
    explanation: 'Perimeter of square = 4 × side = 4 × 6 = 24 cm. Perimeter is the total length of all sides.'
  },
  {
    id: 'math_8_men_003',
    subject: 'Math',
    difficulty: 'hard',
    question: 'Find the area of a circle with radius 7 cm. (Use π = 22/7)',
    options: ['154 cm²', '44 cm²', '22 cm²', '308 cm²'],
    correctAnswer: 0,
    explanation: 'Area of circle = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².'
  },

  // Class 8 Mathematics - Data Handling
  {
    id: 'math_8_data_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Find the mean of: 10, 15, 20, 25, 30',
    options: ['20', '25', '15', '30'],
    correctAnswer: 0,
    explanation: 'Mean = (10 + 15 + 20 + 25 + 30) ÷ 5 = 100 ÷ 5 = 20. Mean is the sum of all values divided by the number of values.'
  },
  {
    id: 'math_8_data_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is the median of: 3, 7, 9, 12, 15?',
    options: ['9', '7', '12', '10'],
    correctAnswer: 0,
    explanation: 'Median is the middle value when data is arranged in order. Here, 9 is the middle value (3rd position out of 5 values).'
  },
  {
    id: 'math_8_data_003',
    subject: 'Math',
    difficulty: 'hard',
    question: 'Find the mode of: 2, 3, 4, 3, 5, 3, 6',
    options: ['3', '4', '5', '2'],
    correctAnswer: 0,
    explanation: 'Mode is the value that appears most frequently. Here, 3 appears 3 times, more than any other value.'
  },

  // Class 6 Mathematics - Basic Operations
  {
    id: 'math_6_basic_001',
    subject: 'Math',
    difficulty: 'easy',
    question: 'What is 144 ÷ 12?',
    options: ['12', '10', '14', '16'],
    correctAnswer: 0,
    explanation: '144 ÷ 12 = 12. You can verify: 12 × 12 = 144.'
  },
  {
    id: 'math_6_basic_002',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Find the LCM of 4 and 6.',
    options: ['12', '24', '8', '10'],
    correctAnswer: 0,
    explanation: 'LCM of 4 and 6: Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18... The smallest common multiple is 12.'
  },
  {
    id: 'math_6_basic_003',
    subject: 'Math',
    difficulty: 'medium',
    question: 'Find the HCF of 18 and 24.',
    options: ['6', '12', '3', '9'],
    correctAnswer: 0,
    explanation: 'Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. The highest common factor is 6.'
  },

  // Class 8 Mathematics - Exponents and Powers
  {
    id: 'math_8_exp_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is 2³ × 2²?',
    options: ['2⁵', '2⁶', '4⁵', '8²'],
    correctAnswer: 0,
    explanation: '2³ × 2² = 2^(3+2) = 2⁵. When multiplying powers with the same base, add the exponents.'
  },
  {
    id: 'math_8_exp_002',
    subject: 'Math',
    difficulty: 'hard',
    question: 'What is (3²)³?',
    options: ['3⁶', '3⁵', '9³', '27'],
    correctAnswer: 0,
    explanation: '(3²)³ = 3^(2×3) = 3⁶. When raising a power to a power, multiply the exponents.'
  },

  // Class 7 Mathematics - Percentage
  {
    id: 'math_7_per_001',
    subject: 'Math',
    difficulty: 'medium',
    question: 'What is 25% of 80?',
    options: ['20', '25', '15', '30'],
    correctAnswer: 0,
    explanation: '25% of 80 = (25/100) × 80 = 0.25 × 80 = 20.'
  },
  {
    id: 'math_7_per_002',
    subject: 'Math',
    difficulty: 'hard',
    question: 'If 60% of a number is 30, what is the number?',
    options: ['50', '40', '45', '55'],
    correctAnswer: 0,
    explanation: 'Let the number be x. 60% of x = 30 → (60/100) × x = 30 → x = 30 × (100/60) = 50.'
  }
];

export const getRandomQuestions = (count: number = 12): Question[] => {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', count: number = 4): Question[] => {
  const filtered = questionBank.filter(q => q.difficulty === difficulty);
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getQuestionsByClass = (classLevel: 6 | 7 | 8, count: number = 4): Question[] => {
  const filtered = questionBank.filter(q => q.id.includes(`math_${classLevel}_`));
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};