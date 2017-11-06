import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  public babs : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  matericontent(babId,babTitle){

    let data = {
      id:babId,
      title:babTitle
    }
    this.navCtrl.push('MatericontentPage',data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriPage');
  }

  ionViewWillEnter(){
  	this.babsLoad();
  }

  babsLoad(){
  	this.http.get('http://localhost/basicdata/bab/bab.php')
  	.map(res => res.json())
  	.subscribe(data=> {
  		this.babs = data;
  	});
  }

}
