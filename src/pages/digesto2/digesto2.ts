import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-digesto2',
  templateUrl: 'digesto2.html',
})
export class Digesto2Page {

  loading: Loading;
  networkStatus: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private iab: InAppBrowser, public loadingCtrl: LoadingController, private network: Network) {
  }

  ionViewDidLoad() {
    let type = this.network.type;
    this.networkStatus = type;
    if (type != 'none') {
      this.openLink();
    } else {
      this.presentToast('Internet connection offline');
    }   
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Por favor, espere...',
      dismissOnPageChange: true
    });

    this.loading.present();
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  openLink(){
    this.iab.create('https://hcdposadas.gob.ar/digesto-nuevo/buscador_app','_self',{location:'no', hardwareback:'yes', hideurlbar: 'yes', clearcache : 'yes', clearsessioncache : 'yes', hidenavigationbuttons:'yes'});
  }

  // ngOnInit(){
    // const browser = this.IAB.create('http://myUrl.com/', '_self', {location: 'no'});
  // }

}
