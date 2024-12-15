import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  game = []
  url: string = "https://ubaya.xyz/hybrid/160422127/Project_UAS/"

  login(p_username:string, p_password:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username);
    body.set('password', p_password);

    const urlEncodedData = body.toString();

    return this.http.post("https://ubaya.xyz/hybrid/160422127/Project_UAS/login.php", urlEncodedData, { headers })
  }

  register(p_fname:string, p_lname:string, p_username:string, p_password:string, p_picture:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('fname', p_fname);
    body.set('lname', p_lname);
    body.set('username', p_username);
    body.set('password', p_password);
    body.set('picture', p_picture);

    const urlEncodedData = body.toString();

    return this.http.post("https://ubaya.xyz/hybrid/160422127/Project_UAS/register.php", urlEncodedData, { headers })
  }

  joinProposal(p_idmember:number, p_idteam:number, p_desc:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', p_idmember.toString());
    body.set('idteam', p_idteam.toString());
    body.set('description', p_desc);
    body.set('status', 'waiting');

    const urlEncodedData = body.toString();

    return this.http.post("https://ubaya.xyz/hybrid/160422127/Project_UAS/join_proposal.php", urlEncodedData, { headers })
  }

  getProposal(p_idmember:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', p_idmember.toString());

    const urlEncodedData = body.toString();

    return this.http.post("https://ubaya.xyz/hybrid/160422127/Project_UAS/get_proposal_bymember.php", urlEncodedData, { headers })
  }



  constructor(private http: HttpClient) { }

  gameList(): Observable<any>{
    return this.http.get(this.url + "get_game.php")
  }

  // getProposal(p_idmember:number): Observable<any>{
  //   return this.http.get(this.url + "get_proposal.php")
  // }
}
