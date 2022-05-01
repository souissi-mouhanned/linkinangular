import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvitationServiceService {
//  readonly API_URL = 'http://localhost:8081/Invitation';
  constructor(private httpClient :HttpClient) { }

public getAllInvitation(){
    return this.httpClient.get("http://localhost:8081/Invitation/get-all-Invitation")
}
addInvitation(invitation : any){
  return this.httpClient.post("https://localhost:8081/Invitation/addInvitation",invitation)
}
editInvitation(invitation : any){
  return this.httpClient.put("http://localhost:8081/Invitation/modify-Invitation",invitation)
}
deleteInvitation(id_invitation : any){
  return this.httpClient.delete("http://localhost:8081/Invitation/remove-Invitation/"+id_invitation)
}

}

