import { Animal } from './Classes/AnimalSuperclass';
import { Parrot } from './Classes/ParrotClass';
import { Rabbit } from './Classes/RabbitClass';

const animals: Animal[] = [new Parrot('Kez', 2, 'Blue', 'female', 10), new Rabbit('Nastya', 3, 'Brown', 'male', 1.5)];
<<<<<<< HEAD
export function animalsOutput() {
  animals.forEach(animal => {
    console.log(animal.toString());
    console.log(animal.sound());
  });
}
=======
export function animalsOutput(){
animals.forEach(animal => {
  console.log(animal.toString());
  console.log(animal.sound());
});
}
>>>>>>> f535bb12492f1053980535fdb2c8c98207a7c7ff
