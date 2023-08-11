import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from 'src/app/Shared/ApiService/apiservice.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('750ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('750ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TargetComponent implements OnInit {
  //variables
  timer_upper_limit: number = 120;
  timer_lower_limit: number = 0;
  time: number;
  isdisabled: any;
  player_score: any;
  interval_id: any;

  constructor(
    //services
    private toastr: ToastrService,
    private apiService: ApiserviceService
  ) {
    this.time = 120;
  }

  ngOnInit(): void {
    // Start the 2 minute timer   
    this.StartTimer()
  }


  // function to start the timer. An interval will be created that will run after every 1 second
  StartTimer() {
    this.toastr.clear();
    this.toastr.success("Round Started")
    this.interval_id = setInterval(this.DecrementTimer.bind(this), 1000);
  }


  // function to decrement the timer value by 1
  DecrementTimer() {
    this.time = this.time - 1;    

    // stopping condition (to stop time when timer hits 0)
    if (this.time == 0) {
      this.toastr.info("Time's Up")
      //wait for 15 seconds and then restart the timer
      this.Waitfor15Seconds()
      this.time = 120;
      return;
    }
  }

// functions to update the score
  OnRing1Click() {    
    let score = 1;
    if (this.time >= 0) {
      this.apiService.apiService_insertScore({ player_id: 20, player_name: "Waqas", player_score: score }).subscribe(res => {        
        this.toastr.clear();
        this.toastr.success(`Scored : ${score}`)
        this.player_score = res;        
      },error=>{
        console.log(error)
        this.toastr.clear();
        this.toastr.error("Internet Error Occured")
      })
    }
  }
  OnRing2Click() {
    let score = 2;
    if (this.time >= 0) {
      this.apiService.apiService_insertScore({ player_id: 20, player_name: "Waqas", player_score: score }).subscribe(res => {        
        this.toastr.clear();
        this.toastr.success(`Scored : ${score}`)
        this.player_score = res;

      },error=>{
        console.log(error)
        this.toastr.clear();
        this.toastr.error("Internet Error Occured")
      })
    }

  }
  OnRing3Click() {
    let score = 3;
    if (this.time >= 0) {
      this.apiService.apiService_insertScore({ player_id: 20, player_name: "Waqas", player_score: score }).subscribe(res => {        
        this.toastr.clear();
        this.toastr.success(`Scored : ${score}`)
        this.player_score = res;
      },error=>{
        console.log(error)
        this.toastr.clear();
        this.toastr.error("Internet Error Occured")
      })
    }

  }
  OnRing4Click() {
    let score = 4;
    if (this.time >= 0) {
      this.apiService.apiService_insertScore({ player_id: 20, player_name: "Waqas", player_score: score }).subscribe(res => {        
        this.toastr.success(`Scored : ${score}`)
        this.player_score = res;
      },error=>{
        console.log(error)
        this.toastr.clear();
        this.toastr.error("Internet Error Occured")
      })
    }
  }
  OnRing5Click() {
    let score = 5;
    if (this.time >= 0) {
      this.apiService.apiService_insertScore({ player_id: 20, player_name: "Waqas", player_score: score }).subscribe(res => {        
        this.toastr.clear();
        this.toastr.success(`Scored : ${score}`)
        this.player_score = res;
      },error=>{
        console.log(error)
        this.toastr.clear();
        this.toastr.error("Internet Error Occured")
      })
    }
  }
  OnRing6Click() {
    let score = 6;
    if (this.time >= 0) {
      this.apiService.apiService_insertScore({ player_id: 20, player_name: "Waqas", player_score: score }).subscribe(res => {        
        this.toastr.clear();
        this.toastr.success(`Scored : ${score}`)
        this.player_score = res;
      },error=>{
        console.log(error)
        this.toastr.clear();
        this.toastr.error("Internet Error Occured")
      })
    }
  }


  // function that clears the already running interval and then waits for 15 seconds to start a new timer for another round
  Waitfor15Seconds() {
  clearInterval(this.interval_id);
    setTimeout(() => {
      this.ClearScore();
    }, 15000);
  }



  // function that will run after 15 seconds to clear the score from the database
  ClearScore() {
    this.apiService.apiService_DeleteScoreIdBased({ player_id: 20 }).subscribe(res => {      
      this.player_score = [];
      this.StartTimer();
    })
  }
}
