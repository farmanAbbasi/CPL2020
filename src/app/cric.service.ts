import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricService {

  constructor(private http: HttpClient) { }

  getData() {
    return [
      {
         "date": "19-Sep-2020",
         "team1": "MI ",
         "team2": " CSK"
      },
      {
         "date": "20-Sep-2020",
         "team1": "DC ",
         "team2": " KXIP"
      },
      {
         "date": "21-Sep-2020",
         "team1": "SRH ",
         "team2": " RCB"
      },
      {
         "date": "22-Sep-2020",
         "team1": "RR ",
         "team2": " CSK"
      },
      {
         "date": "23-Sep-2020",
         "team1": "KKR ",
         "team2": " MI"
      },
      {
         "date": "24-Sep-2020",
         "team1": "KXIP ",
         "team2": " RCB"
      },
      {
         "date": "25-Sep-2020",
         "team1": "CSK ",
         "team2": " DC"
      },
      {
         "date": "26-Sep-2020",
         "team1": "KKR ",
         "team2": " SRH"
      },
      {
         "date": "27-Sep-2020",
         "team1": "RR ",
         "team2": " KXIP"
      },
      {
         "date": "28-Sep-2020",
         "team1": "RCB ",
         "team2": " MI"
      },
      {
         "date": "29-Sep-2020",
         "team1": "DC ",
         "team2": " SRH"
      },
      {
         "date": "30-Sep-2020",
         "team1": "RR ",
         "team2": " KKR"
      },
      {
         "date": "1-Oct-2020",
         "team1": "KXIP ",
         "team2": " MI"
      },
      {
         "date": "2-Oct-2020",
         "team1": "CSK ",
         "team2": " SRH"
      },
      {
         "date": "3-Oct-2020",
         "team1": "RCB ",
         "team2": " RR"
      },
      {
         "date": "4-Oct-2020",
         "team1": "MI ",
         "team2": " SRH"
      },
      {
         "date": "5-Oct-2020",
         "team1": "RCB ",
         "team2": " DC"
      },
      {
         "date": "6-Oct-2020",
         "team1": "MI ",
         "team2": " RR"
      },
      {
         "date": "7-Oct-2020",
         "team1": "KKR ",
         "team2": " CSK"
      },
      {
         "date": "8-Oct-2020",
         "team1": "SRH ",
         "team2": " KXIP"
      },
      {
         "date": "9-Oct-2020",
         "team1": "RR ",
         "team2": " DC"
      },
      {
         "date": "10-Oct-2020",
         "team1": "KXIP ",
         "team2": " KKR"
      },
      {
         "date": "11-Oct-2020",
         "team1": "SRH ",
         "team2": " RR"
      },
      {
         "date": "12-Oct-2020",
         "team1": "RCB ",
         "team2": " KKR"
      },
      {
         "date": "13-Oct-2020",
         "team1": "SRH ",
         "team2": " CSK"
      },
      {
         "date": "14-Oct-2020",
         "team1": "DC ",
         "team2": " RR"
      },
      {
         "date": "15-Oct-2020",
         "team1": "RCB ",
         "team2": " KXIP"
      },
      {
         "date": "16-Oct-2020",
         "team1": "MI ",
         "team2": " KKR"
      },
      {
         "date": "17-Oct-2020",
         "team1": "RR ",
         "team2": " RCB"
      },
      {
         "date": "18-Oct-2020",
         "team1": "SRH ",
         "team2": " KKR"
      },
      {
         "date": "19-Oct-2020",
         "team1": "CSK ",
         "team2": " RR"
      },
      {
         "date": "20-Oct-2020",
         "team1": "KXIP ",
         "team2": " DC"
      },
      {
         "date": "21-Oct-2020",
         "team1": "KKR ",
         "team2": " RCB"
      },
      {
         "date": "22-Oct-2020",
         "team1": "RR ",
         "team2": " SRH"
      },
      {
         "date": "23-Oct-2020",
         "team1": "CSK ",
         "team2": " MI"
      },
      {
         "date": "24-Oct-2020",
         "team1": "KKR ",
         "team2": " DC"
      },
      {
         "date": "25-Oct-2020",
         "team1": "RCB ",
         "team2": " CSK"
      },
      {
         "date": "26-Oct-2020",
         "team1": "KKR ",
         "team2": " KXIP"
      },
      {
         "date": "27-Oct-2020",
         "team1": "SRH ",
         "team2": " DC"
      },
      {
         "date": "28-Oct-2020",
         "team1": "MI ",
         "team2": " RCB"
      },
      {
         "date": "29-Oct-2020",
         "team1": "CSK ",
         "team2": " KKR"
      },
      {
         "date": "30-Oct-2020",
         "team1": "KXIP ",
         "team2": " RR"
      },
      {
         "date": "31-Oct-2020",
         "team1": "DC ",
         "team2": " MI"
      },
      {
         "date": "1-Nov-2020",
         "team1": "CSK ",
         "team2": " KXIP"
      },
      {
         "date": "2-Nov-2020",
         "team1": "DC ",
         "team2": " RCB"
      },
      {
         "date": "3-Nov-2020",
         "team1": "SRH ",
         "team2": " MI"
      }
   ]
  }
}
