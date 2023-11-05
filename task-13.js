//  класс, который предоставляет общие методы для расчета площади и периметра.
class Figure {
    constructor() {
        this.name = "Shape";
    }

    Area() {
        return 0;
    }

    Perimeter() {
        return 0;
    }

    ShapeName() {
        return "Shape";
    }

    ShowInfo() {
        console.log(`Название фигуры: ${this.ShapeName()}`);
        console.log(`Площадь: ${this.Area()}`);
        console.log(`Периметр: ${this.Perimeter()}\n`);
    }
}

//  Он принимает стороны треугольника в качестве аргументов при создании.
// подкласс, представляющий треугольник. Он переопределяет методы Area(), Perimeter(), и ShapeName()
class Triangle extends Figure {
    constructor(sideA, sideB, sideC) {
        super();
        this.name = "Triangle";
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    Area() {
        const semPer = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(semPer * (semPer - this.sideA) * (semPer - this.sideB) * (semPer - this.sideC));
    }

    Perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    ShapeName() {
        return "Треугольник";
    }
}

// // подкласс, представляющий квадрата.
class Square extends Figure {
    constructor(side) {
        super();
        this.name = "Square";
        this.side = side;
    }

    Area() {
        return this.side * this.side;
    }

    Perimeter() {
        return this.side * 4;
    }

    ShapeName() {
        return "Квадрат";
    }
}

// // подкласс, представляющий прямоугольник.
class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.name = "Rectangle";
        this.width = width;
        this.height = height;
    }

    Area() {
        return this.width * this.height;
    }

    Perimeter() {
        return this.width * 2 + this.height * 2;
    }

    ShapeName() {
        return "Прямоугольник";
    }
}

// создается обьект фигуры,
//  вызываются методы ShowInfo(), чтобы вывести информацию о каждой фигуре, включая ее название, площадь и периметр.
const figure1 = new Triangle(4, 5, 6);
figure1.ShowInfo();

const figure2 = new Square(5);
figure2.ShowInfo();

const figure3 = new Rectangle(5, 6);
figure3.ShowInfo();
