import {Page, NavController} from 'ionic-angular';
import {GitHubService} from '../../services/github.ts'
import {DetailsPage} from '../details/details';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})

export class HomePage {
  public foundRepos;
  public username;

  constructor(private nav: NavController, private github: GitHubService) {
    //  this.nav = nav;
  }

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.log(err),
      () => console.log('getRepos completed')
    );
  }

  goToDetails(repo) {
    console.log("Clicked!!");
    this.nav.push(DetailsPage,{ repo: repo } );//,   
  }

}
