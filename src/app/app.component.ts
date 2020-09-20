import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { CricService } from './cric.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Coding Premier League 2020';
  currentTimeZone: any;
  dateAndTime: any;
  teamA = "";
  teamB = "";
  teamAinCode="";
  teamBinCode="";
  imagePathA=""
  imagePathB=""
  data: any;
  datesCrossed=false;
  allImagesArray=[]
  teams = {
     "MI": "Graph Theory" ,
     "CSK": "Dynamic Programming | Greedy Algorithm" ,
     "RCB": "Arrays" ,
     "KKR": "Heaps and Maps | Tree Data Structure" ,
     "DC": "BackTracking | Hashing" ,
     "KXIP": "Linked Lists | Stacks and Queues" ,
     "RR": "Binary Searchs | Strings | Two Pointers" ,
     "SRH": "Search Algorithms" }

     teamsImages = {
      "MI": "/assets/MI.jpg" ,
      "CSK": "/assets/CSK.png" ,
      "RCB": "/assets/RCB.jpg" ,
      "KKR": "/assets/KKR.png" ,
      "DC": "/assets/DC.jpg" ,
      "KXIP": "/assets/KXIP.jpg" ,
      "RR": "/assets/RR.jpg" ,
      "SRH": "/assets/SRH.png" }
      keys=[
        "MI",
        "CSK",
        "RCB",
        "KKR",
        "RR",
        "KXIP",
        "DC",
        "SRH"
      ]
  
  constructor(private httpCric: CricService) {
    this.currentTimeZone = moment.tz.guess()
    //for fetching date and time
    const currentTime = new Date();
    this.dateAndTime = moment(currentTime).tz(this.currentTimeZone).format("DD-MMM-YYYY");
    //this.dateAndTime='23-Dec-2020'
  }

  ngOnInit() {
    this.getTeams();
  }


  getTeams() {

    this.data = this.httpCric.getData()
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].date.toString() == this.dateAndTime.toString()) {
        this.teamA = this.data[i].team1.trim()
        this.teamB = this.data[i].team2.trim()
        this.teamAinCode=this.teams[this.teamA]
        this.imagePathA=this.teamsImages[this.teamA]
        console.log(this.teamAinCode)
        this.teamBinCode=this.teams[this.teamB]
        this.imagePathB=this.teamsImages[this.teamB]

      }
    }
    //if the date has crossed
    if(this.teamA =="" && this.teamB==""){
      //show all teams and topics
      this.datesCrossed=true;
      this.allImagesArray.push(this.teamsImages['MI'])
      this.allImagesArray.push(this.teamsImages['CSK'])
      this.allImagesArray.push(this.teamsImages['RCB'])
      this.allImagesArray.push(this.teamsImages['KKR'])
      this.allImagesArray.push(this.teamsImages['RR'])
      this.allImagesArray.push(this.teamsImages['KXIP'])
      this.allImagesArray.push(this.teamsImages['SRH'])
      this.allImagesArray.push(this.teamsImages['DC'])
  
   

    }

  }
}
