import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'laba11';

  MyDets = [ //Создаем массив датчиков, состоящий из 10 объектов, каждый из которых содержит в себе поля id, имя и статус
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
    {id: 1, name: 'Name', status: true},
 ];

 ngOnInit(){ //До инициализации страницы задаем для каждого датчиков свой id, имя и задаем true/false
  for (let i = 0; i < this.MyDets.length; i++) {
    this.MyDets[i].id = i + 1;
    this.MyDets[i].name = 'Name' + (i + 1);
    if (Math.random() * 2 < 1){
      this.MyDets[i].status = true;
    } else {
      this.MyDets[i].status = false;
    }
  }
 }

 deleteDet(number){ //Удаление датчика и смена id для всех оставшихся датчиков
  this.MyDets.splice(number, 1)
  for (let i = 0; i < this.MyDets.length; i++){
    this.MyDets[i].id = i + 1;
  }
 }

  addDet(DetName){
    let det = {id: this.MyDets.length + 1, name: DetName, status: Math.random() * 2 < 1};
    this.MyDets.push(det);
 }
}
