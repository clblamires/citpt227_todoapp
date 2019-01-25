import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { Task } from './task';

// Angularfire and Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  //tasks: Array<Task> = []; // original code
  taskList: AngularFireList<Task>;
  tasks: Observable<any[]>;

  constructor(
    public alertController: AlertController,
    public af: AngularFireDatabase
  ) {
    this.taskList = this.af.list('/tasks');
    this.tasks = this.taskList.valueChanges();
    // this.tasks = [
    //   { title: "Buy groceries", status: 'open' },
    //   { title: "Wash car", status: "open" },
    //   { title: "Pick up prescriptions", status: "open"}
    // ]
  }

  // original from textbook
  // addItem() : void {
  //   let newTask: string = prompt("New Task");
  //   if( newTask !== '' ){
  //     this.tasks.push({ title: newTask, status: 'open'});
  //   }
  // }

  async addItem() {
    let alert = await this.alertController.create({
      message: "Enter a new task",
      inputs: [{
        name: 'newTask',
        type: 'text'
      }],
      buttons: [{
        text: "Cancel",
        role: 'cancel'
      },{
        text: 'Add',
        handler: (data) => {
          console.log(data);
          if( data.newTask != ''){
            // this.tasks.push({ // original code
            //   title: data.newTask, status: 'open'
            // });

            const newTaskReference = this.taskList.push({
              id: '',
              title: data.newTask,
              status: 'open'
            });
            newTaskReference.update({id: newTaskReference.key });

          }// end if
        }// end handler
      }]// end buttons
    });// end create
    await alert.present();
  }

  markAsDone( slidingItem: IonItemSliding, theTask ): void {
    // theTask.status = "done";
    // slidingItem.close();
    if( theTask.status != "done" ){
      theTask.status = "done";
    } else {
      theTask.status = "open";
    }
    this.taskList.update(theTask.id, theTask );
    slidingItem.close();
  }

  removeTask (slidingItem: IonItemSliding, theTask ): void {
    // theTask.status = "removed";
    // let index = this.tasks.indexOf(theTask);
    // if( index > -1 ){
    //   this.tasks.splice(index,1);
    // }
    this.taskList.remove(theTask.id);
    slidingItem.close();
  }

  ngOnInit() {
  }

}
