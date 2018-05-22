import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private hiddenClassName: string = 'hidden';

  private header: any;
  private footer: any;
  
  ngOnInit() {
    let self = this;
    this.header = document.getElementsByClassName('header')['0'];
    this.footer = document.getElementsByClassName('footer')['0'];

    setTimeout(function(){ self.initWidgets(); }, 1500);
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      this.hideOnScroll();
      this.hideOnDoubleTap();
    }
  }

  initWidgets () {
    this.removeClass (this.header, this.hiddenClassName);
    this.removeClass (this.footer, this.hiddenClassName);
  }

  removeClass (element, clName) {
    if (element.classList)
      element.classList.remove(clName);
    else
      element.className = element.clName.replace(new RegExp('(^|\\b)' + clName.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  addClass (element, clName) {
    if (element.classList)
      element.classList.add(clName);
    else
      element.className += ' ' + clName;
  }

  hideOnDoubleTap() {
    let self = this;
    let isHidden = false;
    let bodyElement = document.getElementsByTagName("body")[0];

    bodyElement.onclick = function(){
      doubletapHandler();
    };
    
    let myLatestTap;
    function doubletapHandler() {
      let now = new Date().getTime();
      let timesince = now - myLatestTap;

      if((timesince < 400) && (timesince > 0)){
        if (self.header.classList.contains(self.hiddenClassName) && self.footer.classList.contains(self.hiddenClassName)) {
          self.removeClass (self.header, self.hiddenClassName);
          self.removeClass (self.footer, self.hiddenClassName);
        } else {
          self.addClass (self.header, self.hiddenClassName);
          self.addClass (self.footer, self.hiddenClassName);
        }
      }

      myLatestTap = new Date().getTime();
    }
  }

  hideOnScroll() {
    let self = this;
    let didScroll;
    let delta = 10;
    let lastPosition = 0;

    window.onscroll = function(){
      didScroll = true;
    };

    setInterval(function() {
      if (didScroll) {
          handleScroll();
          didScroll = false;
      }
    }, 200);

    function handleScroll() {
      if (window.pageYOffset > lastPosition + delta) {
        self.removeClass (self.footer, self.hiddenClassName);
        self.addClass (self.header, self.hiddenClassName);
      } else if (window.pageYOffset < lastPosition - delta) {
        self.removeClass (self.header, self.hiddenClassName);
        self.addClass (self.footer, self.hiddenClassName);
      }

      lastPosition = window.pageYOffset;
    }

  }

}
