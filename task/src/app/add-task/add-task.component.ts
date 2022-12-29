import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  // imports: [NgbDatepickerModule],
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  priority: any[] = ['Low', 'Medium', 'High']
  status: any[] = ['To-do', 'In-Pogress', 'Done']
  person: any[] = ['Person-1', 'Person-2', 'Person-3']
  allData: any[] = []
  addTAsk = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(150)]),
    priority: new FormControl('Low'),
    status: new FormControl('To-do'),
    person: new FormControl('Person-1')
  })

  get title() {
    return this.addTAsk.get('title')

  }
  get description() {
    return this.addTAsk.get('description')

  }

  closeResult = '';

  constructor(private modalService: NgbModal) { }


  collectData() {
    let a = this.addTAsk.value;

    this.allData.push(a)
    console.log('x', this.allData)


    // console.log('x', myData)


  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  ngOnInit(): void {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
